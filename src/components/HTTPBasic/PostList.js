import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMessage: ''
      }
    }

    componentDidMount() {
    console.log('componentDidMount');

        axios.get('https://jsonplaceholder.typicode.com/posts').then((dataResponse) => {
            console.log('dataResponse----', dataResponse);
            this.setState({
                posts: dataResponse.data
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                errorMessage: 'error getting data'
            })
        })
    }

  render() {
    console.log('render');
    const { posts, errorMessage } = this.state;
    return (
      <div>
        <div>List of Posts</div>
        <div>{posts.length}</div>
        {
            posts.length ?
            posts.map(post =>
                <div key={post.id}>{post.title}</div>
            ) : null
        }
        {
            errorMessage ? <div> {errorMessage}</div> : null
        }
      </div>
    )
  }
}

export default PostList