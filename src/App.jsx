import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from '../src/component/About/About.jsx';
import Home from '../src/component/Home/Home.jsx';
import Portofolio from '../src/component/Portofolio/Portofolio.jsx';
import Contact from '../src/component/Contact/Contact.jsx';
import Notfound from './component/Notfound/Notfound';

import $ from "jquery"


let Routers= createBrowserRouter([
     {path:'react',element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portofolio',element:<Portofolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>}
     ]}
    ])



  
  $(window).scroll(function(){
    let scroll=$(window).scrollTop()
 
   if(scroll>50){
    $('#NavBar').animate({padding:'0px'},300)
   }else{
    $('#NavBar').animate({padding:'25px'},300)
   }
  })



  








function App() {
  return (<>

 <RouterProvider router={Routers} ></RouterProvider>
  
 
  </>



  
   
  );
}

export default App;


