import React, { Component } from 'react';

export default class App extends Component {

    state = {
        json:''
    }


    componentDidMount(){
        let endpoint = 'http://api.open-notify.org/astros.json';

        fetch(endpoint)
            .then(res => res.json())
            .then(jsondata => this.setState({json: jsondata}))
            
    }

    render(){
        if(this.state.json.people){
            const peopleCards = this.state.json.people.map(people => (people.name))
            return (<div className="ui cards"> {peopleCards.map(card => card + ' - ' )} </div>)
        }else{
            return(
                <div>
                    
                </div>
                )
        }
    }


}