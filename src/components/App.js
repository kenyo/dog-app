import React, { Component } from 'react';
import Header from './Header'
import Button from './Button'
// https://ant.design/components/table/
import { Table } from 'antd';
import axios from 'axios'
const dogAPI = 'https://dog.ceo/api/breeds/list/all'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dog: {}
    }
  }

  getDogs = () => {
    axios.get(dogAPI)
      .then(({data}) => {
        const dog = data.message

        this.setState({ dog })
      })
  }

  render() {
    const dog = this.state.dog
    const dataSource = Object.keys(dog)
      .map((x, i) => ({
        key: x,
        name: x,
        age: 3,
        address: 'here',
      }))

    const dogTable = dog
      ? <Table dataSource={dataSource} columns={columns}/>
      : null
    return (
      <div className="App">
        <Header text={'This is the dog app'} />
        <Button text={'Get dogs'} onClick={this.getDogs}/>
        { dogTable }
      </div>
    );
  }
}

export default App;
