import { useEffect, useState } from "react";
import "./new.css"

const News = () => {
    const [Photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://assingment-11-serversit.vercel.app/newsAdd')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPhotos(data);
            })
    }, [])
    return (
        <div className=" border-b divide-black pb-12 m-5">
           <div className="text-center m-10">
           <h1 className="text-5xl text-white font-bold">Join us</h1>
            <p className="text-2xl  text-white font-bold">Those who work with us</p>
           </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3" >
                {
                    Photos.map(Photo => <img className="imgPhot " src={Photo.
                        picture_url} alt="" />)
                }
            </div>
        </div>
    );
};

export default News;