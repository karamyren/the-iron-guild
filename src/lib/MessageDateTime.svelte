<script>
    import { GetMessageTimeServerHourRoute } from './store.js';
    export let messageHash = '';
    let time = '';
    let promise = GetMessageTimeServerHour(messageHash);
 
    async function GetMessageTimeServerHour (msg){
        const response = await fetch(GetMessageTimeServerHourRoute(msg));
        time = await response.text();    
    }  
    
    $: GetMessageTimeServerHour(messageHash);

</script>

{#await promise}
    <p>await</p>
{:then value}
    {time}
{:catch error}
    <p>error</p>
{/await}

