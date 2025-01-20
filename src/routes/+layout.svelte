<script>
	import { i18n } from '$lib/i18n';
	import { darkMode } from '$lib/stores/darkMode';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import { onMount } from 'svelte';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import '../app.css';

	onMount(() => {
		if ($darkMode) {
			document.documentElement.classList.add('dark');
		}
	});

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="relative flex h-full flex-col">
		<Header />
		<div class="flex-1 bg-white dark:bg-black-dark">
			{@render children()}
		</div>
		<Footer />
	</div>
</ParaglideJS>
