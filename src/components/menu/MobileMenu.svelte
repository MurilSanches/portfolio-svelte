<script>
	import { menu_items } from '../../constants/menu';
	import { scrollToSection } from '../../helper/menu';

	let { isMenuOpen, closeMenu } = $props();
</script>

<div
	class="fixed left-0 top-0 z-[100] h-full w-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-gray-dark sm:w-64 md:hidden"
	class:translate-x-[-100%]={!isMenuOpen}
	class:translate-x-0={isMenuOpen}
>
	<div class="relative flex h-full w-full flex-col">
		<div class="flex items-center justify-between bg-blue-extraLight px-4 py-2 shadow-md">
			<h2 class="text-lg font-bold text-gray-800 dark:text-white">Menu</h2>
			<button onclick={closeMenu} class="h-6 w-6 text-gray-800 dark:text-white">
				<img src="/close.svg" alt="Icone de fechar" />
			</button>
		</div>
		<nav class="flex flex-col space-y-4 px-4 py-6">
			{#each menu_items as item}
				<button
					onclick={() => {
						scrollToSection(item.id);
						closeMenu();
					}}
					class="text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300"
				>
					{item.label()}
				</button>
			{/each}
		</nav>

		<div class="absolute bottom-0">teste</div>
	</div>
</div>
