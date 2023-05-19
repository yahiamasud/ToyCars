import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Allshow.css'
const AllShow = () => {
    const items = useLoaderData();
    const { name, picture_url,seller_name,email,subcategory } = items;
    console.log(name);
    return (
        <div className='m-5 rounded'>
            <div className="card  bg-base-100 shadow-xl">
                <img className='imgshow' src={picture_url} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">Name of Prodact:-{name}</h2>
                    <p>Name of Seller:-{seller_name}</p>
                    <p>Seller Gmail:-{email}</p>
                    <p>SubcateGory{subcategory}</p>
                    <div className="card-actions justify-end">
                        <Link to={"/AllToys"}>
                        <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllShow;