
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


export default function App() {
  const [state,setState]=useState({
    joke:'',
    searchword:'',
    searchUrl:'https://api.chucknorris.io/jokes/search?query='
  })
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [])

  const fetchData = async () => {
  const result=  await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    setState({
      ...state,
      joke:result.data.value,
      
    
    })

  }
  const searchWord=(e)=>{
    console.log(e.target.value)
    setState({
      ...state,
      searchword:e.target.value
    })

  }

  const generateJoke=async()=>{
    const result=await axios.get(state.searchUrl+state.searchword)
    console.log(result.data.result)
    const jokeIndex=Math.floor(Math.random()*result.data.result.length);
    setState({
      ...state,
      joke:result.data.result[jokeIndex].value
    })
  }
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
              <input type="text" onChange={searchWord}></input>

            </div>
          </div>
          <button className="btn btn-warning btn-lg" onClick={generateJoke}>Generate Joke</button>

        </div>
      </div>
      <h2 className="subtitle">
        Here is the joke
      </h2>
      <h4 >
       {state.joke}
      </h4>
      <h4 >
       {state.searchword}
      </h4>

    </div>
  );
}


