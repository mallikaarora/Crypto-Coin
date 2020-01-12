import React, {Component} from 'react';
import Heading from './Heading.js';


class GetCoinsList extends Component {
  
    // constructor and initialisation
    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        });
    }

    
    render(){
        var {isLoaded, items} = this.state;

        
        if(!isLoaded){
            return <div>Loading the coin list</div>
        }
        
        else{
            return(
                <Heading items = {items}/>
            )
        }
        
    }

}

export default GetCoinsList;