<script>
	import { i18n } from '$lib/i18n';
	import { darkMode } from '$lib/stores/darkMode';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import { onMount } from 'svelte';

	import '../app.css';

	onMount(() => {
		if ($darkMode) {
			document.documentElement.classList.add('dark');
		}
	});

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
