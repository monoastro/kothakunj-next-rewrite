import Header from "./Header";
import Hero from "./Hero";
import Featured from "./Featured";
import Footer from "./Footer";
import Team from "./Team";
import Contact from "./Contact";
import WhyUs from "./WhyUs";
import ProfileCard from "./ProfileCard";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import PropertyForm from "./PropertyForm";

import "../App.css";

import Rajesh_image from "../Images/Profile/RajeshHamal.jpeg";

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Footer />
    </div>
  );
}

export default LandingPage;