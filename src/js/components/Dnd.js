import React from "react";
import { connect } from 'react-redux';
import ListContainer from './dnd/ListContainer';


@connect((store) => {
  // mapStateToProps
  return {
    title: 'You'
  }
})
export default class Dnd extends React.Component {
  
  componentWillMount() {
    // this.props.dispatch(fetchUser());
  }
  
  // fetchTweets(e){
  //   // e.preventDefault();
  //   // this.props.dispatch(fetchTweets());
  // }
  
  render() {
    // const { user, tweets } = this.props;
        
    return (
      <div>
        <h1>Drag and drop</h1>
        <ListContainer />
      </div>
    )
  }
}