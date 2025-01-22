<script>
	import { enhance } from '$app/forms';
	// @ts-ignore
	import Input from '../../input/Input.svelte';
	import TextArea from '../../input/TextArea.svelte';

	export let form;
	let submitting = false;

	function handleSubmit() {
		submitting = true;

		// @ts-ignore
		return async ({ result }) => {
			submitting = false;
			if (result.type === 'success') {
				alert('Formulário enviado com sucesso!');
				// Optional: reset form values here if needed
			}
		};
	}
</script>

<form
	method="POST"
	use:enhance={handleSubmit}
	class="mx-auto w-full justify-center space-y-4 rounded-lg bg-blue-extraLight p-6 shadow-md dark:bg-gray-dark"
>
	<div>
		<label for="name" class="text-black block font-semibold dark:text-white">Nome</label>
		<Input
			name="name"
			value={form?.data?.name ?? ''}
			errors={!!form?.errors?.name}
			placeholder="Seu nome completo"
		/>
		{#if form?.errors?.name}
			<span class="mt-2 text-sm text-red-600">{form.errors.name[0]}</span>
		{/if}
	</div>

	<div>
		<label for="email" class="text-black block font-semibold dark:text-white">Email</label>
		<Input
			name="email"
			type="email"
			value={form?.data?.email ?? ''}
			errors={!!form?.errors?.email}
			placeholder="seu@email.com"
		/>
		{#if form?.errors?.email}
			<span class="mt-2 text-sm text-red-600">{form.errors.email[0]}</span>
		{/if}
	</div>

	<div>
		<label for="phone" class="text-black block font-semibold dark:text-white">Telefone</label>
		<Input
			name="phone"
			value={form?.data?.phone ?? ''}
			errors={!!form?.errors?.phone}
			placeholder="(00) 00000-0000"
		/>
		{#if form?.errors?.phone}
			<span class="mt-2 text-sm text-red-600">{form.errors.phone[0]}</span>
		{/if}
	</div>

	<div>
		<label for="about" class="text-black block font-semibold dark:text-white">Assunto</label>
		<TextArea
			name="about"
			value={form?.data?.about ?? ''}
			errors={!!form?.errors?.about}
			placeholder="Descreva o assunto..."
		/>
		{#if form?.errors?.about}
			<span class="mt-2 text-sm text-red-600">{form.errors.about[0]}</span>
		{/if}
	</div>

	{#if form?.errors?.server}
		<div class="text-center text-red-500">{form.errors.server}</div>
	{/if}

	<div class="flex w-full justify-center">
		<button
			type="submit"
			disabled={submitting}
			class="rounded bg-gray-dark px-4 py-2 text-white hover:bg-cyan-600 disabled:opacity-50 dark:bg-cyan-600 dark:hover:bg-cyan-500"
		>
			{submitting ? 'Enviando...' : 'Enviar'}
		</button>
	</div>
</form>
