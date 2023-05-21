import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Alltoy.css'


const AllToys = () => {

    const [Toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log(searchText);

    useEffect(() => {
        fetch("https://assingment-11-serversit-yahiamasud.vercel.app/toyCar")
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    // search funtion ..............

    const handleSearch = () => {
        fetch(`https://assingment-11-serversit-yahiamasud.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                setToys(data)
            }) 
    }
    return (

        <div className=' text-center m-5'>
            <h1 className='text-5xl font-bold text-white text-center m-5'>all ToysCar</h1>
            <div className=''>
                <input className='p-2 rounded outline mx-2' onChange={(e) => setSearchText(e.target.value)} placeholder='Only toyName' type='text' /><button onClick={handleSearch} className='p-1   btn btn-primary' >Search</button>
            </div>
            <div className='grid text-white gird-cols-1 '>
                <table striped bordered hover className="text-center m-7 mx-auto gap-10 container ">
                    <thead className='text-center w-full mx-auto container' >
                        <tr className='border-b-2 '>
                            <th>#</th>
                            <th>Photo</th>
                            <th>ToyCar name</th>
                            <th>email</th>
                            <th>price</th>
                            <th>rating</th>
                        </tr>
                    </thead>
                    <tbody className='text-center w-full mx-auto container'>
                        {Toys?.map((myTo, index) => (
                            <tr className='m-25 p-25'>
                                <td>{index + 1}</td>
                                <td><img className='imgall ' src={myTo.picture_url} alt="" /></td>
                                <td>{myTo.name}</td>
                                <td>{myTo.email}</td>
                                <td>{myTo.price}</td>
                                <td>{myTo.rating}</td>
                                <td>
                                    <Link to={`/AllShow/${myTo._id}`}>
                                        <button className="btn btn-primary">Show detele</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className=" btn-group">
                <button className="btn btn-primary">«</button>
                <button className="btn btn-primary">Page 20</button>
                <button className="btn btn-primary">»</button>
            </div>
        </div>

    );
};

export default AllToys;