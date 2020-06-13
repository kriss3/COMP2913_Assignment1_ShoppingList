import React, { Component } from 'react';

class ItemInput extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <>
                <h2>Add New Item:</h2>
                <input type='text' name='item'/>
                <button title='Add Item' onClick={this.props.btnAddItem}>Add Item</button>
            </>
        );
    }
}

export default ItemInput;