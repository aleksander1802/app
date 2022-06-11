
import { Component } from 'react';

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';





import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
          {name: 'John', salary: 800, increase: false, id: '1', rise: false},
          {name: 'Smith', salary: 1400, increase: false, id: '2', rise: false},
          {name: 'Smoth', salary: 5600, increase: false, id: '3', rise: false}
      ]
    }
    this.MaxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }


  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.MaxId++
    }
    this.setState(({data})=> {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })

  }

  onToggleProp = (id, prop) => {
    
    this.setState(({data}) => ({
      data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
    }))
  }


  

  render () { 
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length
    console.log(increased); 
    return(
      <div className="app">
        <AppInfo employees={employees} increased={increased}/> 
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>         
        </div>      
        <EmployeesList 
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
        
        />   
        <EmployeesAddForm onAdd = {this.addItem}/>      
      </div>
    )
  }
}

export default App;






