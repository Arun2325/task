import axios from 'axios';
import React, { Component } from 'react'
import SlideLayout from '../Slider/SlideLayout'
import './Home.css'
import Slider from "react-slick";
import HoriSlider from '../H-Slider/HoriSlider';
import { Link } from 'react-router-dom';




export default class Home extends Component {
    
    
    render() {

        
       
        return (
            <div className='body'>
                <SlideLayout/>
               
                    <Link to='/games' style={{textDecoration:'none'}}><h3 className='left-align'>New on Liv <i class="fas fa-chevron-right"></i> </h3></Link>
                    <HoriSlider/>
                    <Link to='/originals' style={{textDecoration:'none'}}><h3 className='left-align'>Liv Originals<i class="fas fa-chevron-right"></i> </h3></Link>
                    <HoriSlider/>
                    <Link to='/movie' style={{textDecoration:'none'}}><h3 className='left-align'>Movies<i class="fas fa-chevron-right"></i> </h3></Link>
                    <HoriSlider/>
                    
                
                
            </div>
        )
    }
}


