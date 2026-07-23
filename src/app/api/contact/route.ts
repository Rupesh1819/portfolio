import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if the API key is present
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

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

    // If no Resend API key is provided, simulate success (useful for demo/portfolio without backend config)
    if (!resend) {
      console.log('\n--- NEW MESSAGE (Simulated) ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('-------------------------------\n');
      
      // Simulate network delay for UI feedback
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      return NextResponse.json({ message: 'Email sent successfully (simulated)' }, { status: 200 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Requires domain verification in production
      to: 'rupeshshete18@gmail.com', // Updated to your correct email
      subject: `New Contact: ${subject || 'No Subject'}`,
      replyTo: email,
      html: `
        <h2>New Contact from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
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
