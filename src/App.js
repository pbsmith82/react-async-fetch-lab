import React, { Component } from 'react';

export default class App extends Component {


    componentDidMount(){
        let endpoint = 'http://api.open-notify.org/astros.json';

        fetch(endpoint)
            .then(res => res.json())
            
    }

    render(){
        return(
            ''
        )

    }


}