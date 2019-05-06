import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

// import { Container } from './styles';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader avatar={data.avatar} name={data.name} time={data.time} />
    <p className="post-body">{data.body}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
