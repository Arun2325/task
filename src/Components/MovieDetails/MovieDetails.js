import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './MovieDetails.css'


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
                             <h6 className="left-align">Summary :</h6>
                             <p className="left-align">{post.items.items.summary}</p>
                            </Col>
                         <Col> <img className='img-comtainer' src={post.items.items.image.original} alt="" />
                    
                             </Col>
                    </Row>
                 </Container>

            </div>
        )
    }
}

export default MovieDetails
