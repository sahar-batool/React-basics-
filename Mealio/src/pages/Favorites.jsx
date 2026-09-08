import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div className="results-grid">
      {favorites.map((f) => (
        <div key={f.id} className="card">
          <img src={f.image} width="150" />
          <p>{f.name}</p>
        </div>
      ))}
    </div>
  );
}