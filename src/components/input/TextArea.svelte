<script>
	const { name = '', value = '', defaultValue = '', placeholder = '', errors = null } = $props();

	let errorClass = $derived(!!errors ? 'error' : '');
</script>

<div class="relative">
	<textarea
		{name}
		{value}
		{defaultValue}
		{placeholder}
		id={name}
		aria-labelledby={name}
		tabindex="0"
		class="w-full resize-none rounded border border-gray-300 p-2 {errorClass}"
	></textarea>
</div>

{#if errors}
	<span class="mt-2 text-sm text-red-600">{errors[0]}</span>
{/if}

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
