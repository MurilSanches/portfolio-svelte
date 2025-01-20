<script>
	const { name = '', type = 'text', value = '', placeholder = '', errors = false } = $props();

	let errorClass = $derived(errors ? 'error' : '');
</script>

<div class="relative">
	<input
		{name}
		{type}
		{value}
		{placeholder}
		id={name}
		aria-labelledby={name}
		class="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 {errorClass}"
	/>
</div>

<style lang="css">
	.error {
		@apply text-red-900;
		@apply border-red-300;
		@apply placeholder-red-300;
		@apply focus:ring-red-500;
		@apply focus:border-red-500;
		@apply focus:outline-none;
	}
</style>
