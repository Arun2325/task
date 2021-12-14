import React, { Component } from 'react';
import Shows from '../Shows/Shows';
import '../Home/Home.css'

class Originals extends Component {
  render() {
    return (
      <div className='body'>
          
          <h3 className='left-align'>Originals <i class="fas fa-chevron-right"></i> </h3>
        <Shows/>
      </div>
    );
  }
}
export default Originals;
