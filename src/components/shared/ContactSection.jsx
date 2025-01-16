// src/components/shared/ContactSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const InputWrapper = ({ children }) => (
  <div className="relative w-full">
    {children}
  </div>
);

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

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
    <section className="py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <FadeIn>
            <div className="lg:sticky lg:top-8">
              <h2 className="font-display text-4xl mb-6">Let's Create Something Extraordinary</h2>
              <p className="text-lg opacity-70 mb-12">
                Whether you're looking for a custom canvas piece or interior design consultation, 
                we're here to bring your vision to life.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg mb-2">Studio Location</h3>
                  <p className="opacity-70">Mézes Mázos utca 12.<br />Budapest</p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2">Contact Details</h3>
                  <p className="opacity-70">studio@example.com<br />+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h3 className="font-display text-lg mb-2">Studio Hours</h3>
                  <p className="opacity-70">Monday – Friday: 9am – 6pm<br />Weekend appointments available</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Contact Form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <InputWrapper>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors placeholder:text-gray-400"
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </InputWrapper>

                <InputWrapper>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors placeholder:text-gray-400"
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </InputWrapper>
              </div>

              <InputWrapper>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors resize-none placeholder:text-gray-400"
                  required
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </InputWrapper>

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large"
                  className="group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;