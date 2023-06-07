<script>
    import { onMount } from 'svelte';

    import { hashList } from '../lib/datamodel.js';

    import Messages from '../api-components/Messages.svelte';
    import MessageDateTime from '../api-components/MessageDateTime.svelte';
    import MessageTranscript from '../api-components/MessageTranscript.svelte.js';
    import MessageAudio from '../api-components/MessageAudio.svelte.js';


    let messageList = $hashList;

//TODO expand data model
//TODO have this page load when the data model is ready, how to do this without calling messages
//TODO this is solving the problem of having Messages component being called here. it's weird with the each. go forward on another branch by settling this with only svelte fixes, not js stuff. 

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

<!--
{#each msgListFromJs as message, i}
  <ul>Message {i} {message}</ul>
{/each}
-->

<Messages />

{#each messageList as message, i}
  <!--<ul>Message {i} {message.messageHash}</ul>-->
  <ul>
    Message {i} | <MessageDateTime messageHash={message.messageHash}/> <br/>
    <MessageTranscript messageHash={message.messageHash}/> <br/>
    <MessageAudio messageHash={message.messageHash}/>
    
</ul>
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