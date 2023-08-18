import styles from "./App.module.css";
import Main from "./Main";

function Header() {
  return (
    <header>
      <div className={styles.name}>Sidebar</div>
      <div className={styles.name}>
        <a>KMU</a> 난리밥석
      </div>
      <div className={styles.name}>Login</div>
    </header>
  );
}

function Banner() {
  return (
    <div className={styles.banner}>
      <h1>Banner</h1>
    </div>
  );
}

function Footer() {
  return <footer>KMU 난리밥석</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
