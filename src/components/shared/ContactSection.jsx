// src/components/shared/ContactSection.jsx
import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gray-50">
      <Container size="small">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">Get in Touch</h2>
            <p className="opacity-70 max-w-xl mx-auto">
              Let's discuss your project. Whether you're looking for a custom canvas piece 
              or interior design consultation, we're here to help bring your vision to life.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-gray-200 focus:border-gray-900 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border border-gray-200 focus:border-gray-900 outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-white border border-gray-200 focus:border-gray-900 outline-none transition-colors"
                required
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="primary" size="default">
                Send Message
              </Button>
            </div>
          </form>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ContactSection;