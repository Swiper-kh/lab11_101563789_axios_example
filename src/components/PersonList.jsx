import React, { Component } from 'react'
import axios from 'axios'
import PersonCard from './PersonCard'

// Fetches 10 random users with Axios
export default class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
  }

  // Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data)
      const persons = res.data.results
      this.setState({ persons })
    })
  }

  render() {
    return (
      <div>
        {this.state.persons.map((person) => (
          <PersonCard key={person.login.uuid} person={person} />
        ))}
      </div>
    )
  }
}
