<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import { reporter } from '@felte/reporter-svelte';

	import { contactSchema } from './contact.schema.js';

	import Input from '../../components/input/Input.svelte';
	import TextArea from '../../components/input/TextArea.svelte';

	const { form } = createForm({
		initialValues: { name: '', email: '', phone: '', about: '' },
		onSubmit: (values) => {
			console.log('Dados enviados:', values);
			alert('Formulário enviado com sucesso!');
		},
		extend: [validator({ schema: contactSchema }), reporter()]
	});
</script>

<form
	use:form
	method="post"
	class="mx-auto w-full justify-center space-y-4 rounded-lg bg-white p-6 shadow-md"
>
	<div>
		<label for="name" class="block font-semibold">Nome</label>
		<Input name="name" />
	</div>

	<div>
		<label for="email" class="block font-semibold">Email</label>
		<Input name="email" />
	</div>

	<div>
		<label for="phone" class="block font-semibold">Telefone</label>
		<Input name="phone" />
	</div>

	<div>
		<label for="about" class="block font-semibold">Assunto</label>
		<TextArea name="about" />
	</div>

	<div class="flex w-full justify-center">
		<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
			Enviar
		</button>
	</div>
</form>
