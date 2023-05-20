import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './show.css'

const ShowCatagori = () => {
    const items = useLoaderData();
    return (
        <div className='m-5'>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='imgviwe' src={items.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{items.product_id}</h2>
                    <h2 className="card-title">{items.product_name}</h2>
                    <h2 className="card-title">{items.detail}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to='/'>
                            <button className="btn btn-primary">back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCatagori;