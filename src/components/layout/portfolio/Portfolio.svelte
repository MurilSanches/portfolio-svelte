<script>
	import ExternalLink from 'lucide-svelte/icons/external-link';

	import * as m from '$lib/paraglide/messages.js';

	import { projects } from '../../../data/projects';
	import PortfolioCarousel from './PortfolioCarousel.svelte';
</script>

<section id="portfolio" class="flex flex-col gap-y-8">
	<h1 class="text-4xl font-extrabold">
		<span class="text-cyan-600">{m.portfolio_title()}</span>
	</h1>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each projects as project}
			<div
				class="group cursor-pointer space-y-4 overflow-hidden rounded-lg border border-gray-700 bg-white shadow-md transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
			>
				<div class="relative">
					<PortfolioCarousel images={project.images} />

					<div class="absolute left-2 top-2 flex gap-2">
						{#each project.tags as tag}
							<span
								class="rounded bg-cyan-600 px-2 py-1 text-xs font-semibold text-white shadow dark:bg-cyan-400"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>

				<div class="p-6 pt-0">
					<h2
						class="text-lg font-bold text-gray-dark group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400"
					>
						{project.name}
					</h2>
					<p class="text-gray-400">{project.description()}</p>
					<div class="flex w-full justify-end">
						<a
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
							class="flex w-28 items-center gap-x-2 rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium uppercase text-white shadow hover:bg-cyan-500"
						>
							Acessar
							<ExternalLink class="" />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
