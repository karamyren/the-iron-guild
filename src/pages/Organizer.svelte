<script>
    import { handle_promise } from "svelte/internal";
    import EmojiReact from "../lib/EmojiReact.svelte";
let messages = 
[
    {text:'We fixed the issue', heraldry:'', from:'Comp Station 1', color:'blue2'},
    {text:'I need to order a new thing so that this other thing doesnt happen', heraldry:'', from:'Tom', color:'blue1'},
    {text:'hey jason this is wayne i want to check in with you', heraldry:'', from:'Wayne', color:'blue1'},
    {text:'there is a noise but im going to keep going', heraldry:'', from:'Extruder 4', color:'blue1'},
    {text:'im out of material here so im going to stop for the day', heraldry:'', from:'Extruder 4', color:'blue1'},
    {text:'everything is great', heraldry:'', from:'Extruder 4', color:'blue1'},
    {text:'here is an update', heraldry:'', from:'Extruder 4', color:'blue1'},
    {text:'one last thing', heraldry:'', from:'Comp Station 1', color:'blue2'}
]

let emojis = [
    {item:'thumbsup', image:'👍'},
    {item:'coffee', image:'☕'},
    {item:'woah', image:'🚦'},
    {item:'party', image:'🎉'}
]

function clickEmoji(image, message){
    console.log(message)
    //add it to the message
    //message.text = image + message.text;
    //make svelte rerender
    //messages = messages;
    message.heraldry = message.heraldry + image;
    messages = messages;
}



</script>

<h1>Organizer</h1>

{#each messages as message, index (message)}
    <div>
        {message.from}
        {message.heraldry}<br/>
        {message.text} <br/>
        <!--<EmojiReact />-->
        {#each emojis as emoji, i}
            <button on:click={() => clickEmoji(emoji.image, message)}>{emoji.image}</button>
        {/each}
    </div>
{/each}

<style>
    div {
        border: 1px solid black;
        padding: 2em;
        margin: 1em;
    }
    button {
        float:right;
    }
</style>
