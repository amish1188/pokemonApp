import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import getAllPokemon from './services/pokemon';
import getPokemon from './services/getPokemon';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: [],
            nextUrl: '',
            prevUrl: '',
            loading: true,
        }
    }

    async componentDidMount() {
        let response = await getAllPokemon('https://pokeapi.co/api/v2/pokemon');
        this.setState({
            nextUrl: response.next,
            prevUrl: response.previous,
            loading: false
        })
        await this.loadingPokemon(response.results)
    }


    loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
        }))
        this.setState({
            pokemonData: _pokemonData
        })
        console.log(this.state.pokemonData);
    }

    render() {
        return(
            <div>{ this.state.loading ? <h3>Loading...</h3> : 
                <div className="grid-container">
                    {this.state.pokemonData.map((pokemon, i) => {
                        return <Card key={i} pokemon={pokemon}></Card>
                    })}
                </div> 
                
            }</div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"));