// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductCard';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
