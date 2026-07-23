import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Use a placeholder key if RESEND_API_KEY is missing so the build doesn't fail,
// but the user will need to supply a real key for it to work.
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Basic Honeypot Spam Protection
    if (honeypot) {
      return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Update this to your verified domain in production
      to: 'rupesh@example.com', // The user will replace this with their actual email
      subject: `New Contact: ${subject || 'No Subject'}`,
      replyTo: email,
      html: `
        <h2>New Contact from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
