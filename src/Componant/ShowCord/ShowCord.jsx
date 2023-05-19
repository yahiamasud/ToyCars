import React from 'react';
import { Link, useLoaderData } from "react-router-dom"

const ShowCord = () => {
    const  oneTimes = useLoaderData();
    const  {picture_url,name}= oneTimes;
    console.log(name)
    console.log(oneTimes)

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture_url}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{}</p>
                    <div className="card-actions justify-end">
                       <Link to='/AllToys'> <button className="btn btn-primary">Back </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCord;