import React, { Component } from 'react'
import Books from './Books'

class App extends Component {

  constructor() {
    super()

    this.state = {
      books: [],
      search: ''
    }

  }
  handleSearch = () => {
    this.searchBookByKeyword(this.state.search)
  }

  componentDidMount() {

    this.fetchPhotos()


  }

  handleOnChange = (e) => {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  searchBookByKeyword = (keyword) => {
    fetchPhotos = () => {
      fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
        .then(response => response.json())
        .then(result => {
          this.setState({
            books: result.search
          })
        })

    }

    render() {

      return (
        <div>
          <h1>Library</h1>
          <input type="text" onChange={this.handleOnChange} />
          <button onClick={this.handSearch}>Search</button>
          <Books books={this.state.books} />
        </div>
      )
    }
  }











  export default App