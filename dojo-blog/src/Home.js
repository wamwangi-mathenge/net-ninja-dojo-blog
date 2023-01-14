import { useState } from "react";

const Home = () => {

    // let name = "Brian";
    const [name, setName] = useState("Brian");

    const [age, setAge] = useState(25);



    const handleClick = () => {
        setName("Mathenge");
        setAge(20);
    }
   



    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;

