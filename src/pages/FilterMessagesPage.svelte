<script>
    import { messageAll } from '../lib/datamodel.js'; 
    import MessageAll from '../api-components/MessageAll.svelte';
    import MessageCard from './MessageCard.svelte';

    let localList
    let filteredList 
    $: updateList($messageAll)

    //when we auto filter we'll do something like
    //set searchFilter = "wayne" or whatever
    let searchFilter

    function doFilter(){
        filteredList = localList.filter(eachObj => eachObj.heraldry === searchFilter)
    }

    function BackToFullList(){
        searchFilter = null
        filteredList = localList
    }

    function updateList(newestList){
        localList = newestList
        if (searchFilter != null) {
            doFilter()
        } else {
            filteredList = localList
        }
    }

    //since we are an unlimited heraldry team
    //i could just do with a message hash + heraldry route
</script>

<h2>Filter Messages</h2>

<!-- Kick off the fetch request to the message/all data -->
<MessageAll refreshTimer={3000} />

<!-- Allow front end filtering of message/all data -->
<input bind:value={searchFilter} />
<button on:click={doFilter} >
    Filter Array
</button>

<button on:click={BackToFullList} >
    Put it back
</button>

<!-- Display the messages -->
{#each filteredList as message, i}  
    <ul>
        <MessageCard count={i} hash={message.messageHash} />
    </ul>
    <hr>
{/each}