import React, { Component } from 'react';
import './searchBox.css';
import ListItems from './ListItems';


class Searchbox extends Component {
    constructor(props) {
        super(props);
        state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
   
    handleInput(e) {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })          
    }

    addItem(e) {
        e.preventDefault(); // prevents the page from refreshing when the button is clicked//
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
        
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item => item.key!== key)
        this.setState({
            items: filteredItems
        })
    }

    render () {
        return (
            <div className="form">
            <form onSubmit={this.addItem}>
                    <input type="text" placeholder="enter item" value={this.state.currentItem.text} onChange={this.handleInput}/>
                    <button type="submit">Add</button>
                    <ListItems
                        items={this.state.items}
                        deleteItem={this.deleteItem}
                    />
                </form>
                
           </div>
    )
    }
}










export default Searchbox;
