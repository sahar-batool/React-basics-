import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) return <p className="favorites-empty"><h3>Your cart is empty.</h3></p>;

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="results-grid">
        {cart.map((c) => (
          <div key={c.id} className="card">
            <img src={c.image} alt={c.name} />
            <h3>{c.name}</h3>
            <div className="card-actions">
              <span className="card-price">${c.price.toFixed(2)} × {c.qty}</span>
              <button className="fav-btn" onClick={() => removeFromCart(c.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3 style={{ marginTop: 24 }}>Total: ${cartTotal.toFixed(2)}</h3>
    </div>
  );
}