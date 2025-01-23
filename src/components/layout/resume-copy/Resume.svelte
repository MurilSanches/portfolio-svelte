<script>
	import * as m from '$lib/paraglide/messages.js';

	let bgImage = '/bg.jpg';
</script>

<section
	class="relative mb-16 flex h-[200px] w-full items-center justify-center bg-cover bg-fixed bg-center"
	style={`background-image: url(${bgImage})`}
>
	<div class="absolute inset-0 z-10 bg-[#000] bg-opacity-30"></div>
	<div class="relative z-10 text-center">
		<h2 class="mb-4 text-3xl font-semibold text-white">{m.resume_title()}</h2>
		<button
			class="rounded-md border-2 border-white px-6 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:px-8"
		>
			{m.resume_button()}
		</button>
	</div>
</section>
