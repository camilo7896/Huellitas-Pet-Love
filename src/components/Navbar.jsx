import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/huellitas white.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil
  const menuRef = useRef(null); // Referencia para el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre mostrar y ocultar el menú
  };

  // Efecto para detectar clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Cierra el menú si se hace clic fuera
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpia el listener al desmontar el componente
    };
  }, [menuRef]);

  return (
    <div className="navbar bg-green-400 text-white px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y nombre */}
        <Link to="/" className={`flex items-center text-xl font-bold transition-transform ${isMenuOpen ? 'hidden' : ''}`}>
          <img src={logo} alt="Logo" className={`h-10 w-10 mr-2 bg-white rounded-2xl transition-transform ${isMenuOpen ? 'h-16 w-16' : ''}`} />
          {!isMenuOpen && "Huellitas Pet Love"}
        </Link>

        {/* Buscador */}
        <div className="hidden lg:flex flex-grow justify-center">
          <div className="form-control w-64">
            <input type="text" placeholder="Buscar productos..." className="input input-bordered w-full" />
          </div>
        </div>

        {/* Redes sociales */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-2xl">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-2xl">
            <FaYoutube />
          </a>
        </div>

        {/* Botón de menú para móvil */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Menú desplegable */}
          {isMenuOpen && (
            <ul ref={menuRef} className="dropdown-content mt-3 p-2 shadow bg-green-300 rounded-box w-52">
              <li className='m-2'><Link to="/">Inicio</Link></li>
              <li className='m-2'><Link to="/catalogo">Catálogo</Link></li>
              <li className='m-2'><Link to="/nosotros">Nosotros</Link></li>
              <li className='m-2'><Link to="/contacto">Contacto</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
