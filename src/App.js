import Navbar from './Navbar';
import { Banner } from './Banner';
import { Listings } from './Listings';
function App() {
  return (
    <div className="App bg-primary">
      <Navbar />
      <Banner />
      <Listings/>
    </div>
  );
}

export default App;
