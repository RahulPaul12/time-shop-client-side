import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';


import './Products.css';
const Products = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(result => result.json())
            .then(data => setservices(data));
    }, [])
    return (
        <div>
            <h1 className="text-center mt-3"><span>Products</span></h1>
             <h2 className="men">For Men</h2>
            
           <div className="service">
               {
                   services.map(service => <Service
                       key={service.id}
                       service={service}
                   ></Service>)
               }
           </div>
            
            <h2 className="men">For Women</h2>
            
           <div className="service">
               {
                   services.map(service => <Service
                       key={service.id}
                       service={service}
                   ></Service>)
               }
           </div>

        </div>
    );
};

export default Products;