import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import MyTable from '../MyTable/MyTable';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])
    const [control, setControl] = useState(false)


    // data loading..............................

    const url = `https://assingment-11-serversit-yahiamasud.vercel.app/myToy?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setMyToy(data)
                setControl(!control);
            })
    }, [url, control])

    // deleted.......................
    const handleDalate = id => {
        const proceed = confirm("are you sure you want to dataled");
        if (proceed) {
            fetch(`https://assingment-11-serversit-yahiamasud.vercel.app/toyCar/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = toyCar.filter(toyCar._id !== id);
                        setMyToy(remaining);
                        setControl(!control);

                    }
                })
        }
    }
    // sort data funtion
    const ascendingEvent = () => {
        let data = [...myToy]
        if (data.length > 0) {
            let result = data.sort((a, b) => a.price.localeCompare(b.price))
            setMyToy(result)

        }
    }
    const descendingEvent = () => {
        let data = [...myToy]
        if (data.length > 0) {
            let result = data.sort((a, b) => b.price.localeCompare(a.price))
            setMyToy(result)

        }
    }



    return (
        <div className="container mx-auto p-20">
            <h1 className="text-center text-white font-bold text-5xl m-5 p-4 ">My Post toyCar </h1>
            <div className='mb-5'><button className='btn btn-primary' onClick={ascendingEvent} >ascending</button> <button onClick={descendingEvent} className='btn btn-primary'>descending</button></div>
            <table striped bordered hover className=" text-center text-white w-full">
                <thead className=''>
                    <tr className='border-b-2'  >
                        <th>#</th>
                        <th>Photo</th>
                        <th>Deatils</th>
                        <th>price</th>
                        <th>subCatogor</th>
                        <th>Rating</th>
                        <th>update</th>
                        <th>Deleted</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {myToy.map((myTo, index) => <MyTable index={index} myTo={myTo} handleDalate={handleDalate}></MyTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
