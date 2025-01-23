import { z } from 'zod';
import * as m from '$lib/paraglide/messages.js';

export const contactSchema = z.object({
    name: z.string().min(1, m.contact_form_name_error()),
    email: z.string().email(m.contact_form_email_error()),
    phone: z.string().optional(),
    about: z.string().min(1, m.contact_form_message_error())
});