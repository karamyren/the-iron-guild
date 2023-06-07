<script>
    import { onMount } from 'svelte';
    import { GetAllMessageHashesRoute } from './routes.js';

    import MessageDateTime from '../api-components/MessageDateTime.svelte';
    import MessageTranscript from '../api-components/MessageTranscript.svelte';
    import MessageAudio from '../api-components/MessageAudio.svelte';
    import Buttons from './buttons.svelte';
    import Buttonsurgent from './buttonsurgent.svelte';


    let messages = [];
    let api = GetAllMessageHashesRoute();

    async function GetMessage (){
            const response = await fetch(GetAllMessageHashesRoute());
            messages = await response.json();
        }
    
    onMount(() => {   

       GetMessage();

        const interval = setInterval(GetMessage, 3000);
        GetMessage();

        return () => clearInterval(interval);

    });

    let promise = messages;

    $: GetMessage();

</script>

<h2>Message with buttons</h2>
{api}

{#await promise}
    <p>await</p>
{:then value}

    {#each messages as message, i}
        <ul>
            <Buttons /> <Buttonsurgent /> Message {i} | <MessageDateTime messageHash={message.messageHash}/> <br/>
            <MessageTranscript messageHash={message.messageHash}/> <br/>
            <MessageAudio messageHash={message.messageHash}/> 
            
        </ul>
        <hr>
    {/each}

{:catch error}
    <p>error</p>
{/await}
