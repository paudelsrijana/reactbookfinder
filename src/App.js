import React from "react";
import "./App.css";
import { Component } from "react";
import BooksItem from "./BooksItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: "",
    };
  }

  componentDidUpdate(nextProps, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      if (this.state.searchInput !== "") {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`
        )
          .then((blob) => blob.json())
          .then((response) => {
            this.setState({
              books: response.items,
            });
          });
      } else {
        this.setState({
          books: [],
        });
      }
    }
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchInput: value,
    });
  };
  render() {
    return (
      <div className="container">
        <h1>The Book Finder</h1>
        <input
          className="search-book"
          placeholder="search book"
          onChange={this.handleChange}
          value={this.state.searchInput}
        />
        <div className="books-item">
          {this.state.books.map((book, i) => {
            return (
              <BooksItem
                key={book.id}
                title={book.volumeInfo?.title}
                image={book.volumeInfo?.imageLinks?.thumbnail}
                author={book.volumeInfo?.authors?.[0]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
