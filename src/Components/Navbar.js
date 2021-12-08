import React, { Component } from 'react'
import { MenuItems } from './MenuItems'



class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: false
        }
    }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
   
    render() {
        
        return (
            <div>
                <nav>
                <img src='logo.png' alt='logo' className='logo'></img>
                    <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className='nav-left'>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                       {
                           MenuItems.map((navitems,index) =>{
                            return <li className='list' key={index}>{navitems.tittle}</li> 
                           })
                       }
                    </ul>
                </div>
                <div className='nav-right'>
                <i class="fas fa-search fa-lg"></i>
                <img src='user.png' alt='user-pic' className='user-pic'></img>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar