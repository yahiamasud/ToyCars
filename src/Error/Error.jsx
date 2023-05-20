
import { useRouteError } from "react-router-dom";
import photo from "../../public/png-transparent-error-404-404-error-thumbnail.png";
const Error = () => {
    const error = useRouteError();
    return (
        <div className="bg-rad-200 text-white text-center">
            <div className="m-5 p-6" >
                <img className="text-center w-50 mx-auto" src={photo} alt="" />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;