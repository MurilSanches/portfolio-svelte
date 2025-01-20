<script>
	import { education } from '../../data/education';

	import * as m from '$lib/paraglide/messages.js';
</script>

<section id="education" class="flex flex-col gap-y-8">
	<h1 class="text-4xl font-extrabold">
		<span class="text-cyan-600">{m.education_title()}</span>
	</h1>
	<div class="flex flex-col gap-y-4 border-l-4 border-gray-dark pl-5">
		{#each education as item}
			<div class="flex flex-col gap-y-2">
				<div class="flex items-center gap-x-2">
					<h2 class="text-gray text-lg font-semibold dark:text-white">{item.institution}</h2>
					{#if item.end}
						<p class="text-gray-500">{item.start} - {item.end}</p>
					{:else}
						<p class="text-gray-500">{item.start} - Atual</p>
					{/if}
				</div>
				<p class="text-gray-400">{item.course()}</p>
			</div>
		{/each}
	</div>
</section>
