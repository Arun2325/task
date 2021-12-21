import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import  { buyCake } from '../../Redux'
 
import Cards from "../Shows/Cards";
import './Game.css'

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: "",
      dataLoaded: false,
      limit: 24,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /*Load more pictures on click of show more -- Vertical Pagination */
  clickHandler() {
    this.setState({
      limit: this.state.limit + 24,
    });
  }

  componentDidMount() {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        console.log(response.data);
        this.setState({ posts: response.data });
        this.setState({ dataLoaded: true });
      })
      .catch((error) => {
        this.setState({ error: "Endpoint is not correct" });
      });
  }

  render() {
    const { posts, dataLoaded, error, limit } = this.state;
    return (
      <div className="body">
        <h3 className='left-align'>Movies  <i class="fas fa-chevron-right"></i> </h3>
        <div style={{ borderRadius: "10px" }}>
          <div className="row m-5">
            {dataLoaded ? (
              posts.map(
                (item, index) =>
                  index < limit && (
                    <div className="col-6 col-md-2 col-sm-2 cardLayout container-fluid">
                      <Cards key={index} data={item} />
                    </div>
                  )
              )
            ) : (
              <div className="error">{error}</div>
            )}
          </div>
        </div>
        <div className="container">
          {limit >= posts.length ? (
            <h2 className="text-center" style={{ color: "White" }}>
              You reached to end of the page
            </h2>
          ) : (
            <button
              type="button"
              className="btn btn-primary showmore"
              onClick={this.clickHandler}
            >
              Show more
            </button>
          )}
          <div className="topButton float-end"  onClick={this.scrollTop}>
          <i class="fas fa-arrow-up fa-2x"></i>
            Back to top
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    numOfCakes : state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : () => dispatch (buyCake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Games);