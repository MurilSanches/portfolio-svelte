<script>
	import * as m from '$lib/paraglide/messages.js';
	import { darkMode } from '$lib/stores/darkMode';

	import { switchToLanguage } from '../utils/switchToLanguage';
	import { Languages } from '../constants/languages';

	let bornfire = '/bornfire.png';
	let light_bornfire = '/bornfire_light.gif';

	let USAFlag = '/flags/USA.png';
	let BRFlag = '/flags/Brazil.png';

	let menu_items = [
		{ id: 'about', label: m.menu_about },
		{ id: 'portfolio', label: m.menu_projects },
		{ id: 'experience', label: m.menu_experience },
		{ id: 'education', label: m.menu_education },
		{ id: 'skills', label: m.menu_skills },
		{ id: 'contact', label: m.menu_contact }
	];

	/**
	 * @param {string} sectionId
	 */
	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<header
	class="sticky top-0 z-[100] flex items-center justify-between bg-blue-extraLight px-8 py-4 shadow-md dark:bg-gray-dark"
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
	<nav class="flex space-x-6">
		{#each menu_items as item}
			<button
				onclick={() => scrollToSection(item.id)}
				class="text-blue-light hover:text-gray-dark dark:text-blue-extraLight dark:hover:text-blue-light"
			>
				{item.label()}
			</button>
		{/each}
	</nav>
	<div class="flex items-center justify-center gap-x-4">
		<button
			class="rounded-lg bg-gray-dark px-4 py-2 text-white hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
		>
			Resume
		</button>
		<button onclick={() => switchToLanguage(Languages.EN)} type="button">
			<img src={USAFlag} alt="Bandeira USA" class="h-6 w-8" />
		</button>
		<button onclick={() => switchToLanguage(Languages.PT_BR)} type="button">
			<img src={BRFlag} alt="Bandeira Brazil" class="h-6 w-8" />
		</button>
	</div>
</header>
