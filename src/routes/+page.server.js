import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer'
import { config } from 'dotenv';

import * as m from '$lib/paraglide/messages.js';

import { createContactSchema } from '../components/layout/contact/contact.schema.js';

config()
export const actions = {
  default: async ({ request }) => {    
    const formData = await request.formData();
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || undefined, 
      about: formData.get('about')
    };

    const result = createContactSchema(m).safeParse(data);
    
    if (!result.success) {      
      return fail(400, {
        data,
        errors: result.error.flatten().fieldErrors
      });
    }

    try {
      console.log('form: ', data)
      const emailFrom = process.env.EMAIL_FROM
      const emailFromPassword = process.env.EMAIL_PASSWORD
      const emailTo = JSON.parse(process.env.EMAIL_TO ?? '') ?? ["murilosanchesp@gmail.com"]
      
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: emailFrom,
          pass: emailFromPassword
        },
        pool: true,
        secure: true,
        socketTimeout: 60000
      })

      await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });
    
      let name = data.name
      let subject = `Mensagem de ${name}`
    
      const message = `Novo contato do portfólio!
        <br></br><br></br>
        Nome: <b>${name}</b>
        <br></br>
        Email: <b>${data.email}</b>
        <br></br>
        Telefone: <b>${data.phone ? data.phone : "Não informado"}</b>
        <br></br>
        Assunto: ${data.about}
        <br></br>
        <br></br>
        ---
        <br></br>
        Essa mensagem foi enviada através do formulário do seu portfólio.
      `;

      const mailList = [...emailTo]
      const mailData = {
        from: emailFrom,
        to: mailList,
        subject: subject,
        text: message,
        html: message
      }
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (error, info) => {
          if (error) {
            console.error("Error sending email: ", error);
            reject(error)
          } else {
            console.log("Email sent: ", info.response);
            resolve(info)
          }
        });
      });

      return {
        success: true,
        data: result.data,
        server: m.modal_success_sent()
      };

    } catch (error) {
      return fail(500, {
        data,
        errors: { 
          error,
          server: 'Erro ao enviar formulário. Tente novamente. '        
        }
      });
    }
  }
};