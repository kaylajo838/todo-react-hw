import React, { Component } from "react";

export default class To_do extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  viewListItems = () => {
    // Iterate with map over list array to show individual list array items
    // Use index and item - index so I can associate each item with an index
    return this.state.list.map((item, index) => {
      return (
        // Add the index as 'key' to main div of list item
        <div className="list-items" key={index}>
          <ul className="list-group">
            <li className="list-group-item">{item}
            <button className="list-btn" onClick={() => this.removeItem(index)}>Remove</button>
            </li>
          </ul>
        </div>

      );
    });
  };
  

  addToList = (event) => {
    event.preventDefault();

    const addItem = event.target.addToList.value
    // Use prevState to get all other items already in array
    this.setState((prevList) => ({
      // Add new inputted value to list array
      list: prevList.list.concat(addItem)
    }));

    // Make the input blank after submitting
    event.target.addToList.value = '';
  };

  removeItem = (index) => {
    // Make a copy of the array 
    const list = this.state.list.slice();
    // Remove item at specified index from viewListItems()
    list.splice(index, 1);
    // Update state with removed item
    this.setState({list});
  }


  componentDidMount = () => {
    this.viewListItems();
  };


  render() {
    return (
      <div>
        <h1 className="todo-h1">Add To Your To-Do List</h1>

        <form onSubmit={this.addToList}>
          <input className="form-input" name="addToList" placeholder="Add to your list" />
          <button className="add-button">Add</button>
        </form>

        {this.viewListItems()}
      </div>
    );
  };
};
