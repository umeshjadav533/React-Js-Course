import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const value = { };

    return <CartContext.Provider value={value}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;