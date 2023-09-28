<script>
    import MessageDateTime from '../api-components/MessageDateTime.svelte';
    import MessageTranscript from '../api-components/MessageTranscript.svelte';
    import MessageHeraldry from '../api-components/MessageHeraldry.svelte';
    import MessageAudio from '../api-components/MessageAudio.svelte';

    export let hash = '';
    export let count;
</script>

Message {count} | {hash} | <MessageDateTime messageHash={hash}/> <br/>
<MessageTranscript messageHash={hash}/> <br/>
<MessageHeraldry messageHash={hash}/> <br/>
<MessageAudio messageHash={hash}/>
    