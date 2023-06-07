<script>
    import { GetMessageTranscriptRoute } from '../lib/routes.js';
    export let messageHash = '';
    let transcript = '';
    let promise = GetMessageTranscript(messageHash);
 
    async function GetMessageTranscript (msg){
        const response = await fetch(GetMessageTranscriptRoute(msg));
        transcript = await response.text();    
    }  
    
    $: GetMessageTranscript(messageHash);

</script>

{#await promise}
    <p>await</p>
{:then value}
    {transcript}
{:catch error}
    <p>error</p>
{/await}

