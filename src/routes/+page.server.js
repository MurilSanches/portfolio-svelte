// +page.server.ts
import { fail } from '@sveltejs/kit';
import { contactSchema } from '../page/contact/contact.schema.js';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || undefined, // Handle optional field
      about: formData.get('about')
    };

    const result = contactSchema.safeParse(data);
    
    if (!result.success) {
      // Return validation errors with status 400
      return fail(400, {
        data,
        errors: result.error.flatten().fieldErrors
      });
    }

    try {
      // Your form submission logic here
      // For example: sending to an API, database, etc.
      console.log('Dados enviados:', result.data);
      
      return {
        success: true,
        data: result.data
      };
    } catch (error) {
      return fail(500, {
        data,
        errors: { server: 'Erro ao enviar formulário. Tente novamente.' }
      });
    }
  }
};