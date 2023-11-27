import React from "react";
import Header from "../Components/Header/Header";
import BookDetails from "../Components/BookDetails/BookDetails";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { title } = useParams();

  return (
    <div>
      <Header />
      <BookDetails title={title} />
      <Footer />
    </div>
  );
}

export default DetailsPage;
