<script>
	// @ts-nocheck
	import * as m from '$lib/paraglide/messages.js';

	import { darkMode } from '$lib/stores/darkMode';
	import { social } from '../../data/social';

	let currentYear = new Date().getFullYear();
</script>

<footer
	class="bg-blue-light px-4 py-6 text-center text-gray-700 shadow-md dark:bg-gray-dark dark:text-gray-300"
>
	<div class="flex flex-col items-center space-y-4">
		<div class="flex space-x-4">
			{#each social as { href, Component }}
				<a {href} target="_blank" rel="noopener noreferrer" class="hover:opacity-75">
					<Component class="h-6 w-6" color="#FFF" />
				</a>
			{/each}
		</div>
		<p class="text-sm text-white">
			&copy; {currentYear}
			{m.copyright({ name: 'Murilo Sanches de Paula' })}
		</p>
		<p class="text-sm text-white">
			{m.copyright_ds3()}
		</p>
	</div>
</footer>
