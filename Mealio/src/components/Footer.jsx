export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">Mealio</p>
        <p className="footer-text">Find, save, and order recipes you'll love.</p>
        <p className="footer-copy">© {new Date().getFullYear()} Mealio. Built as a React fundamentals project.</p>
      </div>
    </footer>
  );
}