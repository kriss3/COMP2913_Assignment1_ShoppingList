import React, { Component } from 'react';
import Item  from '../item/Item';
import Switch from '@material-ui/core/Switch';
import { InputLabel, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

export default class ItemBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemsList: [],
            sort: 10,
            order:false
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
        let filteredItems = items.filter(el => el.itemTitle + el.dateCreated !== e.currentTarget.value)
        this.setState({itemsList: filteredItems});
    };

    handleOrderChange = () => {
        this.setState({order: !this.state.order});
        let reverseOrder = this.state.itemsList;
        reverseOrder.reverse();
        this.setState({itemsList: reverseOrder});
    };

    handleSortChange = (e) => {
        let sortOrder = e.target.value;
        let items = this.state.itemsList;
        this.setState({sort: sortOrder});
        if(sortOrder === 'Name'){
            items.sort((a,b)=> {
                return a.itemTitle.localeCompare(b.itemTitle);
            });
            this.setState({itemsList: items});
        } else if (sortOrder === 'Date') {
            alert('Sorting by Date');
        }
    };

    render(){

        const listItem = this.state.itemsList.map(item => 
            <Item 
                key={item.itemTitle + item.dateCreated} 
                item={item} 
                removeItem={this.handleItemRemove} 
            />
        );
        
        return(
            <>
                <div>
                <InputLabel style={{display:'inline', margin: 20}} shrink id="demo-simple-select-placeholder-label-label">
                    Sort:
                </InputLabel>
                <Select
                style={{width:75}}
                labelId="demo-simple-select-placeholder-label-label"
                value={this.state.sort}
                onChange={this.handleSortChange}
                >
                <MenuItem value={10} disabled={true}>Select</MenuItem>
                <MenuItem value='Name'>Name</MenuItem>
                <MenuItem value='Date'>Date</MenuItem>
                </Select>
                <InputLabel style={{display: 'inline', margin: 20}}>ASC/DESC:</InputLabel>
                <Switch
                    style={{display: 'inline'}}
                    checked={this.state.order}
                    onChange={this.handleOrderChange}
                    color="primary"
                    name="orderSelect"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                
                </div>
                
                
                <ul>
                    {listItem}
                </ul>
            </>
        );
    };
}