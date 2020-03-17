import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Game = props => (
    <tr>
        <td>{props.games.title}</td>
        <td>{props.games.rating}</td>
        <td>{props.games.rCount}</td>
    </tr>
);

export default class GameList extends Component {
    constructor(props) {
        super(props);

        this.state = {games: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
            .then(response => {
                this.setState({ games: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    gameList() {
        return this.state.games.map(currentgame => {
            return <Game game={currentgame} key={currentgame._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Games</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Rating count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{ this.gameList() }*/}
                    </tbody>
                </table>
            </div>
        )
    }
}
