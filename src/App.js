import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemTitle : '',
      shoppingItemList : []
    };
  }

  btnAddItem = () => {
    if(this.state.itemTitle === ''){alert('Item Name cannot be empty'); return;}
    let items = this.state.shoppingItemList;
    let newItem = {
      id:items.length, 
      itemTitle: this.state.itemTitle, 
      dateCreated: new Date().toLocaleTimeString()
    }
    this.setState({shoppingItemList: [...this.state.shoppingItemList, newItem]});
    this.setState({itemTitle: ''});
  };

  handleChange = (e) => {
    this.setState({itemTitle: e.target.value});
  };

  handleItemRemove = (e) => {
    let items = this.state.shoppingItemList;
    let filteredItems = items.filter(el => el.itemTitle !== e.target.value)
    this.setState({shoppingItemList: filteredItems});
  };

  handleKeyDown = (e) => {
    if(e.keyCode === 13)
      this.btnAddItem();
  };

  render(){
    const myListItems = this.state.shoppingItemList.map((x,idx) => 
      <div>
        <li key={idx}>{x.itemTitle} - {x.dateCreated} | 
        <button value={x.itemTitle} onClick={this.handleItemRemove}>Delete</button></li>
      </div>
    );

    return (
      <div className="App">
        <h2>
          Shoppign List: <br/>
        </h2> <hr/>
        <input 
          type='text' 
          name='item' 
          value={this.state.itemTitle} 
          onChange={this.handleChange} 
          onKeyDown={this.handleKeyDown}/>
        <br/><br/>
        <button type='button' onClick={this.btnAddItem}>Add Shoppig Item</button>
        <br/>
        <div><hr/></div>
        <ul>{myListItems}</ul>
      </div>
    );
  };
}
