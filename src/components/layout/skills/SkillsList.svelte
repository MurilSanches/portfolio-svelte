<script>
	import { Icon } from 'svelte-icons-pack';

	import { skills } from '../../../data/skills';
</script>

<div class="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-4">
	{#each skills as { src, name, color }}
		<div
			class="flex flex-col items-center justify-center gap-y-2 rounded-lg border p-8 text-center shadow-lg dark:bg-gray-800 md:p-6"
		>
			<div class="text-4xl">
				<Icon {src} {color} />
			</div>

			<h3 class="hidden text-xl font-semibold dark:text-white md:block">{name}</h3>
		</div>
	{/each}
</div>
