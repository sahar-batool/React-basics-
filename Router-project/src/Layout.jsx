import Navbar from "./Navbar";


function Layout({ children }) {
  return (
    <>
      <header>
        <h1>My Website</h1>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </>
  );
}

export default Layout;
