<script>
	import * as m from '$lib/paraglide/messages.js';
	let bgImage = '/snowy-ariandel.jpg';
</script>

<section
	class="absolute top-0 flex h-[80vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-center text-center"
	style={`background-image: url(${bgImage})`}
>
	<div class="z-9 absolute inset-0 h-full w-full bg-[#000] bg-opacity-30"></div>
	<h2 class="z-10 mb-4 animate-fadeFly font-optimus-princeps text-6xl font-semibold text-white">
		MURILO SANCHES
	</h2>
	<span class="z-10 animate-fadeFly font-optimus-princeps text-base text-white delay-300">
		{m.title_name()}
	</span>
</section>
