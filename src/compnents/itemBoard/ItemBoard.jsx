import React, { Component } from 'react';
import Item  from '../item/Item';

export default class ItemBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemsList: []
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.item.itemTitle !== this.props.item.itemTitle) {
            const { item } = this.props;
            let currentList = this.state.itemsList
            if(item.itemTitle !== ''){
                this.setState({itemsList: [...currentList, item]});
            }    
        }
    }

    handleItemRemove = (e) => {
        let items = this.state.itemsList;
        let filteredItems = items.filter(el => el.itemTitle !== e.currentTarget.value)
        this.setState({itemsList: filteredItems});
    };

    render(){
        const listItem = this.state.itemsList.map(item => 
            <Item item={item} removeItem={this.handleItemRemove} />
        );
        
        return(
            <>
                <ul>
                    {listItem}
                </ul>
            </>
        );
    };
}