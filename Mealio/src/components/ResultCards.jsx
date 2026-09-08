import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { mockPrice } from "../utils/mockPrice";

export default function ResultCards({ item }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const price = mockPrice(item.idMeal);

  return (
    <div className="card">
      <img src={item.strMealThumb} alt={item.strMeal} />
      <h3>{item.strMeal}</h3>

      <div className="card-actions">
        <span className="card-price">${price}</span>
        <Link to={`/details/${item.idMeal}`}>Details</Link>
      </div>

      <div className="card-actions">
        <button
          className="add-cart-btn"
          onClick={() =>
            addToCart({ id: item.idMeal, name: item.strMeal, image: item.strMealThumb, price: Number(price) })
          }
        >
          Add to Cart
        </button>
        <button
          className={`fav-btn ${isFavorite(item.idMeal) ? "is-favorite" : ""}`}
          onClick={() => toggleFavorite({ id: item.idMeal, name: item.strMeal, image: item.strMealThumb })}
        >
          {isFavorite(item.idMeal) ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}