<script>
	import * as m from '$lib/paraglide/messages.js';
	import Contact from '../page/contact/Contact.svelte';
	import Skills from '../page/skills/Skills.svelte';
</script>

<section class="flex justify-center">
	<div class="flex w-full flex-col gap-y-16 px-8 py-16 md:w-3/4">
		<div class="flex flex-col gap-x-16 md:flex-row" id="about">
			<div class="flex flex-col text-left">
				<h1 class="mb-4 text-4xl font-extrabold">
					<span class="text-brown-base">Murilo Sanches</span>
				</h1>
				<p class="mx-auto max-w-2xl text-gray-400">
					{m.home_description()}
				</p>
				<p class="mt-4 text-gray-400">
					{@html m.home_description_bottom()}
				</p>
			</div>
		</div>

		<div class="flex gap-x-16" id="portfolio">
			<div class="flex flex-col text-left">
				<h1 class="mb-4 text-4xl font-extrabold">
					<span class="text-brown-base">Portfolio</span>
				</h1>
			</div>
		</div>

		<div class="flex gap-x-16" id="experience">
			<div class="flex flex-col text-left">
				<h1 class="mb-4 text-4xl font-extrabold">
					<span class="text-brown-base">Experiëncia</span>
				</h1>
			</div>
		</div>

		<Skills />
		<Contact />
	</div>
</section>
