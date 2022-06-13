import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Info/>
      <Newsletter/>
      <Cards/>
    </div>
  );
}

export default App;
