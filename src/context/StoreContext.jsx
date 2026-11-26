import {createContext, useState} from "react";
import {food_list} from "../assets/assets.js"

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext=createContext(null);

function StoreContextProvider(props){
    let [cartItems,setCartItems]=useState({});

    function addToCart(id){
        if(!cartItems[id])
            setCartItems((prev)=>({...prev,[id]:1}));
        else
            setCartItems((prev)=>({...prev,[id]:prev[id]+1}));
    }

    function removeFromCart(id){
        setCartItems((prev)=>{
            if(!prev[id]){
                return prev;
            }

            if(prev[id] === 1){
                let updatedCart = {...prev};
                delete updatedCart[id];
                return updatedCart;
            }

            return {...prev,[id]:prev[id]-1};
        });
    }

    let contextValue={
        food_list:food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    )
}
export default StoreContextProvider;