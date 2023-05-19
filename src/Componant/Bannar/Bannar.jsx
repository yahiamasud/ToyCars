import img from '/public/png-transparent-error-404-404-error-thumbnail.png'
import './bannar.css'

const Bannar = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Zoom into Fun with Our Toy Cars!</h1>
                        <p className="py-6">Rev Up Your Playtime with Our Incredible Toy Cars!.Discover the Thrills of Speed with Our Amazing Toy Cars. Get Ready to Race with Our High-Powered Toy Cars.Unleash Your Inner Racer with Our Exciting Toy Cars!Experience the Joy of Driving with Our Awesome Toy Cars!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;