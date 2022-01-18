import './App.css';
import RecsPage from './components/RecsPage';
import { Route, Routes } from 'react-router';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/user';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem("currentUser")

    if(user){
      dispatch(setUser(user))
    }
  })

  return (
    <div className="App">
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='recs' element={<RecsPage />} />
      </Routes>
    </div>
  );
}

export default App;
