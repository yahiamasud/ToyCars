import { Form, Link } from "react-router-dom";
import "./MyTable.css"


const MyTable = ({ myTo, handleDalate, handleUpdate, index }) => {
    const { picture_url, name,subcategory,description, email, price, rating, _id } = myTo;

 const data = {_id};
    // event.preventDefault();
    // const Form = event.target;
    // const subcategory =  Form.subcategory.value
    // const description = Form.description.value;
    // const price = Form.price.value;
   
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img className="imgitemsshow" src={picture_url} alt="" /></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>
                <label htmlFor="my-modal-5" className="btn btn-primary">Eidet</label>
            
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div>
                            <div className=" pb-5 ">
                                <div className='Box mx-auto ' >
                                    <h1 className='text-5xl font-bold bg-slate-700  text-center p-2'>UpDate Toy</h1>
                                    <div className=" card flex-shrink-0 shadow-2xl bg-base-100">
                                        <Form className="bg-sky-500 p-5">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">price</span>
                                                </label>
                                                <input type="text" defaultValue={price} placeholder="price" name='price' className="input text-black  input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">subcategory</span>
                                                </label>
                                                <input type="text" defaultValue={subcategory} placeholder="subcategory" name='subcategory' className="input text-black  input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Datais description</span>
                                                </label>
                                                <input type="text" defaultValue={description} placeholder=" Datais description" name='description' className="input text-black input-bordered" required />
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5"  onSubmit={()=>handleUpdate(data)} className="btn btn-primary">Update</label>
                        </div>
                    </div>
                </div>

            </td>
            <td className=' '>
                <button onClick={() => handleDalate(_id)} className='btn btn-primary '>Delete</button>
            </td>
        </tr>
    );
};

export default MyTable;