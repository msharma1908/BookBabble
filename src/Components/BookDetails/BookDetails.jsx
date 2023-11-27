import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../BookDetails/BookDetails.scss";
import fourStar from "../../Assets/Icons/4star.png";
function BookDetails(props) {
  const [bookReviews, setBookReviews] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const title = props.title;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/details-and-reviews/${title}`
        );
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
    <>
      <div className="book-details-container">
        <div className="book-details-left">
          {bookDetails.map((book, index) => (
            <div className="book-thumbnail" key={index}>
              <img
                className="book-thumbnail"
                src={book.thumbnail}
                alt={book.title}
              />
            </div>
          ))}
        </div>

        <div className="book-details-right">
          {bookDetails.map((book, index) => (
            <div className="book-details" key={index}>
              <h3 className="booklist__title">{book.title}</h3>
              <p className="booklist__author">{book.author}</p>
              <p className="booklist__rating">{book.rating}</p>
              <p className="booklist__release-date">{book.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="book-reviews">
          <h2>Reviews</h2>
          <ul className="book_reviews">
            {bookReviews.map((book, index) => (
              <li className="book_reviews__item" key={index}>
                <div>
                  <img className="stars" src={fourStar} alt="star rating" />
                </div>
                <div>
                  <p className="book_reviews__review">"{book.review}"</p>
                </div>
                <span className="book_reviews-user">- By Anonymous</span>
              </li>
            ))}
          </ul>
          <div className="form">
            <input
              className="form__input"
              type="text"
              placeholder="Write a review..."
              name="review"
            ></input>
            <button className="form__btn" type="submit">
              Add a Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
  //     <div className="book-details-container">
  //       <div className="book-details-left">
  //         <div className="book-thumbnail">
  //           <ul className="book-details-container">
  //             {bookDetails.map((book, index) => {
  //               return (
  //                 <li className="book-details-left" key={index}>
  //                   <div>
  //                     <div>
  //                       <img
  //                         className="book-thumbnail"
  //                         src={book.thumbnail}
  //                         alt={book.title}
  //                       />
  //                     </div>
  //                     <div>
  //                       <h3 className="booklist__title">{book.title}</h3>
  //                       <p className="booklist__author">{book.author}</p>
  //                       <p className="booklist__rating">{book.rating}</p>
  //                       <p className="booklist__release-date">
  //                         {book.releaseDate}
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         </div>

  //         <div className="book-info">
  //           <ul className="book_reviews">
  //             {bookReviews.map((book, index) => {
  //               return (
  //                 <li className="book_reviews__item" key={index}>
  //                   <div>
  //                     <p className="book_reviews__review">{book.review}</p>
  //                   </div>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default BookDetails;
