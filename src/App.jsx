import NavBar from "./ui/NavBar";
import Home from "./ui/Home";
import Explore from "./ui/Explore";
import Reviews from "./ui/Reviews";
import Steps from "./ui/Steps";
import Cta from "./ui/Cta";
import HorizontalScroll from "./ui/HorizontalScroll";
import Faq from "./ui/Faq";
import Strips from "./ui/Strips";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className="bg-white px-3 lg:p-5">
      <NavBar />
      <Home />
      <Strips />
      <Explore />
      <Reviews />
      <Steps />
      <Cta />
      <HorizontalScroll />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
