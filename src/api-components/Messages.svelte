<script>
    import { GetAllMessageHashesRoute } from '../lib/routes.js';
    import { hashList } from '../lib/datamodel.js';

    let promise = doFetch();
 
    async function doFetch (){
        const response = await fetch(GetAllMessageHashesRoute());
        $hashList = await response.json();  
    }  
    
    $: doFetch();

</script>

{#await promise}
    <p>await</p>
{:then value}
<!-- don't display anything, this just gets a list of message hashes and puts it in the data model.-->
{:catch error}
    <p>error</p>
{/await}

