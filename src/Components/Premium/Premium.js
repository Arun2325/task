import React, { Component } from 'react'
import '../Home/Home.css'
import Shows from '../Shows/Shows'

export class Premium extends Component {
    render() {
        return (
            <div className='body'>
                 <h3 className='left-align'>Premium <i class="fas fa-chevron-right"></i> </h3>
                <Shows/>
            </div>
        )
    }
}

export default Premium
