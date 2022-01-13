import React from "react";
const BooksItem = (props) => {
  return (
    <div className="books-detail">
      <div className="book-cover">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="detail">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
      </div>
    </div>
  );
};
export default BooksItem;
