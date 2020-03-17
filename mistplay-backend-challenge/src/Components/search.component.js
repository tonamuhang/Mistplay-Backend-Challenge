import React, { Component } from 'react';
import axios from 'axios';

export default class SearchGame extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            games: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/search/')
            .then(res => {
                this.setState({
                    games: res
                })
            })
    }

    onSubmit(e){
        e.preventDefault();

        const game = {

        }

        axios.post('http://localhost:5000/search')
    }


    render() {
        return (
            <div>
                <h3>Search game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

