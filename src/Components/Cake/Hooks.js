import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { buyCake } from '../../Redux/Cakes/CakeActions'

export default function CakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Num of Cakes{numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
