// src/components/layout/Footer.jsx
const Footer = () => {
    return (
      <footer className="w-full py-8 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} artimestudio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;