import NavBar from "./ui/NavBar";
import Home from "./ui/Home";
import Explore from "./ui/Explore";
import Reviews from "./ui/Reviews";
import Steps from "./ui/Steps";
import Cta from "./ui/Cta";
import HorizontalScroll from "./ui/HorizontalScroll";
import Faq from "./ui/Faq";

function App() {
  return (
    <div className="bg-white px-3 lg:p-5">
      <NavBar />
      <Home />
      <Explore />
      <Reviews />
      <Steps />
      <Cta />
      <HorizontalScroll />
      <Faq />
    </div>
  );
}

export default App;
