// @ts-nocheck
import { z } from 'zod';

export const createContactSchema = (m) => z.object({
    name: z.string().min(1, m.contact_form_name_error()),
    email: z.string().email(m.contact_form_email_error()),
    phone: z.string().optional(),
    about: z.string().min(1, m.contact_form_message_error())
});