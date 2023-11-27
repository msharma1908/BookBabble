import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookList.scss";

function BookList(props) {
  // const searchTerm = props.searchTerm;
  //   console.log("searchTerm", searchTerm);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [bookResults, setBookResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        // console.log("helloooo", response.data);
        setBookResults(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="header">Trending Now</h2>
      <ul className="booklist">
        {bookResults.map((book, index) => {
          return (
            <li className="booklist__item" key={index}>
              <img
                className="booklist__image"
                src={book.thumbnail}
                alt={book.title}
              />
              <span className="booklist__span">{book.title}</span>
              <span className="booklist__span">{book.author}</span>
              <span className="booklist__span">{book.rating}</span>
              <span className="booklist__span">{book.releaseDate}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default BookList;

/* <ul>
        {bookResults?.items?.map(
          (
            book // Use optional chaining to avoid the error
          ) => (
            <li key={book.id}>
              <img src={book.picture} alt={book.title} />
              <h3>{book.kind}</h3>
              <p>Author: {book.author}</p> // Use the correct property name
              'author' instead of 'items'
              <p>Ratings: {book.ratings}</p>
            </li>
          )
        )}
      </ul> */
