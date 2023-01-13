import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // Dynamic Variable
  // const title = "Welcome to the new Blog"
  // const likes = 50;
  // const person = { name: "Brian", age: 25 }
  // const link = "www.google.com"



  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
