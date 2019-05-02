import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import './ContactItems.css';

class ContactItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text} 
            </li>
        
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var contactEntries = this.props.entries;
        var listItems = contactEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default ContactItems;