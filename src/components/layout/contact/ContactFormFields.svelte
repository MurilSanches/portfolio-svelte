<script>
	import * as m from '$lib/paraglide/messages.js';

	import Input from '../../input/Input.svelte';
	import TextArea from '../../input/TextArea.svelte';
	import InputMask from '../../input/InputMask.svelte';

	const { form, name, email, phonenumber, subject } = $props();
</script>

<div>
	<label for="name" class="text-black block font-semibold dark:text-white">
		{m.contact_form_name()}
	</label>
	<Input
		name="name"
		defaultValue={name}
		errors={form?.errors?.name}
		placeholder={m.contact_form_name_placeholder()}
	/>
</div>

<div>
	<label for="email" class="text-black block font-semibold dark:text-white">
		{m.contact_form_email()}
	</label>
	<Input
		name="email"
		type="email"
		defaultValue={email}
		errors={form?.errors?.email}
		placeholder={m.contact_form_email_placeholder()}
	/>
</div>

<div>
	<label for="phone" class="text-black block font-semibold dark:text-white">
		{m.contact_form_phone()}
	</label>
	<InputMask
		name="phone"
		defaultValue={phonenumber}
		errors={form?.errors?.phone}
		placeholder={m.contact_form_phone_placeholder()}
		options={{ lazy: true, mask: '(00) 00000-0000' }}
	/>
</div>

<div>
	<label for="about" class="text-black block font-semibold dark:text-white">
		{m.contact_form_message()}
	</label>
	<TextArea
		name="about"
		value={subject}
		errors={form?.errors?.about}
		placeholder={m.contact_form_message_placeholder()}
	/>
</div>

{#if form?.errors?.server}
	<div class="text-center text-red-500">{form.errors.server}</div>
{/if}
