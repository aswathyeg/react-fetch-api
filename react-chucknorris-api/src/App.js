
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  useEffect(()=>{

axios.get('https://api.chucknorris.io/jokes/random')
  },[])
  return (
   <div className="container">
     <div className="row">
       <div className="col-6">
         <h1 className="title">
           Search a Joke 
         </h1>

       </div>
       <div className="col-6searchJokeCol">
         <div className="card">
           <div className="card-header">
           Search for a word
               </div>
<div className="card-body">
  <input type="text"></input>

</div>
         </div>
         <button className="btn btn-warning btn-lg">Generate Joke</button>
         
       </div>
     </div>
     <h2 className="subtitle">
Here is the joke
     </h2>
     <h4 >
Hi this is the joke
     </h4>
     
   </div>
  );
}

export default App;
