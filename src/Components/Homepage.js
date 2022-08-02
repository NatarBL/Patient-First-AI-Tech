import React from "react";
import Products from './Products.json';
import { Link } from "react-router-dom";


const Homepage = () => {
            return <div><div className="App">
            <h1>Patient First AI Technical Demo</h1>
            {
              Products && Products.map( product => {
                return(
                  <div className="box">
                    <strong>{product.name}</strong>
                    <br />
                    <img src ={product.image} alt=""/>
                    <br />
                    ${product.price}
                    <br /> 
                    <Link to = {"/"+product.link}>Buy Now</Link>
                    <br /><br /><br />
                  </div>
                )
              })
            }
          </div></div>;
}; 

export default Homepage;