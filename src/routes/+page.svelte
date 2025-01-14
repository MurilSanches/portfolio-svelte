<script>
	// @ts-nocheck

	import * as m from '$lib/paraglide/messages.js';
	import { darkMode } from '$lib/stores/darkMode';

	import { switchToLanguage } from '../utils/switchToLanguage';
	import { Languages } from '../constants/languages';

	let menu_items = ['about', 'projects', 'experience', 'skills', 'education'];

	let USAFlag = '/flags/USA.png';
	let BRFlag = '/flags/Brazil.png';
</script>

<header class="flex items-center justify-between bg-gray-800 px-8 py-4 shadow-md dark:bg-gray-900">
	<button
		class="text-2xl font-bold text-white dark:text-gray-300"
		onclick={() => darkMode.toggle()}
	>
		{$darkMode ? '🌙' : '☀️'}
	</button>
	<nav class="flex space-x-6">
		{#each menu_items as item}
			<a href="#" class="text-white hover:text-cyan-500 dark:text-black dark:hover:text-cyan-500">
				{m[`menu_${item}`]()}
			</a>
		{/each}
	</nav>
	<div class="flex items-center justify-center gap-x-4">
		<button
			class="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
			>Resume</button
		>
		<button onclick={() => switchToLanguage(Languages.EN)} type="button">
			<img src={USAFlag} alt="Bandeira USA" class="h-6 w-8" />
		</button>
		<button onclick={() => switchToLanguage(Languages.PT_BR)} type="button">
			<img src={BRFlag} alt="Bandeira Brazil" class="h-6 w-8" />
		</button>
	</div>
</header>
<section class="px-8 py-16 text-center">
	<h1 class="mb-4 text-4xl font-extrabold">
		<span class="text-cyan-500">Murilo Sanches</span>
	</h1>
	<p class="mx-auto max-w-2xl text-gray-400">
		{m.home_description()}
	</p>
	<p class="mt-4 text-gray-400">
		{@html m.home_description_bottom()}
	</p>
</section>
