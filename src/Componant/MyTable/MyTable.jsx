import { Form, Link } from "react-router-dom";
import "./MyTable.css"
import { useState } from "react";

const MyTable = ({ myTo, handleDalate, index }) => {

    const [control, setControl]= useState(false)
    const { picture_url, name, subcategory, description, email, price, rating, _id } = myTo;

    const handleUpdate = (event) => {
        event.preventDefault();
        const Form = event.target;
        const { _id } = myTo;
        const subcategory = Form.subcategory.value;
        const description = Form.description.value;
        const price = Form.price.value;
        const addItems = { description, price, subcategory, _id };
        console.log(addItems);
        fetch(`https://assingment-11-serversit-yahiamasud.vercel.app/toyCar/${addItems?._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addItems),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    alert("update done thanks you !!!!")
                    setControl(!control);
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img className="imgitemsshow" src={picture_url} alt="" /></td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{subcategory}</td>
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
                                        <Form onSubmit={handleUpdate} className="bg-sky-500 p-5">
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
                                            <div className="modal-action">
                                                <button type="submit" className="btn btn-primary"><div className="">
                                                    <label htmlFor="my-modal-5" className="btn">Update</label>
                                                </div></button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
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