<script>
	import Menu from 'lucide-svelte/icons/menu';
	import { darkMode } from '$lib/stores/darkMode';

	import { switchToLanguage } from '../utils/switchToLanguage';
	import { LANGUAGES } from '../constants/languages';
	import MobileMenu from './menu/MobileMenu.svelte';
	import { menu_items } from '../data/menu';
	import { scrollToSection } from '../helpers/menu';
	import MenuOverlay from './menu/MenuOverlay.svelte';

	let bornfire = '/bornfire.png';
	let light_bornfire = '/bornfire_light.gif';

	let USAFlag = '/flags/USA.png';
	let BRFlag = '/flags/Brazil.png';

	let isMenuOpen = false;
</script>

<header
	class="sticky top-0 z-[80] flex items-center justify-between bg-blue-extraLight px-8 py-2 shadow-md dark:bg-gray-dark md:py-4"
>
	<!-- Dark Mode Toggle -->
	<button
		class="text-2xl font-bold text-white dark:text-gray-300"
		onclick={() => darkMode.toggle()}
	>
		{#if $darkMode}
			<img src={bornfire} alt="born fire" class="h-8 w-8" />
		{:else}
			<img src={light_bornfire} alt="born fire" class="h-8 w-8" />
		{/if}
	</button>

	<!-- Menu Button (Mobile) -->
	<button
		class="block h-6 w-6 text-blue-light dark:text-blue-extraLight md:hidden"
		onclick={() => (isMenuOpen = !isMenuOpen)}
	>
		<Menu class="h-6 w-6" />
	</button>

	<!-- Navigation Menu (Desktop) -->
	<nav class="hidden space-x-6 md:flex">
		{#each menu_items as item}
			<button
				onclick={() => scrollToSection(item.id)}
				class="text-blue-light hover:text-gray-dark dark:text-blue-extraLight dark:hover:text-blue-light"
			>
				{item.label()}
			</button>
		{/each}
	</nav>

	<!-- Right Section -->
	<div class="hidden items-center justify-center gap-x-4 md:flex">
		<button
			class="rounded-lg bg-gray-dark px-4 py-2 text-white hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
		>
			Resume
		</button>
		<button onclick={() => switchToLanguage(LANGUAGES.EN)} type="button">
			<img src={USAFlag} alt="Bandeira USA" class="h-6 w-8" />
		</button>
		<button onclick={() => switchToLanguage(LANGUAGES.PT_BR)} type="button">
			<img src={BRFlag} alt="Bandeira Brazil" class="h-6 w-8" />
		</button>
	</div>
</header>

<MenuOverlay {isMenuOpen} closeMenu={() => (isMenuOpen = false)} />
<MobileMenu {isMenuOpen} closeMenu={() => (isMenuOpen = false)} />
