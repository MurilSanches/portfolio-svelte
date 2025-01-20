<script>
	import About from '../page/about/About.svelte';
	import Contact from '../page/contact/Contact.svelte';
	import Education from '../page/education/Education.svelte';
	import Experience from '../page/experience/Experience.svelte';
	import Portfolio from '../page/portfolio/Portfolio.svelte';
	import Skills from '../page/skills/Skills.svelte';

	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>

<section class="flex justify-center">
	<div class="flex w-full flex-col gap-y-16 px-8 pb-16 md:w-3/4 md:px-0">
		<About />
		<Portfolio />
		<Experience />
		<Education />
		<Skills />
		<Contact />
	</div>
</section>
