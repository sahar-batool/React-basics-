import { useRoutes, BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Favorites from "./pages/Favorites";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/SearchContext";
import Hero from './components/Hero'



function AppRoutes() {
  const routes = useRoutes([
    { path: "/",
       element: <Home /> },
    { path: "/details/:id",
      element: <DetailPage /> },
    { path: "/favorites", 
      element: <Favorites /> },
    {
        path:"/Cart",
        element:<Cart />
      }
  ]);
  return routes;
}



export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <SearchProvider>
        <BrowserRouter>
          <Navbar />
          <div className="app-shell">
            <AppRoutes />
          </div>
          <Hero/>
          <Footer/>
        </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    </FavoritesProvider>
  );
}