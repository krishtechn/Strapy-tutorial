import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart,setcart] = useState([]);
  const [reloadkey,setreloadkey] = useState(1);
   console.log(cart);
  useEffect(()=>{
    console.log("I am useeffect");
  },[])
  
  const addToCart = (item,qty,price)=>{
    let newcart = cart;
    for (let index = 0; index < qty; index++) {
      newcart.push([item,price]);
    }
    setcart(newcart);
    setreloadkey(Math.random());
    console.log(cart);
  }

  
  const removeFromCart = (item,qty)=>{
    let newcart = cart;
    let index = newcart.indexOf(item);
    newcart.splice(index);
    setcart(newcart);
  }
  const ClearCart = (items)=>{
    setcart([]);
  }

  return <>
  <Navbar title="My shop" cart={cart}/>
  <Component {...pageProps} Key={reloadkey} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={ClearCart}/>
  </>
}

export default MyApp
