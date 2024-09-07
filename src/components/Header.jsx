import logo from '../assets/image/huellitas white.png'
const Header = () => {
  return (
    <header className="hero bg-green-400 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a Huellitas Pet Love</h1>
          <p className="text-lg mb-6">
            Encuentra los mejores productos para tus mascotas y dale a tu compañero peludo lo que se merece.
          </p>
          <a href="#shop" className="btn btn-primary">
            Explorar Productos
          </a>
        </div>
        <div className="flex justify-center lg:justify-start">
          <img src={logo} alt="Mascota feliz" className="w-80 rounded-lg shadow-lg" /> {/* Cambia el src por la ruta de tu imagen */}
        </div>
      </div>
    </header>
  );
};

export default Header;
