import React, {useReducer} from "react";


export function ShoppingCart() {

    

    const initialState = {
        cart: [],
        total: 0
    }
    
const [state, dispatch] = useReducer(cartReducer, initialState );
    

    function cartReducer(state, action){
        switch (action.type) {
            case "ADD_ITEM" :
                return {
                    ...state,
                    cart : [...state.cart, action.payload],
                    total : state.total + action.payload.price
                }

                case "REMOVE_ITEM" : 
                    return {
                        ...state,
                        cart : state.cart.filter(item => item.id !== action.payload.id),
                        total : state.total - action.payload.price
                    }

                case "CLEAR_CART" : {
                    return initialState;
        }

        default: 
            return state;
    
    }
    }
    

    const addItem = () => {
        dispatch({
            type : "ADD_ITEM",
            payload : 
                {id: 1, name: "Laptop", price: 1200},
               
        })
    }

    const removeItem = () => {
        dispatch({
            type: "REMOVE_ITEM",
            payload : {id: 1, price: 1200}
        })
    }

    return (
        <>
        <div>
            <h2>SHopping Cart</h2>
            <button onClick={addItem}>ADD Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <button onClick={() => dispatch({type: "CLEAR_CART"})}>CLear Cart</button>
        </div>

        <div>
            <h3>ITems: </h3>

            <ul>
                {state.cart.map(item => (
                    <li key={item.id}>{item.name} {item.price}</li>
                ))}
            </ul>

            <h3>Total: ${state.total}</h3>

        </div>

        </>
    )

}