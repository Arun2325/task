import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

export default class Shows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false
        }
    }

    componentDidMount() {
        axios.get("https://api.tvmaze.com/shows")
            .then(response => {
                console.log(response.data)
                this.setState({ posts: response.data })
                this.setState({ dataLoaded: true })
            })
            .catch(error => {
                this.setState({ error: "Endpoint is not correct" })

            })
    }

    render() {
        const { posts,dataLoaded,error} = this.state;
        return (
            <div>
                <div className="row m-5">
                    {dataLoaded ? posts.map((item, index) =>
                        <div className="col-6 col-md-2 col-sm-2 cardLayout container-fluid">
                           <Link to={{
                                    pathname: "/movie-details",
                                    state: {
                                        items: item
                                        },
                                }}>
                                <Cards key={index} data={item} /></Link>
                        </div>) : <div className="error">{error}</div>
                    }
                </div>
            </div>
        )
    }
}

