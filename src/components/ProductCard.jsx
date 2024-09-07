import { Link } from 'react-router-dom';
import productsData from '/public/data/products.json'; // Asegúrate de que la ruta sea correcta
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    product: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    // Simulando la carga de datos
    setProductos(productsData.products);
  }, []);

  // Función para filtrar productos
  const filterProducts = (products) => {
    return products.filter((producto) => {
      const matchesCategory = filters.category ? producto.category === filters.category : true;
      const matchesProduct = filters.product ? producto.name.toLowerCase().includes(filters.product.toLowerCase()) : true;
      const matchesMinPrice = filters.minPrice ? producto.price >= parseFloat(filters.minPrice) : true;
      const matchesMaxPrice = filters.maxPrice ? producto.price <= parseFloat(filters.maxPrice) : true;
      return matchesCategory && matchesProduct && matchesMinPrice && matchesMaxPrice;
    });
  };

  const filteredProducts = filterProducts(productos);

  // Función para manejar cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  // Obtener categorías únicas para el filtro
  const uniqueCategories = [...new Set(productos.map(producto => producto.category))];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
      
      <div className="mb-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Filtrar Productos</h3>
          <form className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                name="product"
                value={filters.product}
                onChange={handleFilterChange}
                placeholder="Buscar por nombre"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Seleccionar categoría</option>
                {uniqueCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="Precio mínimo"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="Precio máximo"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="button"
              onClick={() => setFilters({ category: '', product: '', minPrice: '', maxPrice: '' })}
              className="p-2 bg-green-500 text-white rounded"
            >
              Restablecer filtros
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <Link key={producto.id} to={`/products/${producto.id}`} className="card bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-64 relative mt-2">
                <img src={producto.image} alt={producto.name} className="absolute inset-0 w-full h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{producto.name}</h3>
                {/* Sección para el precio */}
                <p className="text-2xl font-bold text-green-600 mb-2">${producto.price}</p> {/* Precio resaltado */}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">No se encontraron productos.</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
