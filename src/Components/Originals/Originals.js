import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buycake } from '../../Redux';
import Shows from '../Shows/Shows';
import '../Home/Home.css'

class Originals extends Component {
  render() {
    return (
      <div className='body'>
          {/* <h1>Number of Cakes:{ this.props.numOfCakes }</h1>
          <button onClick={this.props.buycake}>Buy Cake</button> */}
          <h3 className='left-align'>Originals <i class="fas fa-chevron-right"></i> </h3>
        <Shows/>
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
