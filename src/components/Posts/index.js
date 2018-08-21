import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import Post from '../Post/index.js'


class Posts extends Component {
  render() {
    // Testing
    let pics = [{ link: 'https://goo.gl/6KKfm5', name: 'My dog top' }, { link: 'https://goo.gl/6KKfm5', name: 'Dog topperson' }];
    
    return (
      <ScrollView>
        {pics.map( (p, k) => <Post key={k} image={p.link} caption={p.name} />)}
      </ScrollView>
    );
  }
}

export default Posts;