import React, { Component } from 'react';

import fetch from 'superagent';

export default class DetailPage extends Component {

    state = {
      characterResults: {},
      Loading: true,
    }

    componentDidMount = async() => {
      // eslint-disable-next-line max-len
      const response = await fetch.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.name}`);

      this.setState({ characterResults: response.body, Loading: false });
    }

    render() {
      
      return (
        <>
          {this.state.Loading ?
            'Loading!!'
            :
            <div className="detail">

              <h1>{this.state.characterResults.name}</h1>

            </div>
          }




        </>

      );
    }
}
