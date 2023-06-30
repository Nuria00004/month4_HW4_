import './App.css';
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [food, setFood] = useState([])
    const sentRequest = async ()=>{
        const info = await axios({
            method:'GET',
            url: 'https://6491b1fe2f2c7ee6c2c8bc10.mockapi.io/Food'
        })
        setFood(info.data)
    }
    useEffect(()=>{
    sentRequest()
    },[])
    console.log(food)
  return (
    <div>
      <Main/>
        {food.map((cakes)=>{
            return(
                <div key={cakes.id}>
                    {cakes.title}
                </div>
            )
        })}
    </div>
  );
}

export default App;
