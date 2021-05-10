import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NameSearch from './nameSearch';
import '../styles/App.scss';

function App() {
  const [joke, setJoke] = useState('');
  const [categories, setCategories] = useState('');
  const [firstName, setFirstName] = useState('Chuck');
  const [lastName, setLastName] = useState('Norris');
  const [errorMessage, setErrorMessage] = useState('');
  
  const explicitEndpoint = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    
    const getJoke = () => {
      axios
      .get(explicitEndpoint)
      .then((response) => {
        console.log(response);
        setJoke(response.data.value.joke);
        setCategories(response.data.value.categories);
      })
    }
    
    useEffect(() => {
      getJoke(setJoke, setCategories, setFirstName, setLastName)
    }, []);
    
    const handleChangeName = (e) => {
      e.preventDefault();
      if(firstName === '' || lastName === '') {
        console.log("Error")
        setErrorMessage("Please input both fields")
      } else {
      getJoke();
      setErrorMessage("");
      }
    };

  return (
    <div className="app-container">
     <h1 className="title">CHUCK NORRIS 101</h1>
     <h3 className="subheading">100% CERTIFIED TRUE FACTS</h3>
     <div>
       <NameSearch
       firstName={firstName}
       setFirstName={setFirstName}
       lastName={lastName}
       setLastName={setLastName}
       onSubmit={handleChangeName}
       errorMessage={errorMessage}
       />
     </div>
     <div>
     <div className="tag">
  {categories.length > 0 ? categories.toString().toUpperCase() : "CLEAN" } 
    </div>
     </div>
     <p className="quote" dangerouslySetInnerHTML={{__html: joke}} />
     <button 
     aria-label="generate new random joke"
     className="next-button" 
     onClick={getJoke}>Get new joke
     </button>
     </div>
  );
}


export default App;
