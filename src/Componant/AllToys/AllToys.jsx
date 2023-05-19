import React, { useEffect, useState } from 'react';
import Toys from '../Toyse/Toyse';
import Toyse from '../Toyse/Toyse';

const AllToys = () => {
    const [Toys, setToys] = useState([])
    useEffect(() => {
        fetch("https://assingment-11-serversit-yahiamasud.vercel.app/toyCar")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log(Toys);
    return (

        <div className=''>
            <div>
                <h1 className='text-5xl font-bold text-center
                m-5'>all ToysCar</h1>
            </div>
            <div className=''>
                <div className='grid gird-cols-1 md:grid-cols-3 lg:grid-cals-4 gap-6'>
                    {
                        Toys.map(toy => <Toyse toy={toy}></Toyse>)
                    }
                </div>
            </div>
        </div>

    );
};

export default AllToys;