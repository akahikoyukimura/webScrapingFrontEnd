import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products(props) {

      const [products, setProducts] =useState(null);

    //   const fetchData = async () => {
    //     const res = await axios.get(`http://localhost:8080/${props.title}`)
    //                                 .then(res=>{setProducts(res.data)})
    //                                 .catch(err=>console.error(`Error : ${err}`));
    //   }

      useEffect(() => {
        axios.get(`http://localhost:8080/${props.title}`)
                                     .then(res=>{setProducts(res.data)})
                                     .catch(err=>console.error(`Error : ${err}`));
      }, [props, props.title]);
  

  return (
      <>
     
     <div class="row row row-cols-1 row-cols-md-3 g-4">

  {products&& products.map(product => 
    <div  key={product.id} className="col-lg-4 col-md-6 col-sm-2">
     <div className="card " style={{ width:"18rem" }}>
     <div className="card-img">
     <img src={product.image} className="card-img-top" alt="..."/>
     </div>
     <div className="card-body ">
       <div className="card-title-div"><h5 className="card-title">{product.title}</h5></div>
       <div><p className="card-text">{product.price}</p>
       <a href={product.url} className="btn btn-primary">Go check</a>
       </div>
     </div>
   </div>
   </div>
    )}
  
</div>
     
    {/* {products&& products.map(product => 
    <div  key={product.id} className="row">
    <div className="col-sm-6">
     <div className="card" style={{ width:"18rem" }}>
     <img src={product.image} className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">{product.title}</h5>
       <p className="card-text">{product.price}</p>
       <a href={product.url} className="btn btn-primary">Go check</a>
     </div>
   </div>
   </div>
   </div>
    )} */}

  </>
  )
}

export default Products