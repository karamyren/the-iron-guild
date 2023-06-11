<script>
    import { text } from "svelte/internal";
    import {flip} from 'svelte/animate';

let colors = 
[
    {text:'demo message about things', location:0, color:'blue2'},
    {text:'another demo message', location:0, color:'blue1'},
    {text:'hey jason this is wayne i wanted to let you know', location:0, color:'blue1'},
    {text:'come up with words for this story ', location:0, color:'blue1'},
    {text:'you could even use this serger to make a dust ruffle', location:0, color:'blue1'},
    {text:'what is a dust ruffle', location:0, color:'blue1'},
    {text:'oh it is that thing that goes around the bottom of your bed', location:0, color:'blue1'},
    {text:'i have never once considered buying that', location:0, color:'blue2'}
]

    function itBeClicked(index){
        console.log("clicked " + index);
    }

    let hovering = false;

    const drop = (event, target) => {
    event.dataTransfer.dropEffect = 'move'; 
    const start = parseInt(event.dataTransfer.getData("text/plain"));
    const newTracklist = colors

    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }
    colors = newTracklist
    hovering = null
    }

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        const start = i;
        event.dataTransfer.setData('text/plain', start);
    }


    //on:click={() => itBeClicked({index})}

    let questions = [
		{ id: 1, text: ` ` },
		{ id: 2, text: `Follow Up` },
		{ id: 3, text: `Done` }
	];

	let selected;

	let answer = '';

    function removeFromArray (index) {
        colors.splice(index, 1);
        colors = colors;
    }


</script>

<h1>Whiteboard</h1>
{#each colors as color, index (color)}
    <div 
        class={color.color}
        animate:flip
        draggable={true} 
        on:dragstart={event => dragstart(event, index)}
        on:drop|preventDefault={event => drop(event, index)}
        ondragover="return false"
        on:dragenter={() => hovering = index}
        class:is-active={hovering === index}>
        
        {color.text}
        <br/>
        <button on:click={() => removeFromArray(index)} >
            X
        </button>

        <select >
            {#each questions as question}
                <option value={question}>
                    {question.text}
                </option>
            {/each}
        </select>

    </div>
{/each}

<style>

div{
    width:500px;
    display:inline-block;
    padding:0.5em;
    margin:0.5em;
}
select {
    float:right;
}
.blue1{
    background-color: #ffffff;
    outline: 1px solid #000000;
    color:#000000;
}
.blue2{
    background-color: #ffffff;
    outline: 1px solid #000000;
    color:#000000;
}
.blue3{
    background-color: #55d0ff;
    color: #55d0ff;
}
.blue4{
    background-color: #00acdf;
    color:#00acdf;
}
.blue5{
    background-color: #0080bf;
    color:#0080bf;
}

</style>