<script>
    import { onMount } from 'svelte';
    import { GetAllMessageHashRoute } from './store.js';

    import MessageDateTime from './MessageDateTime.svelte';
    import MessageTranscript from './MessageTranscript.svelte';
    import MessageAudio from './MessageAudio.svelte';
    import Buttons from './buttons.svelte';
    import Buttonsurgent from './buttonsurgent.svelte';


    let messages = [];
    let api = GetAllMessageHashRoute();

    async function GetMessage (){
            const response = await fetch(GetAllMessageHashRoute());
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
