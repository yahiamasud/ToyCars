import img from '/public/nobiur-rahman-gvHboWKFWzI-unsplash.jpg'
import './bannar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Bannar = () => {
    return (
        <div  className='border-b divide-black m-5' >
            <div className="hero  bg-base-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src={img} data-aos="flip-left" data-aos-duration="2000" className=" md:w-1/2 sm:w-full md:p-8  rounded-lg shadow-2xl" />
                    <div className=' 'data-aos="flip-left" data-aos-duration="2000">
                        <h1 className="text-5xl text-white font-bold">Zoom into Fun with Our Toy Cars!</h1>
                        <p className="py-6 text-white">Rev Up Your Playtime with Our Incredible Toy Cars!.Discover the Thrills of Speed with Our Amazing Toy Cars. Get Ready to Race with Our High-Powered Toy Cars.Unleash Your Inner Racer with Our Exciting Toy Cars!Experience the Joy of Driving with Our Awesome Toy Cars!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;