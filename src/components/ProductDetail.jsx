import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.products.find(product => product.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  // Función para manejar el botón de regreso
  const handleBackClick = () => {
    navigate(-1);
  };

  // Función para redirigir al enlace de Amazon
  const handleImageClick = () => {
    window.open(product.amazonLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="p-8 bg-gray-100">
        {/* Botón para regresar */}
        <button 
          onClick={handleBackClick} 
          className="btn bg-green-400 mt-4"
        >
          Regresar
        </button>
        
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        
        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
  {product.images && product.images.length > 0 ? (
    product.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Product Image ${index + 1}`}
        className="w-full h-96 object-contain rounded shadow-md cursor-pointer" // Cambia cover por contain
        onClick={handleImageClick}
      />
    ))
  ) : (
    <p>No hay imágenes disponibles.</p>
  )}
</div>

        
        <p className="text-lg mb-4">{product.description}</p>
        
        {/* Botón de Comprar en Amazon */}
        <a 
          href={product.amazonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn bg-orange-500 text-white px-4 py-2 rounded"
        >
          Ver más información
        </a>
      </div>
   
    </>
  );
};

export default ProductDetail;
