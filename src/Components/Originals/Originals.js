import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buycake } from '../../Redux';


class Originals extends Component {
  render() {
    return (
      <div style={{margin:'10px'}}>
          <h1>Number of Cakes:{ this.props.numOfCakes }</h1>
          <button onClick={this.props.buycake}>Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    numOfCakes : state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buycake : () => dispatch(buycake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Originals);
