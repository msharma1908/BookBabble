import Header from "../Components/Header/Header";
import BookList from "../Components/BookList/BookList";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  const { title } = useParams();
  return (
    <div>
      <Header title={title} />
      <BookList />
      <Footer />
    </div>
  );
}

export default HomePage;
