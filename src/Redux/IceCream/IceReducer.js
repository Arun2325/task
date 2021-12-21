import { BUY_ICECREAM } from "./IceTypes"

const initialState = {
    numOfIceCream : 10
}

const buyIceCream = (state=initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCream: state.numOfIceCream-1
        }
        default : return state
    }
}
export default buyIceCream