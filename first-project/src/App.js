import Header from "./components/Header";
import Footer from "./components/Footer";
import OurServices from "./components/OurServicies";
import About from "./components/About";
import HelpSection from "./components/HelpSection";
import Search from "./components/Search";
import Pricing from "./components/Pricing";
import Info from "./components/Info";
import LatestNews from "./components/LatestNews";

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />

      <OurServices />

      <About />

      <HelpSection />

      <Search />

      <Pricing />

      <Info />

      <LatestNews />
      
      <Footer />

    </div>
  );
}

export default App;
