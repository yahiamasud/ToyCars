import React, { useEffect, useState } from 'react';
import Toys from '../toys/Toys';

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch("https://assingment-11-serversit-yahiamasud.vercel.app/toyCar")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log(toys);
    return (

        <div className=''>
            <div>
                <h1 className='text-5xl font-bold text-center
                m-5'>all ToysCar</h1>
            </div>
            <div className='grid gird-col-1 md:grid-col-2 lg:grid-cal-3 gap-6'>
                {
                    toys.map(toy =><Toys toy={toy}></Toys>)
                }
            </div>
        </div>

    );
};

export default AllToys;