import { useEffect, useState } from "react";
import './Galler.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    const [Photos, setPhotos] = useState([]);
    useEffect(() =>{
        fetch('https://assingment-11-serversit.vercel.app/Gallary')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPhotos(data);
            })
    }, [])
    
    return (
        <div className="border-b divide-black m-5 pb-6" data-aos="flip-left" >
            <h1  className="font-bold text-5xl text-center text-white m-10">Toy-Car </h1>
            <div className="grid grid-cols-1 gap-3 m-5  md:grid-cols-4">
                {
                    Photos.map( Photo =><img  data-aos="fade-up" data-aos-duration="1000"  className="imgPhoto " src={Photo.Photo} alt=""/>)
                }
            </div>

        </div>

    );
};

export default Gallery;