import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookList.scss";
import { useNavigate } from "react-router-dom";

function BookList(props) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [bookResults, setBookResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        setBookResults(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/details-and-reviews/${bookId}`);
  };

  return (
    <div>
      <h2 className="header">Trending Now</h2>
      <ul className="booklist">
        {bookResults.map((book, index) => {
          return (
            <li
              onClick={() => handleBookClick(book.id)}
              className="booklist__item"
              key={index}
            >
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
