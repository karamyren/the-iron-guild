<script>
    import { onMount } from "svelte";
    import { GetAllDevicesRoute } from "../lib/routes.js";
    import { deviceAll } from "../lib/datamodel.js";

    export let refreshTimer = 3000; //milliseconds
    let promise = doFetch();

    async function doFetch() {
        const response = await fetch(GetAllDevicesRoute());
        //console.log(' r.json() >', response.clone().json())
        $deviceAll = await response.json();
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
    <!-- this displays all the info if you save the response.JSON() to allmessages 
{#each allmessages as message}
    {message.messageHash}
{/each}
-->

    <!-- But we don't use this script for front end code, so nothing goes here
(except for error handling) -->
{:catch error}
    <p>error</p>
{/await}
