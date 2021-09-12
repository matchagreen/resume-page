import { useState } from "react";

const Home = () => {

    //let name='ronald';
    const [name,setName]=useState('ronald');

    const [age,setAge]=useState(23);

    const handleClick=()=>{
        console.log('hehe');
    }

    const handleClickAgn=(name)=>{
    console.log('hello '+name);
    }

    const changeName=()=>{
        setName('Deez Nuts');
        setAge(99);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h1>{name} is {age} years old</h1>
            <button onClick={changeName}>CLICK ME!!!!</button>





            <button onClick={()=>{
                handleClickAgn('mario')
                }
                }>click me again</button>
        </div>
     );
}
 
export default Home;