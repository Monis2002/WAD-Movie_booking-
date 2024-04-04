import './App.css';
import Login from "./components/login/login"
import Register from "./components/register/register"
import Home from "./components/home/home"
import Search from "./components/search/search"
import Display_list from './components/search/display_list';
import Book from './components/book/book';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useEffect, useState } from 'react';

import axios from 'axios';


function App() {

  // const [movies,setmovies]=useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:3000/temp",{
  //     method:"GET"
  //   })
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data)
  //     setmovies(data.data)
  //   })

  // },[])



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route path='/login'><Login/></Route>
          <Route path='/home'><Home/></Route>
          <Route path='/display_list'><Display_list/></Route>
          <Route path='/search'><Search/></Route>
          <Route path='/book'><Book/></Route>
          <Route path='/register'><Register/></Route>
          

        </Switch>
      </Router>
       
    </div>
  //   <div>
  //   <table>
  //     <thead>
  //       <tr>
  //         <td>Name</td>
  //         <td>Seat</td>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {movies.length > 0 ? (
  //         movies.map((item, index) => (
  //           <tr key={index}>
  //             <td>{item.name}</td>
  //             <td>{item.seat}</td>
  //           </tr>
  //         ))
  //       ) : (
  //         <tr>
  //           <td colSpan="2">No data available</td>
  //         </tr>
  //       )}
  //     </tbody>
  //   </table>
  // </div>
  );
}

export default App;
