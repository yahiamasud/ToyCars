

const Toys = ({ toy }) => {
    const { _id, picture_url, name, seller_name, email, price, subcategory } = toy
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/ShowDatials/${_id}`}>
                            <button className="btn btn-primary">Show detele</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;