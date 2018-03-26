import React from 'react';

const PostsShow = ({ match }) => (
  <div>
    <h2>Post id is {match.params.id}</h2>
  </div>
);

export default PostsShow;
