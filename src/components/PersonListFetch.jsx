import React, { Component } from 'react'
import PersonCard from './PersonCard'

// Same list, using the built-in JS Fetch API instead of Axios
export default class PersonListFetch extends Component {
  state = {
    persons: [],
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ persons: data.results })
      })
      .catch((err) => console.error(err))
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
