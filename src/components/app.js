import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBer';
import RecentPosts from './recentPosts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo/>
        <SearchBar/>
        <RecentPosts/>
      </div>
    );
  }
}
