import React from "react";
import { connect } from 'react-redux';


import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';


@connect((store) => {
  // mapStateToProps
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  }
})
export default class Tweets extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(fetchUser());
  }
  
  fetchTweets(e){
    e.preventDefault();
    this.props.dispatch(fetchTweets());
  }
  
  render() {
    const { user, tweets } = this.props;
    
    if(!tweets.length){
      return (
        <div>
          <h1>Tweets</h1>
          <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
        </div>
      )
    }
    
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
    
    return (
      <div>
        <h1>Tweets</h1>
        <h3>{user.name}</h3>
        <ul>{mappedTweets}</ul>
      </div>
    )
  }
}