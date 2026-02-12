import { useCart } from "./creatCartContext";

export function Cart() {
    
    const {cartItems} = useCart();


    if(cartItems.length === 0){
        return <h2>Your Cart is Empty</h2>
    }

    return (
        <>
        <h2 style={{marginTop: "80px"}}>Your Cart</h2>
        


        {cartItems.map((item , index)=> (   
            <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #ddd',/*  */
                    padding: '10px',
                }}>
                    <img src={item.image} alt={item.title}  
                    style={{ width: '80px', marginRight: '1rem' }} />

                    <h1>{item.price}</h1>
                    <h1>{item.title}</h1>

                </div> 
        ))}
         

        </>
    )

    }