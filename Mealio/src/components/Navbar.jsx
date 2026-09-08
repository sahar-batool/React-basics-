import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/cart" className="cart-link">
        Cart
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>
    </nav>
  );
}