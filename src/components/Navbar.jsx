import { Link } from 'react-scroll';

function Navbar() {
  const navItems = [
    { name: 'Inicio', to: 'home' },
    { name: 'Beneficios', to: 'benefits' },
    { name: 'Experiencias', to: 'experiences' },
    { name: 'Testimonios', to: 'testimonials' },
    //{ name: 'Nosotros', to: 'about' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <nav className="navbar fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to={"home"}
              spy={true}
              smooth={true}
              offset={-64}
              duration={200}
            ><span className="text-2xl font-bold text-accent cursor-pointer hover:text-white transition-colors">Yendo!</span></Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={200}
                  className="cursor-pointer px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;