import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';

import productsData from './data/products.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog items={productsData.items} categories={productsData.categories} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
