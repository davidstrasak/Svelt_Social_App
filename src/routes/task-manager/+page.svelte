<script>
	import { onMount } from 'svelte';

	let count = 1;

	let text = ['1', '1'];

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Enter') {
					handleClick();
				}
			});
		}
	});

	function handleClick() {
		count += count;
		text.push(count.toString());
	}

	let arrays = text.map((item) => {
		return item;
	});

	$: {
		count;
		arrays = text.map((item) => {
			return item;
		});
	}
</script>

<div class="text-white">
	<div>This is the fibonacci sequence - {count}</div>
	<button
		on:click={() => {
			return handleClick();
		}}>Increment</button
	>
	<article class="w-1 text-pretty relative">
		<div>{arrays.join(' ')}</div>
	</article>
</div>
