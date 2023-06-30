<script>
  let gif;
  let url;
  let promise = getGif();

  async function getGif() {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=3AFajTqv6F4PcM45LGhrI7DGcD5eGq1r&tag=cat&rating=g`
    );
    gif = await response.json();
    url = gif.data.images.fixed_height.url;
  }

  $: getGif();
</script>

<div>
  <img src={url} alt="cat gif" />
</div>
