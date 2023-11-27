import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SearchResults.scss";
import { Link } from "react-router-dom";

// const SearchResults = (props) => {
//   const [searchResults, setSearchResults] = useState([]);
//   const title = props.title;
//   const baseUrl = process.env.REACT_APP_BASE_URL;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/search/${title}`);

//         const filteredData = response.data.filter((book) =>
//           book.title.toLowerCase().includes(title.toLowerCase())
//         );
//         setSearchResults(filteredData);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [title]);
const SearchResults = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const title = props.title;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/search/${title}`);
        setSearchResults(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [title]);

  return (
    <div>
      <h1 className="header">Search Results</h1>
      <ul className="booklist">
        {searchResults.map((book, index) => {
          return (
            <li className="booklist__item" key={index}>
              <Link to={`/details-and-reviews/${title}`}>
                <img
                  className="booklist__image"
                  src={book.thumbnail}
                  alt={book.title}
                />
              </Link>
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
};

export default SearchResults;
