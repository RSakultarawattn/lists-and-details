import React, { Component } from 'react';

import fetch from 'superagent';

export default class DetailPage extends Component {

    state = {
      character: [],
      Loading: true,
    }

    componentDidMount = async() => {
      // eslint-disable-next-line max-len
      const response = await fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`);
      console.log(response)
      this.setState({ character: response.body, Loading: false });
    }

    
    render() {
      
      return (
        <>
          {this.state.Loading ?
            'Loading!!'
            :
            <div className="detail">

              <h1>{this.state.character.id}</h1>

            </div>
          }




        </>

      );
    }
}
