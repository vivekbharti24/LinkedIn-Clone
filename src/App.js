import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import Widgets  from './components/Widgets/Widgets';


function App() {

  // pull data from user slice
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
      })
      )
    }else{
        // user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
  console.log(user);
  return (
    <div className="app">

      {!user ? (
      <Login/>
      ) : (
        <>
      <Header/>
      <div className='app_body'>
      <div>
      <Sidebar/>
      <Feed/>
      <Widgets />
      </div>
      </div>
      </>
      )}
      
    </div>
  );
}

export default App;
