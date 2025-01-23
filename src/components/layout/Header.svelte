<script>
	import * as m from '$lib/paraglide/messages.js';

	import { onMount } from 'svelte';

	import Menu from 'lucide-svelte/icons/menu';
	import { darkMode } from '$lib/stores/darkMode';

	import { switchToLanguage } from '../../utils/switchToLanguage';
	import { menu_items } from '../../data/menu';
	import { scrollToSection } from '../../helpers/menu';
	import { LANGUAGES } from '../../constants/languages';

	import MobileMenu from './menu/MobileMenu.svelte';
	import MenuOverlay from './menu/MenuOverlay.svelte';

	let bornfire = '/bornfire.png';
	let light_bornfire = '/bornfire_light.gif';

	let USAFlag = '/flags/USA.png';
	let BRFlag = '/flags/Brazil.png';

	let isMenuOpen = false;
	let isScrolled = false;

	const handleScroll = () => {
		isScrolled = window.scrollY > 0;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="sticky top-0 z-[80] flex items-center justify-between px-8 py-2 transition-all duration-300 md:py-4"
	class:bg-transparent={!isScrolled}
	class:bg-blue-extraLight={isScrolled}
	class:dark:bg-gray-dark={isScrolled}
	class:shadow-md={isScrolled}
>
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

	<button
		class="block h-6 w-6 text-blue-light dark:text-blue-extraLight md:hidden"
		onclick={() => (isMenuOpen = !isMenuOpen)}
	>
		<Menu class="h-6 w-6" />
	</button>

	<nav class="hidden justify-center space-x-6 self-center md:flex">
		{#each menu_items as item}
			<button
				onclick={() => scrollToSection(item.id)}
				class="uppercase hover:text-gray-dark dark:text-blue-extraLight dark:hover:text-cyan-500"
				class:text-blue-extraLight={!isScrolled}
				class:dark:hover:text-gray-dark={!isScrolled}
				class:text-blue-light={isScrolled}
			>
				{item.label()}
			</button>
		{/each}
	</nav>

	<div class="hidden items-center justify-center gap-x-4 md:flex">
		<button
			class="rounded-lg px-4 py-2 text-white hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
			class:bg-cyan-600={!isScrolled}
			class:bg-gray-dark={isScrolled}
		>
			{m.header_resume()}
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
