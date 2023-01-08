import Navbar from "./components/navbar";
import Carousel from "./components/carousel/Carousel";
import Shops from "./components/Shops";
import Restaurants from "./components/Restaurants";
import { carousel } from './carousel1'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Carousel carousel={carousel} />
        <Shops />
        <Restaurants />
      </div>

    </div>
  );
}

export default App;
