<script>
	import Modal from './Modal.svelte';

	import * as m from '$lib/paraglide/messages.js';

	let { isOpenModal, message = m.modal_error_default_message(), onClose } = $props();
</script>

<Modal bind:isOpen={isOpenModal} {onClose}>
	<div class="flex flex-col justify-center">
		<h2 class="text-lg font-bold">{m.modal_error_title()}</h2>
		<p class="mt-4">{message}</p>
		<div class="flex justify-end">
			<button
				class="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
				on:click={onClose}
			>
				Ok
			</button>
		</div>
	</div>
</Modal>
