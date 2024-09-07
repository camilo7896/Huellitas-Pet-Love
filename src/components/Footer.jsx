import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-green-400 text-gray-800">
      <div className="grid grid-flow-col gap-4">
        <a href="#home" className="link link-hover">Home</a>
        <a href="#about" className="link link-hover">About Us</a>
        <a href="#categories" className="link link-hover">Categories</a>
        <a href="#contact" className="link link-hover">Contact</a>
        <a href="#privacy-policy" className="link link-hover">Privacy Policy</a>
        <a href="#affiliate-disclaimer" className="link link-hover">Affiliate Disclaimer</a>
      </div>
      
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xl">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xl">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xl">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-xl">
            <FaYoutube />
          </a>
        </div>
      </div>
      
      <div className="mt-5">
        <p>© 2024 - All rights reserved | Huellitas Pet Love</p>
        <p className="text-sm mt-2">*Huellitas Pet Love es un participante en el Programa de Afiliados de Amazon Services LLC, un programa de publicidad de afiliación diseñado para proporcionar un medio para que los sitios ganen comisiones al enlazar a Amazon.com. Como afiliado de Amazon, puedo recibir una comisión por compras calificadas.</p>
      </div>
    </footer>
  );
};

export default Footer;
