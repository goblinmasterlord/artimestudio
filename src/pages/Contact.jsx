// src/pages/Contact.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  User, 
  Phone, 
  Instagram, 
  ArrowRight,
  AlertCircle
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
  dark = false,
  error = '',
  autoComplete = 'on'
}) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(value !== '');

  // Set initial filled state based on value
  useEffect(() => {
    setFilled(value !== '');
  }, [value]);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const textColor = dark ? 'text-white' : 'text-gray-800';
  const placeholderColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';
  const focusBorderColor = dark ? 'border-white' : 'border-black';
  const focusColor = dark ? 'text-white' : 'text-black';
  const unfocusedIconColor = dark ? 'text-gray-500' : 'text-gray-400';
  const errorColor = dark ? 'text-red-400' : 'text-red-500';
  const errorBorderColor = 'border-red-500';

  return (
    <div className="relative">
      <div 
        className={`absolute left-0 transition-all duration-200 pointer-events-none ${
          (focused || filled) ? `-top-6 text-sm ${error ? errorColor : textColor}` : `top-0 ${placeholderColor}`
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
            className={`w-full bg-transparent border-b ${error ? errorBorderColor : borderColor} py-2 pr-10 outline-none transition-colors focus:${error ? errorBorderColor : focusBorderColor} resize-none ${textColor}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${name}-error` : undefined}
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
            autoComplete={autoComplete}
            className={`w-full bg-transparent border-b ${error ? errorBorderColor : borderColor} py-2 pr-10 outline-none transition-colors focus:${error ? errorBorderColor : focusBorderColor} ${textColor}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )}

        {Icon && (
          <Icon className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
            error ? errorColor : (focused ? focusColor : unfocusedIconColor)
          }`} />
        )}

        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-px ${error ? 'bg-red-500' : (dark ? 'bg-white' : 'bg-black')} origin-left`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      
      {error && (
        <p id={`${name}-error`} className={`text-xs mt-1 ${errorColor} flex items-center gap-1`}>
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
};

const ContactCard = ({ icon: Icon, title, children, href, delay = 0 }) => (
  <motion.a
    href={href}
    className="group relative bg-white border border-gray-200 hover:border-gray-900 p-8 flex items-start gap-5 overflow-hidden transition-all"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="relative">
      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
        <Icon className="w-5 h-5 text-gray-800" />
      </div>
    </div>

    <div>
      <h3 className="font-medium text-lg text-gray-900 mb-1">{title}</h3>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
    
    <ArrowRight className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 transform translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-black" />
    
    <motion.div 
      className="absolute bottom-0 left-0 h-[2px] w-full bg-black origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
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
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'name':
        if (!value) error = 'Kérjük, add meg a neved';
        break;
      case 'email':
        if (!value) {
          error = 'Kérjük, add meg az email címed';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Érvénytelen email cím';
        }
        break;
      case 'phone':
        if (value && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)) {
          error = 'Érvénytelen telefonszám';
        }
        break;
      case 'message':
        if (!value) error = 'Kérjük, írd le az üzeneted';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleProjectTypeChange = (type) => {
    setFormState(prev => ({
      ...prev,
      project: type
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    
    // Validate each required field
    Object.keys(formState).forEach(field => {
      if (field === 'project' || field === 'phone') return; // phone is optional
      
      const error = validateField(field, formState[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });
    
    // Check phone only if it has a value
    if (formState.phone) {
      const phoneError = validateField('phone', formState.phone);
      if (phoneError) {
        errors.phone = phoneError;
        isValid = false;
      }
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
      <div className="min-h-screen bg-stone-50">
        <PageNav items={navigationItems} />
        
        <main>
          {/* Header Section */}
          <section className="relative pt-36 pb-16 overflow-hidden">
            <Container>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div 
                  className="inline-flex items-center gap-3 text-sm text-gray-500 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-8 h-px bg-gray-300" />
                  <span>Kapcsolat</span>
                  <div className="w-8 h-px bg-gray-300" />
                </motion.div>

                <motion.h1 
                  className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Beszéljünk az elképzeléseidről
                </motion.h1>

                <motion.p 
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
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

          {/* Form Section */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
            
            <Container>
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 text-sm text-gray-500 mb-6">
                    <div className="w-8 h-px bg-gray-300" />
                    <span>Kapcsolatfelvétel</span>
                    <div className="w-8 h-px bg-gray-300" />
                  </div>
                  
                  <h2 className="font-display text-3xl text-gray-900 mb-4">Írj nekünk</h2>
                  <p className="text-gray-600 mb-12">
                    Töltsd ki az alábbi űrlapot, és hamarosan felveszem veled a kapcsolatot.
                  </p>
                </div>
                
                {formStatus.submitted ? (
                  <motion.div 
                    className="border border-gray-200 p-8 text-center bg-green-50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-12 h-12 bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-gray-900 text-xl mb-2">Köszönjük!</h3>
                    <p className="text-gray-600">{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="bg-white p-8 border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ borderColor: "#000" }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-10">
                      {/* Project Type Selection */}
                      <div className="space-y-4">
                        <label className="text-gray-700 text-sm">Milyen projekttel kapcsolatban keresel?</label>
                        <div className="grid grid-cols-2 gap-4">
                          <motion.button
                            type="button"
                            onClick={() => handleProjectTypeChange('interior')}
                            className={`p-5 border transition-all ${
                              formState.project === 'interior' 
                                ? 'border-gray-900 bg-gray-50' 
                                : 'border-gray-200 bg-transparent hover:bg-gray-50'
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex flex-col items-center">
                              <svg 
                                className={`w-6 h-6 mb-3 ${
                                  formState.project === 'interior' ? 'text-gray-900' : 'text-gray-400'
                                }`} 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M3 9.5L12 4L21 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className={`text-sm ${
                                formState.project === 'interior' ? 'text-gray-900' : 'text-gray-500'
                              }`}>Lakberendezés</span>
                            </div>
                          </motion.button>
                          
                          <motion.button
                            type="button"
                            onClick={() => handleProjectTypeChange('canvas')}
                            className={`p-5 border transition-all ${
                              formState.project === 'canvas' 
                                ? 'border-gray-900 bg-gray-50' 
                                : 'border-gray-200 bg-transparent hover:bg-gray-50'
                            }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex flex-col items-center">
                              <svg 
                                className={`w-6 h-6 mb-3 ${
                                  formState.project === 'canvas' ? 'text-gray-900' : 'text-gray-400'
                                }`} 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7 3V7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M17 3V7" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7 12L10 15L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className={`text-sm ${
                                formState.project === 'canvas' ? 'text-gray-900' : 'text-gray-500'
                              }`}>Festmény</span>
                            </div>
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-10">
                        <InputField
                          label="Név"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          icon={User}
                          error={formErrors.name}
                          autoComplete="name"
                          dark={false}
                        />

                        <InputField
                          label="E-mail"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          icon={Mail}
                          error={formErrors.email}
                          autoComplete="email"
                          dark={false}
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
                        error={formErrors.phone}
                        autoComplete="tel"
                        dark={false}
                      />

                      <InputField
                        label="Üzenet"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        multiline
                        error={formErrors.message}
                      />

                      <motion.button
                        type="submit"
                        className="group relative inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 overflow-hidden w-full justify-center font-medium text-sm"
                        whileHover={{ backgroundColor: "#000" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">Üzenet küldése</span>
                        <Send className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        
                        <motion.div 
                          className="absolute inset-0 bg-black"
                          initial={{ scaleX: 0, opacity: 0.3 }}
                          whileHover={{ scaleX: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            </Container>
          </section>

          {/* Contact Cards Section */}
          <section className="py-20 bg-stone-50">
            <Container>
              <div className="text-center mb-16">
                <motion.div 
                  className="inline-flex items-center gap-3 text-sm text-gray-500 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-8 h-px bg-gray-300" />
                  <span>Elérhetőségek</span>
                  <div className="w-8 h-px bg-gray-300" />
                </motion.div>
                
                <motion.h2 
                  className="font-display text-3xl text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Közvetlen kapcsolat
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Válaszd a számodra legkényelmesebb módot a kapcsolatfelvételre.
                </motion.p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <ContactCard 
                  icon={Mail} 
                  title="E-mail"
                  href="mailto:hello@artimestudio.com"
                  delay={0.3}
                >
                  hello@artimestudio.com
                </ContactCard>

                <ContactCard 
                  icon={Phone} 
                  title="Telefon"
                  href="tel:+36301234567"
                  delay={0.4}
                >
                  +36 30 123 4567
                </ContactCard>

                <ContactCard 
                  icon={Instagram} 
                  title="Instagram"
                  href="https://instagram.com"
                  delay={0.5}
                >
                  @artimestudio
                </ContactCard>
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