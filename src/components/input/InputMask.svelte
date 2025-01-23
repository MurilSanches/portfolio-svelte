<script>
	import { imask } from '@imask/svelte';

	const {
		name = '',
		type = 'text',
		value = '',
		defaultValue = '',
		placeholder = '',
		errors = null,
		options = { lazy: false, mask: '' }
	} = $props();

	let errorClass = $derived(!!errors ? 'error' : '');
</script>

<div class="relative">
	<input
		{name}
		{type}
		{value}
		{defaultValue}
		{placeholder}
		id={name}
		aria-labelledby={name}
		use:imask={options}
		class="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 {errorClass}"
	/>
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
