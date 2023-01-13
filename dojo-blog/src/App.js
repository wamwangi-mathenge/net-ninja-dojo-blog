import './App.css';

function App() {
  // Dynamic Variable
  const title = "Welcome to the new Blog"
  const likes = 50;
  // const person = { name: "Brian", age: 25 }
  const link = "www.google.com"



  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        
        <p>{ "Hello Ninjas" }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google</a>
      </div>
    </div>
  );
}

export default App;
