<script>
    import { GetMessageLabelRoute } from "../lib/routes.js";
    export let messageHash = "";
    let label = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageLabelRoute(hash));
        label = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {ip}
{:catch error}
    <p>error</p>
{/await}
