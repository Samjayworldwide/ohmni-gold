import "./App.css";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Callout from "./components/Callout";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import BoardOfDirectors from "./components/BoardOfDirectors";

function App() {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <BoardOfDirectors />
      <ContactUs />
      <Callout />
    </>
  );
}

export default App;
