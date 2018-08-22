import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import Post from '../Post/index.js'


class Posts extends Component {

  constructor() {
    super();
    this.state = {
      pics: []
    };
  };

  componentDidMount() {
    // For local server use: 'http://localhost:4000/'
    fetch('https://cloud-graphql-server.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ cloud { name link } }' }),
    })
      .then(res => res.json())
      .then(res => {
        let pic = res.data.cloud.map(p => p);
        this.setState({ pics: pic });
      });
  }

  render() {
    return (
      <ScrollView>
        {this.state.pics.map((p, k) => <Post key={k} image={p.link} caption={p.name} />)}
      </ScrollView>
    );
  }
}

export default Posts;