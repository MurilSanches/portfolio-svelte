<script>
	import { Icon } from 'svelte-icons-pack';

	import { skills } from '../../data/skills';
</script>

<div class="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-4">
	{#each skills as { src, name, color, level }}
		<div
			class="flex flex-col items-center justify-center rounded-lg border p-8 text-center shadow-lg dark:bg-gray-800 md:p-6"
		>
			<div class="text-4xl">
				<Icon {src} {color} />
			</div>

			<h3 class="hidden text-xl font-semibold dark:text-white md:block">{name}</h3>

			<div class="mt-2 hidden w-full md:block">
				<div class="relative pt-1">
					<div class="mb-2 flex">
						<div class="w-full rounded-full bg-gray-300">
							<div
								class="h-2 rounded-full"
								style="width: {level}%; background-color: {color}"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
