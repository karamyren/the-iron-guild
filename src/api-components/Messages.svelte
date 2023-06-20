<script>
    import { onMount } from 'svelte';
    import { GetAllMessageHashesRoute } from '../lib/routes.js';
    import { hashList } from '../lib/datamodel.js';

    export let refreshTimer = 3000; //milliseconds 
    let promise = doFetch();
 
    async function doFetch (){
        const response = await fetch(GetAllMessageHashesRoute());
        //console.log(' r.json() >', response.clone().json())
        $hashList = await response.json();
    }  

    onMount(() => {   
        doFetch();
        const interval = setInterval(doFetch, refreshTimer);
        doFetch();
        return () => clearInterval(interval);
    });

</script>

{#await promise}
    <p>await</p>
{:then value}
<!-- don't display anything, this just gets a list of message hashes and puts it in the data model.-->
{:catch error}
    <p>error</p>
{/await}

