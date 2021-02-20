import React from 'react';
import Post from '../Post/Post.jsx';
import classes from './PostList.module.css';

class PostList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const posts = this.props.posts;

    return (
      <div className={classes.container}>
        {posts.map((post, idx) => {
          return <Post post={post} key={idx} index={idx}/>;
        })}
      </div>
    );
  }
}

export default PostList;
