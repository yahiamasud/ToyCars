import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import MyTable from '../MyTable/MyTable';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])
    const [control, setControl]= useState(false)


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
    }, [url,control])
    
// deleted.......................
    const handleDalate = id =>{
        const proceed = confirm("are you sure you want to dataled");
        if(proceed){
            fetch(`https://assingment-11-serversit-yahiamasud.vercel.app/toyCar/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then((data) =>{
                if (data.deletedCount > 0){
                    const remaining = toyCar.filter(toyCar._id !== id);
                    setMyToy(remaining);
                    setControl(!control);
                    
                }
            })
        }
    }

    return (
        <div className="container mx-auto p-20">
            <h1 className="text-center text-white font-bold text-5xl m-5 p-4 ">My Post toyCar </h1>
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
                    {myToy?.map((myTo , index )=><MyTable index={index} myTo={myTo}  handleDalate = {handleDalate}></MyTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
