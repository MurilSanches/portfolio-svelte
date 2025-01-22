<script>
	import { education } from '../../../data/education';
	import * as m from '$lib/paraglide/messages.js';
</script>

<section id="education" class="relative flex w-full flex-col items-center py-10">
	<h1 class="pb-2 text-4xl font-bold text-cyan-600">{m.education_title()}</h1>
	<div class="mb-10 h-1 w-20 bg-gray-200 md:left-1/2"></div>
	<div class="relative w-full md:max-w-[1000px]">
		<!-- Linha central -->
		<div class="absolute left-0 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 md:left-1/2"></div>

		<!-- Itens da timeline -->
		<div class="space-y-12">
			{#each education as item, i}
				<div class="relative flex items-center">
					<!-- Determina o lado do bloco -->
					<div
						class={`relative ml-16 flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} w-full md:ml-0`}
					>
						<!-- Bloco de informações -->
						<div
							class="relative max-w-md space-y-2 rounded-lg bg-blue-light p-6 text-white shadow-lg dark:bg-gray-800"
							style="transform: translateX(${i % 2 === 0 ? '-50%' : '50%'})"
						>
							<h2 class="text-xl font-bold">{item.institution}</h2>
							<h3 class="text-sm text-cyan-400">{item.course()}</h3>
							<p class="text-sm">
								<span class="font-semibold">{item.start}</span> -
								<span>{item.end ? item.end : 'Atual'}</span>
							</p>

							<div
								class={`absolute top-1/2 !mt-0 h-0 w-0 -translate-y-1/2 border-b-8 border-t-8 border-transparent ${
									i % 2 === 0
										? '-left-2 border-r-8 border-r-blue-light dark:border-r-gray-800 md:-right-2 md:left-auto md:border-l-8 md:border-r-0 md:border-l-blue-light md:dark:border-l-gray-800'
										: '-left-2 border-r-8 border-r-blue-light dark:border-r-gray-800'
								}`}
							></div>
						</div>

						<!-- Seta -->
					</div>
					<!-- Ponto na linha -->
					<div
						class="absolute left-0 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-600 md:left-1/2"
					></div>
				</div>{/each}
		</div>
	</div>
</section>
