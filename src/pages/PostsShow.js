import React from 'react';
import axios from 'axios';

class PostsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { post } = this.state;
    return (
      <div>
        <h2>Post id is {post.id}</h2>
        <h2>{post.title}</h2>
      </div>
    );
  }
}

export default PostsShow;
