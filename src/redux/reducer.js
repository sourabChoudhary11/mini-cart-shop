import { createReducer } from "@reduxjs/toolkit";

const cartReducer = createReducer({
    cartItems: [],
    cartItemsQuantity: 0,
    quantity: 1,
    totalPrice: 0,
    pop: false,
}, {
    increProductQuantity: (state, action) => {
        let item = state.cartItems.find(i => i.id === action.payload);
        if (item) {
            item.quantity = item.quantity + 1;
            item.stock -= 1;
            state.cartItemsQuantity += 1;
        }
    },

    decreProductQuantity: (state, action) => {
        let item = state.cartItems.find(i => i.id === action.payload);
        if (item) {
            if (item.quantity > 1) {
                item.quantity = item.quantity - 1;
                item.stock += 1;
                state.cartItemsQuantity -= 1;
            }
        }
    },
    deleteProductFromCart: (state, action) => {
        let item = state.cartItems.filter(i => i.id === action.payload);
        state.cartItemsQuantity -= item[0].quantity;
        let items = state.cartItems.filter(i => i.id !== action.payload);
        state.cartItems = items;
    },
    addToCart: (state, action) => {
        console.log(state);
        let itemExist = state.cartItems.find(i => i.id === action.payload.id)
        if (itemExist) {
            state.cartItems.forEach((i) => {
                if (i.id === action.payload.id) {
                    i.quantity += state.quantity;
                    i.stock -= state.quantity;
                    state.cartItemsQuantity += state.quantity;
                }
            })
        }
        else {
            action.payload.stock -= state.quantity;
            action.payload.quantity = state.quantity;
            state.cartItems.push(action.payload);
            state.cartItemsQuantity += state.quantity;
        }
        state.quantity = 1;
        state.pop = true;
    },
    decreQuantity: (state, action) => {
        if (state.quantity > 1) {
            state.quantity -= 1;
        }
    },
    increQuantity: (state, action) => {
        state.quantity += 1;
    },
    popUpRemoval: (state, action) => {
        state.pop = action.payload;
    }

})

export default cartReducer