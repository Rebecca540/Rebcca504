import React from "react";
import "./styles.css";
import ListItems from "./ListItems";
// import {libary} from '@fortawesome/fontawesome-free';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";


 
library.add(faTrash);

class App extends React.Component{
  constructor(props){
     super(props);
     this.state={
       items:[],
       currentItem:{
         text:'',
         key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.addItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this); 
  } 
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()

      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newitems=[...this.state.items, newItem]
      this.setState({
        items:newItem,
        currentItem:{
          text:'',
          key:''
        }
      });
     }
  }
  deleteItem(key){
   const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
        return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
     </div>
    );
    }
}
export default App;
