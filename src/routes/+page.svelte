<script>
	import About from '../components/layout/about/About.svelte';
	import Contact from '../components/layout/contact/Contact.svelte';
	import Education from '../components/layout/education/Education.svelte';
	import Experience from '../components/layout/experience/Experience.svelte';
	import Portfolio from '../components/layout/portfolio/Portfolio.svelte';
	import Resume from '../components/layout/resume-copy/Resume.svelte';
	import Skills from '../components/layout/skills/Skills.svelte';

	let bgImage2 = '/snowy-ariandel.jpg';
</script>

<div class="flex flex-col items-center justify-center bg-white dark:bg-black-dark">
	<section
		class="absolute top-0 flex h-[80vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-center"
		style={`background-image: url(${bgImage2})`}
	>
		<div class="z-9 absolute inset-0 h-full w-full bg-[#000] bg-opacity-30"></div>
		<h2 class="z-10 mb-4 text-6xl font-semibold text-white">MURILO SANCHES</h2>
		<span class="z-10 text-base text-white">Web Developer</span>
	</section>
	<div class="mt-[70vh] flex w-full flex-col gap-y-16 px-8 pb-16 md:w-4/5 md:px-0">
		<About />
		<Portfolio />
		<Experience />
		<Education />
		<Skills />
	</div>
	<Resume />
	<div class="flex w-full flex-col gap-y-16 px-8 pb-16 md:w-4/5 md:px-0">
		<Contact />
	</div>
</div>
