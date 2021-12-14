import React, { Component } from 'react'
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='slick-next' onClick={onClick}>
         {/* <i class="fas fa-arrow-left" style={{color:"black"}}></i> */}
         <button className='arr'><i class="fas fa-arrow-right"  ></i></button>
      </div>
    );
  }
  
function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='slick-prev'  onClick={onClick}>
       {/* <i class="fas fa-arrow-right" style={{color:"black"}} ></i> */}
       <button className='arr'> <i class="fas fa-arrow-left "  ></i></button>
      
      </div>
    );
  }


export class HoriSlider extends Component {
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
              // this.Setstate({dataLoaded: true})
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
            prevArrow :  <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              }
            ]
          };
        console.log(post)
        return (
            <div>
                 <Slider {...settings}>
                   
                   { post.map( item =>
                    <div className='row__posters'> <Link to={{
                      pathname: "/movie-details",
                      state: {
                          items: item
                          },
                       }}><img className='row__poster' src={item.image.medium} alt="" /></Link></div>
                           
                       )
                   }
                  
                   </Slider>
                   <h1>{error}</h1>
            </div>
        )
    }
}

export default HoriSlider
