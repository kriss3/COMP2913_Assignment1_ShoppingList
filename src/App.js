import React, { Component } from 'react';
import './App.css';
import ItemInput from './compnents/itemInput/ItemInput';
import ItemBoard from './compnents/itemBoard/ItemBoard';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item : {}
    };
  }

  createItem = (item) => {
    this.setState({item: item});
  };

  render(){
    return (
      <div className="App-header">
        <ItemInput createItem={this.createItem}/>
        <div><hr/></div>
        <ItemBoard item={this.state.item}/>
      </div>
    );
  };
}
