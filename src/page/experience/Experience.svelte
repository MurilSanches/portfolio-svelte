<script>
	import { experience } from '../../constants/experience';

	import * as m from '$lib/paraglide/messages.js';
</script>

<section id="experience" class="flex flex-col gap-y-16">
	<h1 class="text-4xl font-extrabold">
		<span class="text-cyan-600">{m.experience_title()}</span>
	</h1>
	<div class="flex flex-col gap-y-4 border-l-4 border-gray-dark pl-5">
		{#each experience as item}
			<div class="flex flex-col gap-y-2">
				<div class="flex items-center gap-x-2">
					<h2 class="text-gray text-lg font-semibold dark:text-white">
						{item.position} - {item.company}
					</h2>
					{#if item.end}
						<p class="text-gray-500">{item.start} - {item.end}</p>
					{:else}
						<p class="text-gray-500">{item.start} - Atual</p>
					{/if}
				</div>
				<p class="text-gray-400">{item.description()}</p>
				{#if item.keyPoints}
					<ul class="list-disc pl-5 text-gray-400">
						{#each item.keyPoints as point}
							<li>{point()}</li>
						{/each}
					</ul>
				{/if}
				{#if item.achievements}
					<div>
						<h3 class="mt-4 font-semibold text-gray-300">Principais Conquistas:</h3>
						<ul class="list-disc pl-5 text-gray-400">
							{#each item.achievements as achievement}
								<li>{achievement()}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
