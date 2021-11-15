import React from 'react';
import Rating from 'react-rating';
import './Products.css';
const Product = ({service}) => {
    const {_id,img, name , description, rent, star} = service;
    return (
        <div className="services p-3 m-3 rounded-bottom">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{rent}$</h5>
            <p>{description}</p>
            <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
            <Link to={`/details/${_id}`}>
               <button className="btn btn-primary">Book Now</button>
             </Link>
             
        </div>
    );
};

export default Product;