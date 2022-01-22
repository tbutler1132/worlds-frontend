import './App.css';
import RecsPage from './components/RecsPage';
import { Route, Routes } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Signup from './components/Login/Signup';
import Signin from './components/Login/Signin';
import EditInfo from './components/editProfile/EditInfo';

function App() {
  let [searchParams] = useSearchParams();

  let code = searchParams.get("code");




  return (
    <div className="App">
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='recs' element={<RecsPage code={code}/>} />
        <Route path='profile' element={<EditInfo code={code}/>} />
      </Routes>
    </div>
  );
}

export default App;
