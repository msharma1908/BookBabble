import "./App.scss";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:title" element={<HomePage />} />
            <Route path="/search/:title" element={<SearchPage />} />
            <Route
              path="/details-and-reviews/:title"
              element={<DetailsPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
