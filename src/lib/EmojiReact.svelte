<script>
    let emojis = [
    {item:'thumbsup', image:'👍'},
    {item:'coffee', image:'☕'},
    {item:'woah', image:'🚦'},
    {item:'party', image:'🎉'}
]
</script>

{#each emojis as emoji, i}
    <button>{emoji.image}</button>
{/each}

