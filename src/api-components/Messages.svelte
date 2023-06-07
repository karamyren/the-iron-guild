<script>
    import { GetAllMessageHashesRoute } from '../lib/routes.js';
    import { hashList } from '../lib/datamodel.js';

    export let messageHashes = [];
    let promise = doFetch();
 
    async function doFetch (){
        const response = await fetch(GetAllMessageHashesRoute());
        messageHashes = await response.json();  
        $hashList = messageHashes; 
       
    }  
    
    $: doFetch();
    //$: msg = messageHashesList.from(messageHashes);
    



</script>

{#await promise}
    <p>await</p>
{:then value}
   <!-- {messageHashes}
   {#each messageHashes as message, i}
        <ul> Message {message.messageHash}</ul>
   {/each}-->

{:catch error}
    <p>error</p>
{/await}

