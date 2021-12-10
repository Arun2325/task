import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imgUrl from "./ImgUrl";

import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className='slick-next' onClick={onClick}>
       {/* <i class="fas fa-arrow-left" style={{color:"black"}}></i> */}
       <button className='arr'><i class="fas fa-arrow-right"  ></i></button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className='slick-prev'  onClick={onClick}>
     {/* <i class="fas fa-arrow-right" style={{color:"black"}} ></i> */}
     <button className='arr'> <i class="fas fa-arrow-left " ></i></button>
    
    </div>
  );
}



export default class SlideLayout extends Component {

 

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className:'slides',
      nextArrow: <SampleNextArrow />,
      prevArrow :  <SamplePrevArrow />
    };
    return (
      <div className='slider'> 
          
        <Slider {...settings } >
          {
              imgUrl.map((url)=>{
                  return <div >
                  <img className='images' src={url.url} style={{ width: "100%", height:'100hv'}}/>
                 
                </div>
              })
          }
          
        </Slider>
        {/* <img src="images/venom.jpg" alt="aa" style={{ width: "100%", height:'100hv'}} /> */}
        
    
      </div>
    );
  }
}