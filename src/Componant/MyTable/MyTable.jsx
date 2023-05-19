import { Link } from "react-router-dom";
import "./MyTable.css"

const MyTable = ({myTo, handleDalate, index}) => {
    const {picture_url,name, email, price, rating,_id}=myTo;
    return (
            <tr>
                <td>{index +1 }</td>
                <td><img className="imgitemsshow" src={picture_url} alt=""/></td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>
                    <Link to={''}>
                        <button className='btn m-2 btn-primary'>update</button>
                    </Link>
                </td>
                <td className=' '>

                    <Link to={''}>
                        <button onClick={() => handleDalate(_id)} className='btn btn-primary'>Delete</button>
                    </Link>
                </td>
            </tr>
    );
};

export default MyTable;