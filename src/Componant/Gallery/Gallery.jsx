import { useEffect, useState } from "react";
import './Galler.css'

const Gallery = () => {
    
    const [Photos, setPhotos] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/Gallary')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPhotos(data);
            })
    }, [])
    
    return (
        <div>
            <h1 className="font-bold text-5xl text-center m-10">Toy-Car </h1>
            <div className="grid grid-cols-1 gap-3 m-5  md:grid-cols-4">
                {
                    Photos.map( Photo =><img className="imgPhoto " src={Photo.Photo} alt=""/>)
                }
            </div>

        </div>

    );
};

export default Gallery;