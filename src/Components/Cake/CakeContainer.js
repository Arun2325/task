import React, { Component } from 'react';
import  { buyIceCream } from '../../Redux'
import { connect } from 'react-redux'


class CakeContainer extends Component {
  render() {
    return (
      <div> 
          <h1>Num Of cakes : {this.props.numOfCakes}</h1>
          <button onClick={this.props.buyCake}>Increament</button> 
     </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    numOfCakes : state.iceCream.numOfIceCream
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCake : () => dispatch (buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);