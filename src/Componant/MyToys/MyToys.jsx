import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const { myToy, setMyToy } = useState([])
    useEffect(()=> {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyToy(data))
    }, [user])
    console.log(myToy)
    return (
        <div>
            <div className="my-jobs-container">
                <h1 className="text-center p-4 ">ALL My Jobs</h1>
                {/* <div className="search-box p-2 text-center">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-1"
                    />{" "}
                    <button onClick={handleSearch}>Search</button>
                </div> */}
                <table striped bordered hover className="container">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>email</th>
                            <th>price</th>
                            <th>rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToy?.map((myTo, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{myTo.name}</td>
                                <td>{myTo.email}</td>
                                <td>{myTo.price}</td>
                                <td>{myTo.rating}</td>
                                <td>
                                    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Edit
                                    </Button>
                                    <UpdateJobModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        job={job}
                                        handleJobUpdate={handleJobUpdate}
                                    /> */}
                                </td>
                                <td>
                                    {" "}
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;