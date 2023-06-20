<script>
    import { GetMessageHeraldryRoute } from '../lib/routes.js';
    export let messageHash = '';
    let transcript = '';
    let promise = doFetch(messageHash);
 
    async function doFetch (msg){
        const response = await fetch(GetMessageHeraldryRoute(msg));
        transcript = await response.text();    
    }  
    
    $: doFetch(messageHash);

</script>

{#await promise}
    <p>await</p>
{:then value}
    {transcript}
{:catch error}
    <p>error</p>
{/await}

