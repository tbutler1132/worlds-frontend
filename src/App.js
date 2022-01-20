import './App.css';
import RecsPage from './components/RecsPage';
import { Route, Routes, useLocation } from 'react-router';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/user';
import axios from 'axios';


function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  const code = new URLSearchParams(window.location.search).get("code")

  useEffect(() => {
    const user = localStorage.getItem("currentUser")

    if(user){
      dispatch(setUser(JSON.parse(user)))
    }
  })

  useEffect(() => {
    //If there is no current user, check the url and send a request to get the user
  })

  return (
    <div className="App">
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='recs' element={<RecsPage code={code}/>} />
      </Routes>
    </div>
  );
}

export default App;
