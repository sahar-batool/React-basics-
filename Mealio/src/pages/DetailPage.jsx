import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { mockPrice } from "../utils/mockPrice";

function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({ id: i, name: ingredient, measure: measure || "" });
    }
  }
  return ingredients;
}

export default function DetailPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p className="status-loading">Loading...</p>;

  const price = mockPrice(meal.idMeal);
  const ingredients = getIngredients(meal);

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to search</Link>

      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>

      <div className="detail-meta">
        <div>
          <span className="stat-label">Category</span>
          <span className="stat-value">{meal.strCategory || "N/A"}</span>
        </div>
        <div>
          <span className="stat-label">Cuisine</span>
          <span className="stat-value">{meal.strArea || "N/A"}</span>
        </div>
      </div>

      <div className="card-actions" style={{ marginBottom: 24 }}>
        <button
          className="add-cart-btn"
          onClick={() => addToCart({ id: meal.idMeal, name: meal.strMeal, image: meal.strMealThumb, price: Number(price) })}
        >
          Add to Cart
        </button>
        <button
          className={`fav-btn ${isFavorite(meal.idMeal) ? "is-favorite" : ""}`}
          onClick={() => toggleFavorite({ id: meal.idMeal, name: meal.strMeal, image: meal.strMealThumb })}
        >
          {isFavorite(meal.idMeal) ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ing) => (
            <li key={ing.id}>
              <span className="ing-measure">{ing.measure}</span> {ing.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}