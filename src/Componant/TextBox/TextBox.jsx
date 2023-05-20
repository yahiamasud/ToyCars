
const TextBox = () => {
    return (

        <div className="mx-auto mb-5">
            <h1 className="text-5xl font-bold text-center text-white p-10 m-5   border-t mb-10 ">Shop Car Markat Contact</h1>
            <div className="mx-auto p-5 grid grid-cols-1 md:grid-cols-3  justify-items-center gap-3">
                        
                <div><div className="card sm:w-full bg-base-100 shadow-xl">
                    <h1 className="text-3xl font-bold text-center mt-5">ToyCarMarket</h1>
                    <div className="card-body">
                        <h2 className="card-title">
                        John Doe
                            <div className="badge badge-secondary">Shop A</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline p-4">john.doe@example.com</div>
                            <div className="badge badge-outline p-4">+1 123-456-7890</div>
                        </div>
                    </div>
                </div></div>
                <div><div className="card sm:w-full bg-base-100 shadow-xl">
                <h1 className="text-3xl font-bold text-center mt-5">NewMarket</h1>
                    <div className="card-body">
                        <h2 className="card-title">
                        Jane Smith
                            <div className="badge badge-secondary">Shop B</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline p-4">jane.smith@example.com</div>
                            <div className="badge badge-outline p-4">+1 987-654-3210</div>
                        </div>
                    </div>
                </div></div>
                <div><div className="card sm:w-full bg-base-100 shadow-xl">
                <h1 className="text-3xl font-bold text-center mt-5">CarReceMarket</h1>
                    <div className="card-body">
                        <h2 className="card-title">
                        Mark Johnson
                            <div className="badge badge-secondary">Shop C</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline p-4">mark.johnson@example.com </div>
                            <div className="badge badge-outline p-4">+1 555-123-4567</div>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>

    );
};

export default TextBox;