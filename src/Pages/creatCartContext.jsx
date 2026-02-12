import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartContext({children}) {
    const [cartItems, setCartItems] = useState([]);


        const AddToCart = (product) => {
            setCartItems(prevItems => [...prevItems, {...product, quantity: 1}])
        }
        const BuyNow = (product) => {
            setCartItems(prevItems => [...prevItems, {...product, quantity: 1}])
        }

    return (
        <>
        
        <cartContext.Provider value={{cartItems, AddToCart,BuyNow}} >

            {children}

        </cartContext.Provider>


        </>
    )

}

export const useCart = () =>  useContext(cartContext);