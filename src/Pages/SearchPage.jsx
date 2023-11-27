import React from "react";
import Header from "../Components/Header/Header";
import SearchResults from "../Components/SearchResults/SearchResults";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { title } = useParams();

  return (
    <div>
      <Header />
      <SearchResults title={title} />
      <Footer />
    </div>
  );
}

export default SearchPage;
