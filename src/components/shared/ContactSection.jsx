// src/components/shared/ContactSection.jsx
const ContactSection = () => {
    return (
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-8">Get in Touch</h2>
          <p className="mb-12 opacity-70">
            Let's discuss your project. Whether you're looking for a custom canvas piece 
            or interior design consultation, we're here to help bring your vision to life.
          </p>
          <form className="max-w-xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-200 focus:border-gray-400 outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-200 focus:border-gray-400 outline-none transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 border border-gray-200 focus:border-gray-400 outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full py-3 px-6 bg-black text-white hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;