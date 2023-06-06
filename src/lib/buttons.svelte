<script>
    let check = false

	function handleClick(event) {
		console.log("button clicked")
        check = !check;
	}
</script>

{#if check}
<button id="check" on:click={handleClick}> </button>
{:else}
<button id="notCheck" on:click={handleClick}> </button>
{/if}

<style>
    button {
       height: 4rem;
	   width: 4rem;
       border:none;
    }

    #notCheck {
        background: url("../assets/not-check2.png");
        background-size: cover;
    }

    #check {
        background: url("../assets/check.png");
        background-size: cover;
    }

</style>