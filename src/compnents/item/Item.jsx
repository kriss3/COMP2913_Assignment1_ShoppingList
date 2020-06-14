import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default class Item extends Component {

    render(){
        const {item} = this.props;
        return(
            <>
                <li 
                    style={{width: 400, display:'inline-block', padding: 20}}
                >
                    {item.itemTitle} - {item.dateCreated}
                </li>
                <Button
                    style={{display: 'inline-block'}}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon/>}
                    onClick={this.props.removeItem}
                    value={item.itemTitle + item.dateCreated}
                >
                    Delete
                </Button>
                <Divider/>  
            </>
        );
    };
};