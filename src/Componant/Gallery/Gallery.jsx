import img from '/public/png-transparent-error-404-404-error-thumbnail.png'
const Gallery = () => {
    return (
        <div className='m-5'>
            <h1 className='text-5xl font-bold text-center m-9'>Toy Carall</h1>
            <div className='flex gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src={img} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src={img} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src={img} alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src={img} alt="Shoes" /></figure>
                </div>
            </div>
        </div>

    );
};

export default Gallery;