// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Szolgáltatások',
      items: [
        { label: 'Festmények', path: '/canvas-art' },
        { label: 'Lakberendezés', path: '/interior-design' },
      ]
    },
    {
      title: 'Közösségi média',
      items: [
        { label: 'Instagram', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ]
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <Link to="/" className="font-display text-2xl tracking-wider">
              artimestudio
            </Link>
            <p className="mt-4 text-sm opacity-70 max-w-sm">
              Legyen szó lakberendezésről, vagy festményről, fontos hogy egyedi legyen, ami pont Hozzád illeszkedik.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {currentYear} artimestudio. Minden jog fenntartva.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Adatvédelmi irányelvek
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Felhasználási feltételek
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;