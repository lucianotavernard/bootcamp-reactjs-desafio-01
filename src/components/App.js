import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 1,
          name: 'Starlord',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          time: 'há 3 min',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates aliquam laudantium pariatur numquam. Molestiae necessitatibus sit doloremque neque excepturi assumenda nisi? Reiciendis adipisci excepturi ullam numquam perspiciatis minus perferendis.',
        },
        {
          id: 2,
          name: 'Rocket',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          time: 'há 30 min',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum asperiores laborum dignissimos libero qui eius nostrum eveniet, impedit perferendis atque placeat repellendus veniam accusamus ipsa, odit non dolor itaque. Eligendi!',
        },
        {
          id: 3,
          name: 'Groot',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          time: 'há 45 min',
          body:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum asperiores laborum dignissimos libero qui eius nostrum eveniet, impedit perferendis atque placeat repellendus veniam accusamus ipsa, odit non dolor itaque. Eligendi!',
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        <Header />

        <div className="posts">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
