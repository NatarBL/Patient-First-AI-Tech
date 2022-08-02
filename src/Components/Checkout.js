import React, {useState} from "react";
import Products from './Products.json';
import Discounts from './Discounts.json';
import { useParams} from "react-router-dom"

const Checkout = () => {

    const {link} = useParams();

    const handleClick = () => {
        console.log(Products && Products[link].name + " was purchased for $" + code + ".");
    }

    const discountName1 = Discounts && Discounts[0].name;
    const discountName2 = Discounts && Discounts[1].name;
    const discountName3 = Discounts && Discounts[2].name;

    const discountPercentage1 = Discounts && Discounts[0].percentage;
    const discountPercentage2 = Discounts && Discounts[1].percentage;
    const discountPercentage3 = Discounts && Discounts[2].percentage;
    
    const displayPrice1 = Products && Products[link].price * (1 - discountPercentage1);
    const displayPrice2 = Products && Products[link].price * (1 - discountPercentage2);
    const displayPrice3 = Products && Products[link].price * (1 - discountPercentage3);

    const productPrice  = Products && Products[link].price;

    const [code, setCode] = useState('');

    if (code === discountName1){
        setCode(productPrice + " - $" + (productPrice * discountPercentage1).toFixed(2) + " = $" + displayPrice1.toFixed(2));
    } else if (code === discountName2){
        setCode(productPrice + " - $" + (productPrice * discountPercentage2).toFixed(2) + " = $" + displayPrice2.toFixed(2));
    } else if (code === discountName3){
        setCode(productPrice + " - $" + (productPrice * discountPercentage3).toFixed(2) + " = $" + displayPrice3.toFixed(2));
    } else if (code === "None"){
        setCode(productPrice + " - $0.00 = $" + productPrice);
    }

    return <div><div className="App">
        <br />
            <strong>Title: {Products && Products[link].name}</strong>
        </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                 }}>
                <img src ={Products && Products[link].image} alt=""/>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                 }}>Price: ${productPrice}
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                 }}>
                <select
                    value={code}
                    onChange={(e) => setCode(e.target.value)}>
                    <option value="None">Select discount</option>
                    <option value="None">None - 0%</option>
                    <option value={discountName1}>{discountName1} - {discountPercentage1 * 100}%</option>
                    <option value={discountName2}>{discountName2} - {discountPercentage2 * 100}%</option>
                    <option value={discountName3}>{discountName3} - {discountPercentage3 * 100}%</option>
                </select>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>Price after discount: ${code}
            </div>
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <button onClick={handleClick}>Checkout</button>
            </div>
        </div>;
}; 

export default Checkout;