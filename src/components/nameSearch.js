import React from 'react';
import PropTypes from "prop-types";
import '../styles/App.scss'
import '../styles/nameSearch.scss'


const NameSearch = ({firstName, setFirstName, lastName, setLastName, onSubmit, errorMessage}) => {

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);

   
   return (
     <div>

      <div className="name-fields">

      <div className="name-box">
      <input 
      className="name" 
      aria-label="Any first name"
      type="text" 
      value={firstName} 
      onChange={handleFirstNameChange} 
      placeholder="First Name"/>
      </div>

      <div className="name-box">
      <input 
      className="name"
      aria-label="Any last name" 
      type="text" 
      value={lastName} 
      onChange={handleLastNameChange}
      placeholder="Last Name"/>
      </div>

    </div>
      <div className="error-message">{errorMessage}</div>

      <button 
      aria-label="search joke using inputted name"
      className="next-button" 
      type="submit" 
      onClick={onSubmit}>
      Search
      </button>

      </div>
    );
  };

NameSearch.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default NameSearch;