import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default class ItemInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTitle: '',
            placeHolder: 'Add item to the shopping list'
        };
    }

    handleChange = (e) => {
        this.setState({itemTitle: e.target.value});
    };

    btnAddItem = () => {
        if(this.state.itemTitle === ''){
            alert('Item Name cannot be empty'); 
            return;
        }

        let newItem = {
          itemTitle: this.state.itemTitle, 
          dateCreated: new Date(),
        }
        this.props.createItem(newItem);
        this.setState({itemTitle: ''});
    };

    handleKeyDown = (e) => {
        if(e.keyCode === 13)
          this.btnAddItem();
    }; 
    
    render() {
        return (
            <>
                <h2>
                    Shopping List:
                </h2>
                <div>{" "}</div>
                <Input 
                    type='text' 
                    name='item' 
                    autoFocus={true}
                    placeholder={this.state.placeHolder}
                    value={this.state.itemTitle} 
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKeyDown}
                />
                <Divider/>
                <Button 
                    style={{margin: 20}}
                    variant="contained" 
                    color="primary" 
                    onClick={this.btnAddItem}>
                        Add Shoppig Item
                </Button>
            </>
        );
    }
}