// src/pages/Contact.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  User, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Linkedin, 
  ArrowRight
} from 'lucide-react';
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
  multiline = false,
  dark = true
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(value !== '');

  // Set initial filled state based on value
  useEffect(() => {
    setFilled(value !== '');
  }, [value]);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const textColor = dark ? 'text-white' : 'text-black';
  const placeholderColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';
  const focusBorderColor = dark ? 'border-white' : 'border-black';
  const focusColor = dark ? 'text-white' : 'text-black';
  const unfocusedIconColor = dark ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className="relative">
      <div 
        className={`absolute left-0 transition-all duration-200 pointer-events-none ${
          (focused || filled) ? `-top-6 text-sm ${textColor}` : `top-0 ${placeholderColor}`
        }`}
      >
        {label} {!required && <span className={dark ? "text-gray-500" : "text-gray-400"}>(opcionális)</span>}
      </div>

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
            className={`w-full bg-transparent border-b ${borderColor} py-2 pr-10 outline-none transition-colors focus:${focusBorderColor} resize-none ${textColor}`}
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
            className={`w-full bg-transparent border-b ${borderColor} py-2 pr-10 outline-none transition-colors focus:${focusBorderColor} ${textColor}`}
          />
        )}

        {Icon && (
          <Icon className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
            focused ? focusColor : unfocusedIconColor
          }`} />
        )}

        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-px ${dark ? 'bg-white' : 'bg-black'} origin-left`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
};

const ContactMethod = ({ icon: Icon, title, children, href, delay = 0, dark = false }) => (
  <motion.a
    href={href}
    className={`group relative ${dark ? 'bg-black/30 border-white/10 hover:border-white/30' : 'bg-white border-black/5 hover:border-black/20'} border p-6 flex items-start gap-4 overflow-hidden transition-colors`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -4 }}
  >
    <div className="relative">
      <div className={`w-10 h-10 ${dark ? 'bg-white/10' : 'bg-black/5'} flex items-center justify-center rounded-full`}>
        <Icon className={`w-5 h-5 ${dark ? 'text-white' : 'text-black'}`} />
      </div>
    </div>

    <div>
      <h3 className={`font-medium text-lg mb-1 ${dark ? 'text-white' : 'text-black'}`}>{title}</h3>
      <div className={`text-sm ${dark ? 'text-gray-400' : 'opacity-70'}`}>{children}</div>
    </div>

    <ArrowRight className={`absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 transform translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 ${dark ? 'text-white' : 'text-black'}`} />
  </motion.a>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    project: 'interior' // Default selection
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
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

  const handleProjectTypeChange = (type) => {
    setFormState(prev => ({
      ...prev,
      project: type
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Köszönjük üzeneted! Hamarosan felveszem veled a kapcsolatot.'
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        project: 'interior'
      });
    }, 5000);
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

          {/* Dark Form Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <Container>
              <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="max-w-md mx-auto lg:ml-0">
                    <h2 className="font-display text-3xl text-white mb-4">Kapcsolatfelvétel</h2>
                    <p className="text-gray-400 mb-8">
                      Töltsd ki az alábbi űrlapot, és hamarosan felveszem veled a kapcsolatot.
                    </p>
                    
                    {formStatus.submitted ? (
                      <motion.div 
                        className="bg-white/10 p-6 rounded-md border border-white/10 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-white text-xl mb-2">Köszönjük!</h3>
                        <p className="text-gray-300">{formStatus.message}</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Project Type Selection */}
                        <div className="mb-8">
                          <p className="text-white text-sm mb-4">Milyen projekttel kapcsolatban keresel?</p>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              type="button"
                              onClick={() => handleProjectTypeChange('interior')}
                              className={`p-4 rounded-md border transition-all ${
                                formState.project === 'interior' 
                                  ? 'border-white/50 bg-white/10' 
                                  : 'border-white/10 bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              <div className="flex flex-col items-center">
                                <MapPin className={`w-6 h-6 mb-2 ${
                                  formState.project === 'interior' ? 'text-white' : 'text-gray-400'
                                }`} />
                                <span className={
                                  formState.project === 'interior' ? 'text-white' : 'text-gray-400'
                                }>Lakberendezés</span>
                              </div>
                            </button>
                            
                            <button
                              type="button"
                              onClick={() => handleProjectTypeChange('canvas')}
                              className={`p-4 rounded-md border transition-all ${
                                formState.project === 'canvas' 
                                  ? 'border-white/50 bg-white/10' 
                                  : 'border-white/10 bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              <div className="flex flex-col items-center">
                                <Mail className={`w-6 h-6 mb-2 ${
                                  formState.project === 'canvas' ? 'text-white' : 'text-gray-400'
                                }`} />
                                <span className={
                                  formState.project === 'canvas' ? 'text-white' : 'text-gray-400'
                                }>Festmény</span>
                              </div>
                            </button>
                          </div>
                        </div>
                        
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
                          className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 overflow-hidden rounded-md w-full justify-center font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">Üzenet küldése</span>
                          <Send className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                          
                          <motion.div 
                            className="absolute inset-0 bg-white"
                            initial={{ scale: 0, opacity: 0.3 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </form>
                    )}
                  </div>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="lg:pl-12 max-w-md mx-auto lg:mx-0"
                >
                  <div className="grid grid-cols-1 gap-6">
                    <ContactMethod 
                      icon={Mail} 
                      title="E-mail"
                      href="mailto:hello@artimestudio.com"
                      delay={0.3}
                      dark={true}
                    >
                      hello@artimestudio.com
                    </ContactMethod>

                    <ContactMethod 
                      icon={Phone} 
                      title="Telefon"
                      href="tel:+36301234567"
                      delay={0.4}
                      dark={true}
                    >
                      +36 30 123 4567
                    </ContactMethod>

                    <ContactMethod 
                      icon={Instagram} 
                      title="Instagram"
                      href="https://instagram.com"
                      delay={0.5}
                      dark={true}
                    >
                      @artimestudio
                    </ContactMethod>

                    <ContactMethod 
                      icon={Linkedin} 
                      title="LinkedIn"
                      href="https://linkedin.com"
                      delay={0.6}
                      dark={true}
                    >
                      artimestudio
                    </ContactMethod>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>

          {/* Studio Section - After Form */}
          <section className="py-24 bg-white">
            <Container>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="max-w-md">
                    <div className="inline-flex items-center gap-3 text-sm text-black/60 mb-6">
                      <div className="w-8 h-px bg-black/20" />
                      <span>Műterem</span>
                      <div className="w-8 h-px bg-black/20" />
                    </div>
                    
                    <h2 className="font-display text-4xl mb-6">Látogass el hozzánk személyesen</h2>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      A műteremben lehetőséged van megtekinteni a folyamatban lévő munkákat, 
                      inspirálódni a már elkészült alkotásokból, és személyesen megbeszélni az elképzeléseidet.
                    </p>
                    
                    <div className="space-y-6">
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
                    
                    <motion.a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 mt-8 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Útvonaltervezés</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.div>
                
                {/* Studio Images */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <motion.div 
                        className="aspect-[3/4] overflow-hidden"
                        whileHover={{ scale: 0.98 }}
                      >
                        <img 
                          src="/images/studio/studio-1.jpg" 
                          alt="Studio Space" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="aspect-[1/1] overflow-hidden bg-gray-100"
                        whileHover={{ scale: 0.98 }}
                      >
                        <img 
                          src="/images/interior/modern-living.jpg" 
                          alt="Interior Design Project" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="mt-8">
                      <motion.div 
                        className="aspect-[3/5] overflow-hidden"
                        whileHover={{ scale: 0.98 }}
                      >
                        <img 
                          src="/images/studio/studio-2.jpg" 
                          alt="Studio Work" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-2 border-b-2 border-black/10 z-10" />
                  <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-black/10 z-10" />
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