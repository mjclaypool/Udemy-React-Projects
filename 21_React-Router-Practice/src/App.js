import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.js';
import ProductsPage from './pages/Products.js';
import ProductDetailPage from './pages/ProductDetail.js';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/Error.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage />},
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
