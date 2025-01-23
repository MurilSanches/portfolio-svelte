<script>
	import { fly } from 'svelte/transition';
	import { toast } from './toast';

	const typeStyles = {
		success: 'bg-green-500 text-white',
		error: 'bg-red-500 text-white',
		warning: 'bg-yellow-500 text-black',
		info: 'bg-blue-500 text-white'
	};
</script>

<div class="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
	{#each $toast as t (t.id)}
		<div
			transition:fly={{ x: 200, duration: 300 }}
			class="
                rounded-lg px-4 py-2 shadow-lg
                {typeStyles[t.type]} 
                transform transition-all duration-300
                hover:scale-105
            "
		>
			{t.message}
		</div>
	{/each}
</div>
