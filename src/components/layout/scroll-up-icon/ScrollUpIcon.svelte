<script>
	import { onMount } from 'svelte';

	import * as m from '$lib/paraglide/messages.js';

	import tooltip from '../../tooltip/tooltip';
	import 'tippy.js/themes/light.css';
	import 'tippy.js/dist/tippy.css';

	let isScrolled = false;

	const handleScroll = () => {
		isScrolled = window.scrollY > 400;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const src = '/solaire.webp';
</script>

<button
	onclick={scrollUp}
	class="sticky bottom-8 z-[100] mr-8 h-10 w-10 self-end transition-all duration-300 hover:bottom-14"
	class:block={isScrolled}
	class:hidden={!isScrolled}
	use:tooltip={{ theme: 'light', content: m.scroll_up_message() }}
	type="button"
>
	<img {src} alt="Solaire de astora" />
</button>
