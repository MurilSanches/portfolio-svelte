<script>
	export let name = '';
	export let value = '';
	export let placeholder = '';
	export let errors = false;

	$: errorClass = errors ? 'error' : '';
</script>

<div class="relative">
	<textarea
		{name}
		{value}
		{placeholder}
		id={name}
		aria-labelledby={name}
		tabindex="0"
		class="w-full resize-none rounded border border-gray-300 p-2 {errorClass}"
	></textarea>
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
