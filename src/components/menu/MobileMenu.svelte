<script>
	import X from 'lucide-svelte/icons/x';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import { menu_items } from '../../data/menu';
	import { scrollToSection } from '../../helpers/menu';
	import { switchToLanguage } from '../../utils/switchToLanguage';
	import { LANGUAGES } from '../../constants/languages';

	let { isMenuOpen, closeMenu } = $props();

	let USAFlag = '/flags/USA.png';
	let BRFlag = '/flags/Brazil.png';
</script>

<div
	class="fixed left-0 top-0 z-[100] h-full w-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-black-dark sm:w-64 md:hidden"
	class:translate-x-[-100%]={!isMenuOpen}
	class:translate-x-0={isMenuOpen}
>
	<div class="relative flex h-full w-full flex-col">
		<div
			class="flex items-center justify-between bg-blue-extraLight px-4 py-2 shadow-md dark:bg-gray-dark"
		>
			<sh2 class="text-lg font-bold text-gray-800 dark:text-white">Menu</sh2>
			<button onclick={closeMenu} class="h-6 w-6 text-gray-800 dark:text-white">
				<X class="h-6 w-6" />
			</button>
		</div>
		<nav class="flex flex-col space-y-4 px-4 py-6">
			{#each menu_items as item}
				<button
					onclick={() => {
						scrollToSection(item.id);
						closeMenu();
					}}
					class="border-gray relative flex items-center justify-center border-b py-2 text-center uppercase text-gray-800 hover:bg-blue-extraLight hover:text-blue-500 dark:text-white dark:hover:text-gray-dark"
				>
					{item.label()}
					<ChevronRight class="absolute right-5 h-4 w-4" />
				</button>
			{/each}
		</nav>

		<div class="absolute bottom-0 flex w-full justify-center gap-x-4 border-t py-4 shadow">
			<button onclick={() => switchToLanguage(LANGUAGES.EN)} type="button">
				<img src={USAFlag} alt="Bandeira USA" class="h-6 w-8" />
			</button>
			<button onclick={() => switchToLanguage(LANGUAGES.PT_BR)} type="button">
				<img src={BRFlag} alt="Bandeira Brazil" class="h-6 w-8" />
			</button>
		</div>
	</div>
</div>
