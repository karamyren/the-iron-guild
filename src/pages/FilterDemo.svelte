<script>
	
	import { readable, writable, derived } from 'svelte/store';

	
	const data = readable([
		{
			"title": 'Todo item 1',
			"status": 'Paid'
		},
		{
			"title": 'Todo item 2',
			"status": 'Paid'
		},
		{
			"title": 'Todo item 3',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 4',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 5',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 6',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 7',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 8',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 9',
			"status": 'Unpaid'
		},
		{
			"title": 'Todo item 10',
			"status": 'Unpaid'
		}
	])
	
	const filter = writable({ status: 'All' })

	const filtered = derived([filter, data], ([$filter, $data]) => {
		if ($filter.status == 'All') return $data
		return $data.filter(x => x.status === $filter.status)
	})

	let navItems = [
		{
			"title": 'All',
		},
		{
			"title": 'Paid',
		},
		{
			"title": 'Unpaid',
		}
	]

</script>


<div class="nav-plus-content">
	
	<nav>
		{#each navItems as item}
			<button on:click={() => $filter.status = item.title} class:active={$filter.status == item.title}>{item.title}</button>
		{/each}
	</nav>

	<div class="content-view">
		<ul>
			{#each $filtered as item (item.title)}
			    {item.status} {item.title} <br/>
			{/each}
		</ul>
	</div>

</div>

<style>
	
	:global(html, body) {
		margin: 0;
		padding: 0;
	}

	nav {
		flex: 0 0 auto;
		white-space: no-wrap;
		display: flex;
		border-bottom: 1px solid #AAA;
		padding: 12px;
		overflow-x: scroll;
		background: #EEE;
	}

	button {
		background: none;
		border: none;
		appearance: none;
		display: flex;
		flex: 0 0 auto;
		padding: 10px 18px;
		min-height: 20px;
		text-decoration: none;
		border-radius: 24px;
	}
	
	button.active {
		background: #2766C5;
		color: #FFF;
	}

	ul {
		padding: 0;
		margin: 0;
	}
	
	.content-view {
		overflow: scroll;
		-webkit-overflow-scrolling: touch;
	}
	
	.nav-plus-content {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

</style>
