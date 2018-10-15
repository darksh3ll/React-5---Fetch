import React, { Component } from 'react';
import './App.css';
import  GenerateEmployee  from  './components/GenerateEmployee';
import  DisplayEmployee  from  './components/DisplayEmployee';
import SelectedEmployes from "./components/SelectedEmployes";

class App extends Component {
    state = {
        Users:[],
        Selection:[]
    };

random = () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(response => this.setState({Users:response.results}))
};
selection = () => {
    const result =[...this.state.Users,...this.state.Selection];
    this.setState({Selection:result})
};


  render() {
      console.log(this.state.Users);
    return (
      <div className="App">
          <GenerateEmployee
                add ={()=>this.random()}/>
          {
              this.state.Users.map((user,id) => {
                  return (
                      <div>
                          <DisplayEmployee
                              user={user}
                              key={id}
                              select={()=>this.selection()}
                          />
                      </div>
                  )
              })
          }
          {
              this.state.Selection.map((user,id) => {
                  return (
                      <div className="selected">
                          <SelectedEmployes
                              user={user}
                              key={id}
                          />
                      </div>
                  )
              })
          }



      </div>
    );
  }
}

export default App;
