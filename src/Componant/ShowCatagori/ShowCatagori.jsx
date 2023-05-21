import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './show.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowCatagori = () => {
    const items = useLoaderData();
    return (
        <div className='m-5' data-aos="flip-up" >
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='imgviwe' src={items.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Prodact:- {items.product_id}</h2>
                    <h2 className="card-title">Prodact Price:- {items.price}</h2>
                    <h2 className="card-title">Prodact Name:- {items.product_name}</h2>
                    <h2 className="card-title">Rating: <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></h2>
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