import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: "Campos incompletos" },
                { status: 400 }
            );
        }

        // 1️⃣ Correo para ti
        await resend.emails.send({
            from: "Andrés Yepez <hola@andresyepez.me>",
            to: ["andresyepezmn@gmail.com"],
            replyTo: email,
            subject: "Nuevo mensaje desde tu portafolio",
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
        });

        // 2️⃣ Auto-respuesta al visitante
        await resend.emails.send({
            from: "Andrés Yepez <contact@andresyepez.me>",
            to: [email],
            subject: "Gracias por escribirme",
            html: `
        <p>Hola ${name},</p>

        <p>
        Gracias por escribirme a través de mi portafolio.
        He recibido tu mensaje y lo revisaré con atención.
        </p>

        <p>
        Si es una propuesta, consulta o idea,
        con gusto te responderé lo antes posible.
        </p>

        <p>
        Un saludo,<br/>
        <strong>Andrés Yepez</strong><br/>
        <a href="https://andresyepez.me">andresyepez.me</a>
        </p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "Error enviando el mensaje" },
            { status: 500 }
        );
    }
}
