<script>
	import { enhance } from '$app/forms';
	// @ts-ignore
	import ContactFormFields from './ContactFormFields.svelte';

	import ErrorModal from '../../modal/ErrorModal.svelte';
	import SuccessModal from '../../modal/SuccessModal.svelte';

	let form = $state(undefined);
	let submitting = $state(false);

	let openSuccessModal = $state(false);
	let openErrorModal = $state(false);
	let message = $state('');

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
			message = result.message;
			openSuccessModal = true;
			clearForm();
		}

		if (result.type === 'failure' && result.status === 500) {
			message = result.message;
			openErrorModal = true;
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

	<ErrorModal isOpenModal={openErrorModal} onClose={() => (openErrorModal = false)} />
	<SuccessModal
		isOpenModal={openSuccessModal}
		onClose={() => (openSuccessModal = false)}
		message=""
	/>
</form>
