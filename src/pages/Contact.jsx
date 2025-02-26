// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MapPin, Clock, Phone, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import PageNav from '../components/layout/PageNav';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/animations/PageTransition';

const InputField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  required = true, 
  icon: Icon,
  multiline = false
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    setFocused(false);
    setFilled(e.target.value !== '');
  };

  return (
    <div className="relative">
      <motion.label 
        className={`absolute left-0 transition-all duration-200 pointer-events-none ${
          (focused || filled) ? '-top-6 text-sm text-black' : 'top-0 text-gray-400'
        }`}
        initial={false}
        animate={{ 
          y: (focused || filled) ? 0 : 10,
          scale: (focused || filled) ? 0.8 : 1
        }}
      >
        {label} {!required && <span className="text-gray-400">(opcionális)</span>}
      </motion.label>

      <div className="relative">
        {multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required={required}
            rows={5}
            className="w-full bg-transparent border-b border-gray-200 py-2 pr-10 outline-none transition-colors focus:border-black resize-none"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required={required}
            className="w-full bg-transparent border-b border-gray-200 py-2 pr-10 outline-none transition-colors focus:border-black"
          />
        )}

        {Icon && (
          <Icon className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
            focused ? 'text-black' : 'text-gray-400'
          }`} />
        )}

        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-black origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
};

const ContactMethod = ({ icon: Icon, title, children, href, delay = 0 }) => (
  <motion.a
    href={href}
    className="group relative bg-white border border-black/5 p-6 flex items-start gap-4 overflow-hidden hover:border-black/20 transition-colors"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -4 }}
  >
    <div className="relative">
      <div className="w-10 h-10 bg-black/5 flex items-center justify-center rounded-full">
        <Icon className="w-5 h-5" />
      </div>
    </div>

    <div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <div className="text-sm opacity-70">{children}</div>
    </div>

    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 transform translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
  </motion.a>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const navigationItems = [
    { path: '/canvas-art', label: 'Festmények' },
    { path: '/interior-design', label: 'Lakberendezés' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageNav items={navigationItems} />
        
        <main>
          {/* Hero Section - Non-full screen */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src="/images/hero/contact-hero.jpg"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Container>
              <div className="relative z-10 max-w-3xl">
                <motion.div 
                  className="inline-flex items-center gap-3 text-sm text-white/80 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-8 h-px bg-white/40" />
                  <span>Kapcsolat</span>
                  <div className="w-8 h-px bg-white/40" />
                </motion.div>

                <motion.h1 
                  className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Beszéljünk az elképzeléseidről
                </motion.h1>

                <motion.p 
                  className="text-lg text-white/90 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Legyen szó egyedi festményről vagy lakberendezési projektről, 
                  örömmel segítek megvalósítani az elképzeléseid.
                </motion.p>
              </div>
            </Container>
          </section>

          {/* Contact Information Section */}
          <section className="py-20 bg-gray-50">
            <Container>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ContactMethod 
                  icon={Mail} 
                  title="E-mail"
                  href="mailto:hello@artimestudio.com"
                  delay={0.3}
                >
                  hello@artimestudio.com
                </ContactMethod>

                <ContactMethod 
                  icon={Phone} 
                  title="Telefon"
                  href="tel:+36301234567"
                  delay={0.4}
                >
                  +36 30 123 4567
                </ContactMethod>

                <ContactMethod 
                  icon={Instagram} 
                  title="Instagram"
                  href="https://instagram.com"
                  delay={0.5}
                >
                  @artimestudio
                </ContactMethod>

                <ContactMethod 
                  icon={Linkedin} 
                  title="LinkedIn"
                  href="https://linkedin.com"
                  delay={0.6}
                >
                  artimestudio
                </ContactMethod>
              </div>
            </Container>
          </section>

          {/* Form and Map Section */}
          <section className="py-20">
            <Container>
              <div className="grid lg:grid-cols-2 gap-20">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="order-2 lg:order-1"
                >
                  <div className="max-w-md">
                    <h2 className="font-display text-3xl mb-4">Írj nekem</h2>
                    <p className="text-gray-600 mb-8">
                      Töltsd ki az alábbi űrlapot, és hamarosan felveszem veled a kapcsolatot.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <InputField
                          label="Név"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          icon={User}
                        />

                        <InputField
                          label="E-mail"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          icon={Mail}
                        />
                      </div>

                      <InputField
                        label="Telefonszám"
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required={false}
                        icon={Phone}
                      />

                      <InputField
                        label="Üzenet"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        multiline
                      />

                      <motion.button
                        type="submit"
                        className="group relative inline-flex items-center gap-2 bg-black text-white px-8 py-3 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">Üzenet küldése</span>
                        <Send className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </form>
                  </div>
                </motion.div>

                {/* Studio Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative order-1 lg:order-2"
                >
                  <div className="sticky top-32">
                    <div className="aspect-[4/3] mb-8 overflow-hidden rounded-sm shadow-lg">
                      <motion.img
                        src="/images/studio/contact-studio.jpg"
                        alt="Studio"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    <h2 className="font-display text-3xl mb-6">Műterem</h2>

                    <div className="space-y-6 bg-gray-50 p-6 rounded-sm">
                      <div className="flex gap-4">
                        <MapPin className="w-5 h-5 opacity-50 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-1">Cím</h3>
                          <p className="opacity-70">
                            Egy kis utca 12.<br />
                            1234 Budapest
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Clock className="w-5 h-5 opacity-50 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium mb-1">Nyitvatartás</h3>
                          <p className="opacity-70">
                            Hétfő – Péntek: 9:00 – 18:00<br />
                            Hétvégén előzetes egyeztetés alapján
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;