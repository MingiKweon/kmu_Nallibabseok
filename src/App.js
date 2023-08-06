import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Main from './pages/Main';
import ForProfessor from './pages/ForProfessor';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/forprofessor' element={<ForProfessor />} />
      </Routes>
    </div>
  );
}

export default App;