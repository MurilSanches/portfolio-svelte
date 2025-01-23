<script>
	import Modal from './Modal.svelte';

	let { isOpenModal, message, onClose } = $props();
</script>

<Modal bind:isOpen={isOpenModal} {onClose}>
	<h2 class="text-lg font-bold">Sucesso</h2>
	<p class="mt-4">{message}</p>
	<button class="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600" on:click={onClose}>
		Ok
	</button>
</Modal>
