<script>
    import { GetMessageAudioFileWavRoute } from '../lib/routes.js';
    export let messageHash = '';
    let audio;
 
    async function GetMessageAudio (msg) {
        audio = GetMessageAudioFileWavRoute(msg);
    }  
    
    $: GetMessageAudio(messageHash);

</script>

<audio controls>
    <source src="{audio}" type="audio/wav"/>
</audio>

