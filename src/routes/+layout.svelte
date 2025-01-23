<script>
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { i18n } from '$lib/i18n';
	import { darkMode } from '$lib/stores/darkMode';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import { onMount } from 'svelte';

	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';

	import '../app.css';

	injectSpeedInsights();

	onMount(() => {
		if ($darkMode) {
			document.documentElement.classList.add('dark');
		}
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Murilo Portfolio</title>
	<meta
		name="description"
		content="Create a Svelte action that adds easy tooltips to any HTML element."
	/>
</svelte:head>

<ParaglideJS {i18n}>
	<div class="relative h-full">
		<Header />
		{@render children()}
		<Footer />
	</div>
</ParaglideJS>
