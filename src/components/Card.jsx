import React, { Component } from 'react';


// function Card({ pokemon }) {
//     return (
//         <div className="card">
//             <div className="card-img">
//                   <img src={pokemon.sprites.front_default} alt=""/>  
//             </div>
//             <div className="card-name"></div>
//             <div className="card-types"></div>
//         </div>
//                 );
// }

class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="card">
                <div className="card-img">
                    <img src={this.props.pokemon.sprites.front_default}/>
                </div>
                <div className="card-name"></div>
                <div className="card-types"></div>
            </div>
        );
    }
}

export default Card;