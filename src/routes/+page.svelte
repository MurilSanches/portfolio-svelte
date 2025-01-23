<script>
	import About from '../components/layout/about/About.svelte';
	import Contact from '../components/layout/contact/Contact.svelte';
	import Education from '../components/layout/education/Education.svelte';
	import Experience from '../components/layout/experience/Experience.svelte';
	import Portfolio from '../components/layout/portfolio/Portfolio.svelte';
	import Resume from '../components/layout/resume-copy/Resume.svelte';
	import ScrollUpIcon from '../components/layout/scroll-up-icon/ScrollUpIcon.svelte';
	import Skills from '../components/layout/skills/Skills.svelte';
	import Background from '../components/layout/background/Background.svelte';
</script>

<div class="flex flex-col items-center justify-center bg-white dark:bg-black-dark">
	<Background />
	<div class="mt-[90vh] flex w-full flex-col gap-y-16 px-8 pb-16 md:mt-[70vh] md:w-4/5 md:px-0">
		<About />
		<Portfolio />
		<Experience />
		<Education />
		<Skills />
	</div>
	<Resume />
	<div class="flex w-full flex-col gap-y-16 px-4 pb-16 md:w-4/5 md:px-0">
		<Contact />
	</div>
	<ScrollUpIcon />
</div>
