import styles from "./App.module.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Sidebar />
      </div>
      <div className={styles.name}>
        <a>KMU</a> 난리밥석
      </div>
      <button>Login</button>
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
