import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';
import { Form, Link } from 'react-router-dom';


const AddToys = () => {

    const { user } = useContext(AuthContext)
    const handlePost = (event) => {
        event.preventDefault();
        const Form = event.target;
        const email = user.email;
        const name = Form.name.value;
        const subcategory =  Form.subcategory.value
        const seller_name = Form.seller_name.value;
        const description = Form.description.value;
        const price = Form.price.value;
        const rating = Form.rating.value;
        const picture_url = Form.photo.value;
        const addItems ={email, name, description, price,rating, subcategory,seller_name,picture_url};

        fetch("https://assingment-11-serversit-yahiamasud.vercel.app/toyCar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addItems),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                Form.reset();
                alert("add ok ")
            });
            
       
    }

    return (
        <div>
            <div className=" pb-5 bg-base-200">
                <div className='Box mx-auto p-10' >
                    <h1 className='text-5xl font-bold text-center p-5'>Add ToyCar</h1>
                    <div className=" card flex-shrink-0 shadow-2xl bg-base-100">
                        <Form onSubmit={handlePost} className="card-body grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" placeholder="price" name='price' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">rating</span>
                                </label>
                                <input type="text" placeholder="rating" name='rating' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder={user.email} disabled name='email' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">subcategory</span>
                                </label>
                                <input type="text" placeholder="subcategory" name='subcategory' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">seller_name</span>
                                </label>
                                <input type="text" placeholder="seller_name" name='seller_name' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                                <input type="text" placeholder="description" name='description' className="input input-bordered" required />
                            </div>

                            <div className=" mx-auto mt-6">
                            <button className="btn btn-block">Add Toysar</button>
                            </div>
                        </Form>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToys;