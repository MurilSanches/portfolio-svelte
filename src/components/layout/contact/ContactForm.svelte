<script>
	import { enhance } from '$app/forms';
	// @ts-ignore
	import ContactFormFields from './ContactFormFields.svelte';

	/**
	 * @type {{ data: { name: any; email: any; phone: any; about: any; }; errors: { name: any[]; email: any[]; phone: any[]; about: any[]; server: any; }; } | undefined}
	 */
	export let form;
	let submitting = false;

	const clearForm = () => {
		if (form) {
			form = undefined;
		}
	};

	const handleSubmit = () => {
		submitting = true;

		return async ({ result }) => {
			submitting = false;
			if (result.type === 'success') {
				alert('Formulário enviado com sucesso!');
				clearForm();
			}

			if (result.type === 'failure') {
				console.log(result);
			}
		};
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
