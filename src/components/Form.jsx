import {useState, useEffect} from "react";

export default function Form(props){

  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.movieSearch(formData.searchTerm)
  }
    // The component must return some JSX
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text"
          name="searchTerm"
          onChange={handleChange} 
          value={formData.searchTerm}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  };