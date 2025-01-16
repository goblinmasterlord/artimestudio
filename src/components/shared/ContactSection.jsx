import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MapPin, Clock, Phone } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const InputWrapper = ({ children, label, required = true }) => (
  <div className="relative w-full group space-y-2">
    <label className="block text-sm font-medium">
      {label} {!required && <span className="text-gray-400 font-normal">(opcionális)</span>}
    </label>
    {children}
  </div>
);

const ContactInfo = ({ icon: Icon, title, children }) => (
  <motion.div 
    className="group relative"
    whileHover={{ x: 10 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex gap-6 items-start">
      <div className="relative">
        <div className="w-12 h-12 bg-black/5 flex items-center justify-center">
          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <motion.div 
          className="absolute inset-0 bg-black/5 group-hover:scale-90 transition-transform duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        />
      </div>
      <div>
        <h3 className="font-display text-lg mb-1">{title}</h3>
        <div className="opacity-70 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [status, setStatus] = useState({ type: null, message: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Köszönjük az üzeneted! Hamarosan jelentkezünk.',
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sajnos valami hiba történt. Kérlek, próbáld újra később.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <div className="max-w-md">
              {status.type && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <Alert variant={status.type === 'success' ? 'default' : 'destructive'}>
                    <AlertTitle>
                      {status.type === 'success' ? 'Sikeres!' : 'Hiba'}
                    </AlertTitle>
                    <AlertDescription>
                      {status.message}
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-5xl mb-6">Alkossunk együtt valami különlegeset</h2>
                <p className="text-lg opacity-70 mb-16 leading-relaxed">
                  Akár egyedi festményt szeretnél, akár belsőépítészeti tanácsra van szükséged,
                  itt vagyok, hogy segítsek megvalósítani az elképzeléseid.
                </p>
              </motion.div>
              
              <div className="space-y-12">
                <ContactInfo icon={MapPin} title="Műterem">
                  123 Art Studio Lane<br />
                  New York, NY 10001
                </ContactInfo>
                
                <ContactInfo icon={Phone} title="Elérhetőség">
                  <div className="space-y-1">
                    <a href="mailto:studio@example.com" className="block hover:opacity-100 transition-opacity">
                      studio@example.com
                    </a>
                    <a href="tel:+12345678901" className="block hover:opacity-100 transition-opacity">
                      +1 (234) 567-8901
                    </a>
                  </div>
                </ContactInfo>
                
                <ContactInfo icon={Clock} title="Nyitvatartás">
                  Hétfő – Péntek: 9:00 – 18:00<br />
                  Hétvégén előzetes egyeztetés alapján
                </ContactInfo>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <InputWrapper label="Név">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors"
                      required
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
                  </div>
                </InputWrapper>

                <InputWrapper label="E-mail">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors"
                      required
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
                  </div>
                </InputWrapper>
              </div>

              <InputWrapper label="Telefonszám" required={false}>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'phone' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
                </div>
              </InputWrapper>

              <InputWrapper label="Üzenet">
                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-200 outline-none transition-colors resize-none"
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </InputWrapper>

              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large"
                  className="group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: -4 }}
                  >
                    {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
                    <Send className={`w-4 h-4 transition-transform ${
                      isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                    }`} />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;