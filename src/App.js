import './App.css';
import RecsPage from './components/RecsPage';
import { Route, Routes } from 'react-router';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='recs' element={<RecsPage />} />
      </Routes>
    </div>
  );
}

export default App;
