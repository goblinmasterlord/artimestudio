// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    const data = await resend.emails.send({
      from: 'Artimestudio <onboarding@resend.dev>',
      to: ['marci.mocsonoky@gmail.com'], //
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        message,
      }),
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Email template component
const EmailTemplate = ({ name, email, phone, message }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>New Contact Form Submission</h1>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Details</h2>
        <div style={styles.field}>
          <strong>Name:</strong> {name}
        </div>
        <div style={styles.field}>
          <strong>Email:</strong> {email}
        </div>
        {phone && (
          <div style={styles.field}>
            <strong>Phone:</strong> {phone}
          </div>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Message</h2>
        <div style={styles.message}>{message}</div>
      </div>

      <div style={styles.footer}>
        <p>This email was sent from your website's contact form.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    color: '#000',
    marginBottom: '24px',
    borderBottom: '1px solid #eee',
    paddingBottom: '12px',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '12px',
  },
  field: {
    marginBottom: '8px',
    lineHeight: '1.5',
  },
  message: {
    backgroundColor: '#f5f5f5',
    padding: '16px',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap',
  },
  footer: {
    marginTop: '32px',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
    fontSize: '14px',
    color: '#666',
  },
};