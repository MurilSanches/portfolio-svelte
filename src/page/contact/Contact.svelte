<script>
	import Mail from 'lucide-svelte/icons/mail';
	import Phone from 'lucide-svelte/icons/phone';

	import { social } from '../../constants/social';
	import ContactForm from './ContactForm.svelte';
</script>

<div class="flex flex-col gap-x-16 gap-y-4 md:flex-row" id="contact">
	<div class="flex flex-col gap-y-4">
		<h1 class="mb-4 text-center text-4xl font-extrabold text-brown-base md:text-left">Contato</h1>
		<div class="flex justify-center gap-x-2 dark:text-white md:justify-start">
			<Phone />
			<a href="tel:+5519989558647" class="hover:underline"> +55 (19) 9 8955-8647 </a>
		</div>
		<div class="flex justify-center gap-x-2 dark:text-white md:justify-start">
			<Mail />
			<a href="mailto:murilosanchesp@gmail.com" class="hover:underline">
				murilosanchesp@gmail.com
			</a>
		</div>
		<div class="flex justify-center space-x-4 md:justify-start">
			{#each social as { href, Component }}
				<a {href} target="_blank" rel="noopener noreferrer" class="hover:opacity-75">
					<Component class="h-6 w-6 dark:text-white" />
				</a>
			{/each}
		</div>
	</div>

	<ContactForm />
</div>
