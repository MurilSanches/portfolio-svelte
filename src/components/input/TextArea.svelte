<script>
	import { ValidationMessage } from '@felte/reporter-svelte';
	import { createField } from 'felte';

	const { name, placeholder = '' } = $props();

	// Cria o campo usando Felte
	const { field } = createField(name);
</script>

<ValidationMessage for={name} level="error" let:messages={message}>
	<textarea
		use:field
		aria-labelledby={name}
		class="w-full resize-none rounded border border-gray-300 p-2"
		tabindex="0"
		{placeholder}
		class:error={message}
		data-felte-reporter-tippy-position-for={name}
		data-felte-reporter-tippy-trigger-for={name}
	></textarea>

	<span class="mt-2 text-sm text-red-600">{message || ''}</span>
</ValidationMessage>

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
