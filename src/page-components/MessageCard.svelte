<script>
    import MessageDateTime from "../api-components/MessageDateTime.svelte";
    import MessageTranscript from "../api-components/MessageTranscript.svelte";
    import MessageHeraldry from "../api-components/MessageHeraldry.svelte";
    import Giphy from "../api-components/Giphy.svelte";
    import DeviceAll from "../api-components/DeviceAll.svelte";

    export let hash = "";
    export let count;
</script>

Message {count} | <MessageDateTime messageHash={hash} /> <br />
<MessageTranscript messageHash={hash} /> <br />
<MessageHeraldry messageHash={hash} /> <br />
<Giphy /> <br />
