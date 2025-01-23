import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('Insira um e-mail válido'),
    phone: z.string().optional(),
    about: z.string().min(1, 'O campo "Assunto" deve ter pelo menos 10 caracteres')
});