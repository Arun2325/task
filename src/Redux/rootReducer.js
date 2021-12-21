import { combineReducers } from "redux";
import CakeReducer from './Cakes/CakeReducer'
import IceReducer from './IceCream/IceReducer'

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream : IceReducer
})
export default rootReducer  