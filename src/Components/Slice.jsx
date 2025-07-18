import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cardItems: [] ,
    totalquantity:0,
    totalprice:0,
    cardquantity:1,

};
const cartSlice = createSlice({
    name:"cartstore",
    initialState,
    reducers:{
        addToTask(state,data){
            
            
            const itemcard = state.cardItems.findIndex((index)=>index.id === data.payload.id)
            if (itemcard>=0){
                state.cardItems[itemcard].cardquantity +=1;
            }
            else{
                const tempproduct = {...data.payload, cardquantity:1}
                state.cardItems.push(tempproduct)

            }
            

        },
        increaseCount(state,data){
            const itemcard = state.cardItems.findIndex((index)=>index.id === data.payload.id)
            if (state.cardItems[itemcard].cardquantity>=1){
                state.cardItems[itemcard].cardquantity +=1;
            }
        },
        decreaseCount(state,data){
            const itemcard = state.cardItems.findIndex((index)=>index.id === data.payload.id)
            if (itemcard >=0 && state.cardItems[itemcard].cardquantity>1){
                state.cardItems[itemcard].cardquantity -=1;
            }
        },
        removing(state,data){
            const itemcard = state.cardItems.filter((index)=>index.id !== data.payload.id)
            state.cardItems=itemcard
        }
    
    }

})
export default cartSlice.reducer
export const {addToTask, increaseCount, decreaseCount, removing } = cartSlice.actions