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
		content="Explore Murilo Sanches' portfolio, showcasing cutting-edge web development projects using React, SvelteKit, and more."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Murilo Sanches | Software Developer Portfolio" />
	<meta
		property="og:description"
		content="Discover more about web development projects by Murilo Sanches."
	/>
	<meta property="og:image" content="/og-image.jpg" />
	<meta property="og:url" content="https://muriloporfolio.com.br" />
	<meta property="og:type" content="website" />
</svelte:head>

<ParaglideJS {i18n}>
	<div class="relative h-full">
		<Header />
		{@render children()}
		<Footer />
	</div>
</ParaglideJS>
