<script>
    import { onMount } from 'svelte';
    import { GetAllMessageHashesRoute } from '../lib/routes.js';

    import MessageDateTime from '../api-components/MessageDateTime.svelte';
    import MessageTranscript from '../api-components/MessageTranscript.svelte';
    import MessageAudio from '../api-components/MessageAudio.svelte';

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

<h2>Message transcripts</h2>
{api}

{#await promise}
    <p>await</p>
{:then value}
    {#each messages as message, i}
        <ul>
            Message {i} | <MessageDateTime messageHash={message.messageHash}/> <br/>
            <MessageTranscript messageHash={message.messageHash}/> <br/>
            <MessageAudio messageHash={message.messageHash}/>           
        </ul>
    {/each}
{:catch error}
    <p>error</p>
{/await}
