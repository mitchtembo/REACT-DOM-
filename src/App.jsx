import { useEffect, useState } from "react";
import './index.css'

const App = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      
       setData(data)
    }
    getData();
    
  },[])
  return(
    <div className="joke-container">
      <h1 classsName="title">Joke Generator</h1>
      {loading ? (
        <div>
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        data ? (
          <div className="joke">
            <h2 className="joke">{data.setup}</h2>
            <h4 className="punchline">{data.punchline}</h4>
          </div>
        ) : (
          <p>No joke available</p>
        )
      )}

        <p>
          {console.log(data)}
        </p>

      
    </div>
  )
}

export default App