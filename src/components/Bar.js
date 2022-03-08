import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';

function Bar() {

  const [title, setTitle] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(event.target.keyword.value)
  }

  
  return (
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex" onSubmit={handleSubmit}>
      <input className="form-control me-2" name="keyword" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<Products title={title}/>
</>
  );
}

export default Bar;

