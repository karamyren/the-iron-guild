<script>
    import { onMount } from 'svelte';
    import { readable, writable, derived } from 'svelte/store';
    import { allthemessages } from '../lib/datamodel.js';
   
    import MessageAll from '../api-components/MessageAll.svelte';
    import MessageCard from './MessageCard.svelte';

    let messageList;
    let orginalMessageList;
    orginalMessageList = messageList
    $: messageList = $allthemessages;
    const data = readable([
        {
			"title": 'Todo item 1',
			"heraldry": 'Paid'
		},
		{
			"title": 'Todo item 2',
			"heraldry": 'Paid'
		},
		{
			"title": 'Todo item 3',
			"heraldry": 'Unpaid'
		}
    ]);
  
   // $: console.log($allthemessages)

    let searchFilter

    function checkTheArray(){
        return messageList.heraldry == searchFilter
    }

    function filterMessages(array, query){
        array = messageList
        query = searchFilter
        console.log(messageList)
        console.log(query)
        messageList = array.filter(eachObj => eachObj.heraldry === query)

        console.log(messageList)
    }



</script>

<h2>Message transcripts</h2>


<MessageAll />

<input bind:value={searchFilter} />
<button on:click={filterMessages} >
    Filter Array
</button>

{#each messageList as message, i}
    
    <ul>
        
        Message {i} | {message.heraldry}
        <br/>
        {message.transcript}
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