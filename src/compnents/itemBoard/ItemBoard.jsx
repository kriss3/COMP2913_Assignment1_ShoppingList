import React, { Component } from 'react';

export default class ItemBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemList: []
        }
    };

    componentDidMount() {
        let nd = new Date();
        let it = this.props.addItem
        let currentList = this.state.itemList
        this.setState({itemList: [...currentList, it]});
        /* this.setState({itemList: [
            {id:1, itemTitle: '12 eggs', dateCreated: nd.toLocaleTimeString()},
            {id:2, itemTitle: 'bread', dateCreated: nd.toLocaleTimeString()},
            {id:3, itemTitle: 'apples', dateCreated: nd.toLocaleTimeString()},
            {id:4, itemTitle: 'bananas', dateCreated: nd.toLocaleTimeString()},
            {id:5, itemTitle: 'tomatoes', dateCreated: nd.toLocaleTimeString()}
        ]}); */
    }

    render(){
        const listItem = this.state.itemList.map(item => 
            <li key={item.id}>{item.itemTitle} - Created on: {item.dateCreated}</li>
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