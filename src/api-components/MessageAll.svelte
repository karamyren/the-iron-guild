<script>
    import { GetAllMessagesRoute } from '../lib/routes.js';
    import { allthemessages } from '../lib/datamodel.js';
    import { messageAll } from '../lib/datamodel.js';

    import MessageCard from '../pages/MessageCard.svelte';

   let allmessages
    let fetchDataResult
    let promise = doFetch();
 
    async function doFetch (){
        const response = await fetch(GetAllMessagesRoute());
        console.log(' r.json() >', response.clone().json())

        allmessages = await response.json();
        fetchDataResult = allmessages
        $allthemessages = allmessages

    }  
    

   // $: messageAllData = messageAll.from(fetchDataResult)
    $: console.log($allthemessages)
    //$: console.log(allmessages)

</script>

{#await promise}
    <p>await</p>
{:then value}

<!-- this displays all the info if you save the response.JSON() to allmessages 
{#each allmessages as message}
    {message.messageHash}
{/each}
-->

<!-- but i want to save it to the datamodel and use message card to make decisions 
so this component just pulls all and then fills the variable -->

    
{:catch error}
    <p>error</p>
{/await}

