import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-blue-500 h-screen flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Welcome to our Landing Page
        </div>
        <div className="mt-4">
          <p className="text-xl">
            We're here to showcase the power of Tailwind CSS in React.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="#"
            className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-500 hover:text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
