<script>
	import * as m from '$lib/paraglide/messages.js';

	import Input from '../../input/Input.svelte';
	import TextArea from '../../input/TextArea.svelte';

	const { form } = $props();
</script>

<div>
	<label for="name" class="text-black block font-semibold dark:text-white">
		{m.contact_form_name()}
	</label>
	<Input
		name="name"
		value={form?.data?.name ?? ''}
		errors={!!form?.errors?.name}
		placeholder={m.contact_form_name_placeholder()}
	/>
	{#if form?.errors?.name}
		<span class="mt-2 text-sm text-red-600">{form.errors.name[0]}</span>
	{/if}
</div>

<div>
	<label for="email" class="text-black block font-semibold dark:text-white">
		{m.contact_form_email()}
	</label>
	<Input
		name="email"
		type="email"
		value={form?.data?.email ?? ''}
		errors={!!form?.errors?.email}
		placeholder={m.contact_form_email_placeholder()}
	/>
	{#if form?.errors?.email}
		<span class="mt-2 text-sm text-red-600">{form.errors.email[0]}</span>
	{/if}
</div>

<div>
	<label for="phone" class="text-black block font-semibold dark:text-white">
		{m.contact_form_phone()}
	</label>
	<Input
		name="phone"
		value={form?.data?.phone ?? ''}
		errors={!!form?.errors?.phone}
		placeholder={m.contact_form_phone_placeholder()}
	/>
	{#if form?.errors?.phone}
		<span class="mt-2 text-sm text-red-600">{form.errors.phone[0]}</span>
	{/if}
</div>

<div>
	<label for="about" class="text-black block font-semibold dark:text-white">
		{m.contact_form_message()}
	</label>
	<TextArea
		name="about"
		value={form?.data?.about ?? ''}
		errors={!!form?.errors?.about}
		placeholder={m.contact_form_message_placeholder()}
	/>
	{#if form?.errors?.about}
		<span class="mt-2 text-sm text-red-600">{form.errors.about[0]}</span>
	{/if}
</div>

{#if form?.errors?.server}
	<div class="text-center text-red-500">{form.errors.server}</div>
{/if}
