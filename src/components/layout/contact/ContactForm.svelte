<script>
	import { enhance } from '$app/forms';
	// @ts-ignore
	import * as m from '$lib/paraglide/messages.js';
	import { toast } from '$lib/toaster/toast';
	import { ToastTypes } from '$lib/toaster/toastTypes';

	import ContactFormFields from './ContactFormFields.svelte';
	let form = $state(undefined);
	let submitting = $state(false);

	const clearForm = () => {
		if (form) {
			form = undefined;
		}
	};

	const handleSubmit = () => {
		submitting = true;
		return handleResult;
	};

	const handleResult = async ({ result }) => {
		form = result.data;
		submitting = false;

		if (result.type === 'success') {
			toast.send(result.data.server, ToastTypes.SUCCESS);
			clearForm();
		}

		if (result.type === 'failure' && result.status === 500) {
			toast.send(m.modal_error_default_message(), ToastTypes.ERROR);
		}
	};
</script>

<form
	method="POST"
	use:enhance={handleSubmit}
	class="mx-auto w-full justify-center space-y-4 rounded-lg bg-blue-extraLight p-6 shadow-md dark:bg-gray-dark"
>
	<ContactFormFields {form} />
	<div class="flex w-full justify-center">
		<button
			type="submit"
			disabled={submitting}
			class="rounded bg-gray-dark px-4 py-2 text-white hover:bg-cyan-600 disabled:opacity-50 dark:bg-cyan-600 dark:hover:bg-cyan-500"
		>
			{submitting ? 'Enviando...' : 'Enviar'}
		</button>
	</div>
</form>
