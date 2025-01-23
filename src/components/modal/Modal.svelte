<script>
	import X from 'lucide-svelte/icons/x';

	export let isOpen = false;
	export let onClose = () => {};

	const closeModal = () => {
		onClose();
	};

	const handleBackdropClick = (event) => {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-[1000] !mt-0 flex items-center justify-center bg-[#000] bg-opacity-50"
		on:click={handleBackdropClick}
	>
		<div
			class="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark"
			role="dialog"
			aria-modal="true"
		>
			<button
				class="absolute right-2 top-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
				on:click={closeModal}
				aria-label="Close"
			>
				<X />
			</button>

			<slot></slot>
		</div>
	</div>
{/if}
