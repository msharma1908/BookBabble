import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function BookDetails(props) {
  const [bookReviews, setBookReviews] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const title = props.title;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  //prettier-ignore
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`${baseUrl}/details/${title}`);
  //         // console.log(response.data);
  //         const filteredData = response.data.filter(book => book.book_id === Number(title));
  //         setBookReviews(filteredData);
  //         // console.log("HELLLOOOOOOO",bookDetails);
  //         // console.log("HELLLOOOOOOO",filteredData)
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchData();
  //     // console.log("bookdetails:", bookDetails);
  //   }, [title]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`${baseUrl}/search/${title}`);
  //         // console.log(response.data);
  //         // const filteredData = response.data.filter((book) =>
  //         //   book.title.toLowerCase().includes(title.toLowerCase())
  //         // );
  //         const filteredData = response.data.filter(
  //           (book) => book.id === Number(title)
  //         );
  //         setBookDetails(filteredData);
  //         // console.log("travis", filteredData);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchData();
  //     // console.log("lalalal", bookDetails);
  //   }, [title]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/details-and-reviews/${title}`);
        setBookDetails(response.data.details);
        setBookReviews(response.data.reviews);
        console.log("Book Details:", response.data.details);
        console.log("Book Reviews:", response.data.reviews);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [title]);

  return (
    <div className="book-details-container">
      <div className="book-details-left">
        <div className="book-thumbnail">
          <ul className="booklist">
            {bookDetails.map((book, index) => {
              return (
                <li className="booklist__item" key={index}>
                  <div>
                    <div>
                      <img
                        className="booklist__image"
                        src={book.thumbnail}
                        alt={book.title}
                      />
                    </div>
                    <div>
                      <h3 className="booklist__title">{book.title}</h3>
                      <p className="booklist__author">{book.author}</p>
                      <p className="booklist__rating">{book.rating}</p>
                      <p className="booklist__release-date">
                        {book.releaseDate}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="book-info">
          <ul className="book_reviews">
            {bookReviews.map((book, index) => {
              return (
                <li className="book_reviews__item" key={index}>
                  <div>
                    <p className="book_reviews__review">{book.review}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
