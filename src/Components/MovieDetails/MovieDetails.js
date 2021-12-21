import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './MovieDetails.css'
import ShowMoreText from "react-show-more-text";
import HoriSlider from '../H-Slider/HoriSlider';


class MovieDetails extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             items: this.props.location.state
          };
        };
        
    componentDidMount(){
        
        console.log(this.state.items)
    }
    
    render() {
        const post = this.state
        return (
            <div className='body'>
                <h1 className='left-align'>Movie details</h1> 
                <Container fluid>
                    <Row>
                        <Col>
                             <h6 className='left-align'>Movie Name : <span className='bold-line'>{post.items.items.name} </span></h6>
                             <h6 className="left-align">Genres : <span className='bold-line'>{post.items.items.genres[0]} </span><i class="fas fa-grip-lines-vertical"></i><span className='bold-line'>{post.items.items.genres[1]} </span> <i class="fas fa-grip-lines-vertical"></i> <span className='bold-line'>{post.items.items.genres[2]} </span></h6> 
                             <h6 className="left-align">Rating : <span className='bold-line'>{post.items.items.rating.average} </span><i class="fas fa-star"></i></h6>
                             <h6 className="left-align">Total Runtime : <span className='bold-line'>{post.items.items.runtime} Mins </span></h6>
                             <h6 className="left-align">Summary :<ShowMoreText
                                    lines={2}
                                    more="Show more"
                                    less="Show less"
                                    className="content-css"
                                    anchorClass="my-anchor-css-class"
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    truncatedEndingComponent={"... "}
                                ><p>{post.items.items.summary}</p>
                            </ShowMoreText>
                            </h6>
                            </Col>
                         <Col> <img className='img-comtainer' src={post.items.items.image.original} alt="" />
                    
                             </Col>
                    </Row>
                    <h3 className="left-align">Latest Episodes<i class="fas fa-chevron-right"></i> </h3>
                 </Container>
                 <HoriSlider/>

            </div>
        )
    }
}

export default MovieDetails
