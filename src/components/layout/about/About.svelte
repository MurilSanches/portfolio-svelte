<script>
	import * as m from '$lib/paraglide/messages.js';

	let src = '/me.jpg';
</script>

<section
	class="flex h-[60vh] flex-col items-center justify-center gap-y-16 md:flex-row md:gap-x-16"
	id="about"
>
	<div class="h-40 w-40 rounded-full">
		<img {src} alt="Murilo Sanches de Paula" class="rounded-full" />
	</div>
	<div class="flex flex-col space-y-4 text-left">
		<h1 class="text-4xl font-extrabold">
			<span class="text-cyan-600">Murilo Sanches de Paula</span>
		</h1>
		<p class="mx-auto max-w-2xl text-gray-400">
			{m.about_description()}
		</p>
	</div>
</section>
