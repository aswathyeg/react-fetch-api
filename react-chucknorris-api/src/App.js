
import './App.css';

function App() {
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
             <input class="searchOption" type="text"/>

             <span>Search</span>
           </div>

         </div>
         
       </div>
     </div>
     
   </div>
  );
}

export default App;
