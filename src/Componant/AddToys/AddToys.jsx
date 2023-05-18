import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';


const AddToys = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
    

        fetch(" ", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data);



    }


    return (
        <div className='bg-yellow-200 p-10'>
            <form className='grid gird-col-1 md:grid-col-3 lg:grid-cal-3 gap-6 ' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex '>
                    <label className='font-bold p-5'>Name</label>
                    <input className='w-full  rounded' defaultValue="" {...register("Name")} />
                    <label className='font-bold p-5'>items</label>
                    <input className='w-full  rounded' defaultValue="" {...register("items")} />
                </div>
                <div className='flex'>
                    <label className='font-bold p-5'>Gmail</label>
                    <input className='w-full rounded' disabled defaultValue={user.email} {...register("email")} />
                    <label className='font-bold p-5'>photo</label>
                    <input className='w-full rounded' defaultValue="" {...register("photoURL")} />
                </div>
                <div className='flex'>
                    <label className='font-bold p-5'>Detail </label>
                    <input className='w-full  rounded' defaultValue="" {...register("Detaildescription")} />
                    <label className='font-bold p-5'>Price</label>
                    <input className='w-full rounded' defaultValue="" {...register("Price")} />
                </div>
                <div className='flex'>
                    <label className='font-bold p-5'>Rating</label>
                    <input className='w-full rounded' defaultValue="" {...register("Rating")} />
                    <label className='font-bold p-5'>Available Quantity</label>
                    <input className='w-full  rounded' defaultValue="" {...register("AvailableQuantity")} />
                </div>
                <div className='flex w-1/2'>
                    <label className='font-bold p-5'>seller name</label>
                    <input className='w-full rounded' defaultValue="" {...register("sellername")} />
                </div>
                <input className='btn text-center mx-auto' type="submit" />
            </form>
        </div>
    );
};

export default AddToys;