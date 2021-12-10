import axios from 'axios';
import React, { Component } from 'react'
import SlideLayout from '../Slider/SlideLayout'
import './Home.css'
import Slider from "react-slick";


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
       <button className='arr'> <i class="fas fa-arrow-left "  ></i></button>
      
      </div>
    );
  }

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post: [],
         error:''
      };
    };
   
      
    componentDidMount(){
        axios.get("https://api.tvmaze.com/shows")
        .then(response =>{
            console.log(response.data)
            this.setState({post:response.data})
            this.Setstate({dataLoaded: true})
        })
        .catch(error =>{
            this.setState({error: "Check your Endpoint"})
        })

    }
    
    render() {

        
        const {post,error,dataLoaded} = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow :  <SamplePrevArrow />
          };
        console.log(post)
        return (
            <div className='body'>
                <SlideLayout/>
               
                    <h3 className='left-align'>New on Liv <i class="fas fa-chevron-right"></i> </h3>
                    <Slider {...settings}>
                   
                    { post.map( item =>
                     <div className='row__posters'><img className='row__poster' src={item.image.medium} alt="" /></div>
                            
                        )
                    }
                   
                    </Slider>
                
                
            </div>
        )
    }
}


