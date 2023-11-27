import "./App.scss";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  // const [bookResults, setBookResults] = useState([]);
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // const { title } = useParams();

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:title" element={<HomePage />} />
            <Route path="/search/:title" element={<SearchPage />} />
            <Route path="/details/:title" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;

// function handleBookResults(results) {
//   setBookResults(results);
// console.log("does this work?", bookResults.items);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
//       );
//       console.log("helloooo", response.data);
//       setBookResults(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();
// }, [searchTerm]);

// if (bookResults.items) {
//   bookResults.items.map((item) => console.log(item.id));
// }
