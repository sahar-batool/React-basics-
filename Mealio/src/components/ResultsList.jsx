import ResultCards from "./ResultCards";
export default function ResultsList({ results }) {
  return (
    <div className="results-grid">
      {results.map((item) => (
        <ResultCards key={item.idMeal} item={item} />
      ))}
    </div>
  );
}