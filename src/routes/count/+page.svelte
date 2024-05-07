<script>
	let count = 1;
	let doubled;

	$: {
		if (count > 10) {
			console.log('Count is greater than 10');
		}
	}

	$: {
		doubled = count * 2;
	}
</script>

<div class="text-white">
	<div>Count - {count}</div>
	<div>Doubled value - {doubled}</div>
	<button on:click={() => count++} class="btn btn-neutral">Increment</button>
</div>
