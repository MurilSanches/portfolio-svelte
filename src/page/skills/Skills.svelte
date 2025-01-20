<script>
	import SkillsList from './SkillsList.svelte';

	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="flex flex-col gap-y-16" id="skills">
	<div class="mx-auto max-w-2xl text-left">
		<h1 class="mb-4 text-4xl font-extrabold">
			<span class="text-cyan-600">{m.skills_title()}</span>
		</h1>
	</div>

	<SkillsList />
</div>
