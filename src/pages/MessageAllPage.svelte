<script>
    import { onMount } from 'svelte';

    import { hashList } from '../lib/datamodel.js';
   
    import Messages from '../api-components/Messages.svelte';
    import MessageDateTime from '../api-components/MessageDateTime.svelte';
    import MessageTranscript from '../api-components/MessageTranscript.svelte';
    import MessageHeraldry from '../api-components/MessageHeraldry.svelte';

    let messageList;
    $: messageList = $hashList;


    //let messageList = Messages.me
    /*
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
    */

</script>

<h2>Message transcripts</h2>


<Messages />

{#each messageList as message, i}
    <ul>
        Message {i} | <MessageDateTime messageHash={message.messageHash}/> <br/>
        <MessageTranscript messageHash={message.messageHash}/> <br/>
        <MessageHeraldry messageHash={message.messageHash}/>
    </ul>
    <hr>
{/each}





<!--
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
        <hr>
    {/each}

{:catch error}
    <p>error</p>
{/await}

-->