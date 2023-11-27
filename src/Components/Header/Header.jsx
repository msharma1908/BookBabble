import React from "react";
import "./Header.scss";
import logo from "../../Assets/book-logo.jpg";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  const [title, setTitle] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${baseUrl}/search/${title}`);
      console.log(response.data);

      navigate(`/search/${title}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__link">
        <img className="nav__logo" src={logo} alt="logo" />
      </Link>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="nav__search"
          type="text"
          name="searchValue"
          placeholder="Search"
        />
        <button type="submit" className="nav__button">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Header;
