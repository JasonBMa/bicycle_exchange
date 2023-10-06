import Navbar from './Navbar';
import { Banner } from './Banner';
import { Listings } from './Listings';
function App() {
  return (
    <div className="App bg-green-500 shadow-inner shadow-green-600 w-full h-screen">
      <Navbar />
      <Banner />
      <Listings/>
    </div>
  );
}

export default App;
