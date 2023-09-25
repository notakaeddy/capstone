import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route,Routes } from 
'react-router-dom';
//import '../style/index.css'

//import pages 
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
    return (
    <div className = 'overflow-hidden' >
        <Router> 
            <Header/>
            <Routes> 
                <Route path = '/' element = {<Home/>} />
                <Route path = '/product/:id' element =
                {<ProductDetails />}/>
            </Routes>
            <Sidebar />
            <Footer />
        </Router>
    </div>
        );  
};
    // const [pokemon, setPokemon] = useState([])

    // useEffect(() => {
    //   const getAllData = async () => {
    //     try {
    //       const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    //       const { results } = await response.json()
    //       setPokemon(results)
    //     } catch (err) {
    //       console.error(err)
    //     }
    //   }
    //   getAllData()
    // }, [])

    // return (
    //   <div>
    //     <p>Hello World</p>
    //     {!!pokemon.length &&
    //       pokemon.map((el, i) => {
    //         return (
    //           <div key={i}>
    //             <h1>{el.name}</h1>
    //           </div>
    //         )
    //       })}
    //   </div>
    // )


export default App;