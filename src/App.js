import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;