<script>
    import { onMount } from "svelte";
    import { GetAllMessageHashesRoute } from "../lib/routes.js";
    import MessageDateTime from "../api-components/MessageDateTime.svelte";
    import MessageIp from "../api-components/MessageIp.svelte";
    import MessageTranscript from "../api-components/MessageTranscript.svelte";
    import MessageAudio from "../api-components/MessageAudio.svelte";
    import MessageLabel from "../api-components/MessageLabel.svelte";
    import MessageRead from "../api-components/MessageRead.svelte";
    import MessageMetadata from "../api-components/MessageMetadata.svelte";
    import MessageMetadataString from "../api-components/MessageMetadataString.svelte";
    import MessageTime from "../api-components/MessageTime.svelte";

    let messages = [];
    let api = GetAllMessageHashesRoute();

    async function GetMessage() {
        const response = await fetch(GetAllMessageHashesRoute());
        messages = await response.json();
    }

    onMount(() => {
        GetMessage();
        const interval = setInterval(GetMessage, 3000);
        GetMessage();
        return () => clearInterval(interval);
    });

    let promise = messages;

    $: GetMessage();
</script>

<h2>Message transcripts</h2>
{api}

{#await promise}
    <p>await</p>
{:then value}
    {#each messages as message, i}
        <ul>
            Message {i} | <MessageDateTime
                messageHash={message.messageHash}
            /><br />

            <MessageTime messageHash={message.messageHash} /> <br />
            <MessageLabel messageHash={message.messageHash} /> <br />
            <MessageIp messageHash={message.messageHash} /> <br />
            <MessageRead messageHash={message.messageHash} /> <br />
            <MessageTranscript messageHash={message.messageHash} /> <br />
            <MessageAudio messageHash={message.messageHash} />
            <MessageMetadata messageHash={message.messageHash} /> <br />
            <MessageMetadataString messageHash={message.messageHash} /> <br />
        </ul>
        <hr />
    {/each}
{:catch error}
    <p>error</p>
{/await}
