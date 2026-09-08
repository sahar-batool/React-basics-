import { useEffect } from "react";
import ResultsList from "../components/ResultsList";
import { useSearch } from "../context/SearchContext";

export default function Home() {
  const { query, setQuery, results, setResults, loading, setLoading, error, setError } = useSearch();

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError("");

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data.meals || []))
      .catch(() => setError("Something went wrong."))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (!value) {
      setError("Please enter a search term.");
      return;
    }
    setQuery(value);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input name="search" placeholder="Search recipes..." defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      {error && <p className="field-error">{error}</p>}
      {loading && <p className="status-loading">Loading...</p>}
      {!loading && results.length === 0 && query && (
        <p className="status-empty">No results found.</p>
      )}

      <ResultsList results={results} />
    </div>
  );
}