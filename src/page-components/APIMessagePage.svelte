<script>
    import { onMount } from 'svelte';
    import { hashList } from '../lib/datamodel.js';
   
    import Messages from '../api-components/Messages.svelte';
    import MessageCard from './MessageCard.svelte';

    let messageList;
    $: messageList = $hashList;


</script>

<h2>Message transcripts</h2>

<!-- Kick off the fetch request to the /messages data -->
<Messages refreshTimer={10000}/>

<!-- Display the messages -->
{#each messageList as message, i}
    <ul>
        <MessageCard count={i} hash={message.messageHash} />
    </ul>
    <hr>
{/each}