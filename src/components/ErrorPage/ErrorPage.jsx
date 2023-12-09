import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className="w-80 mx-auto mt-48   text-center">
        <h2 className="text-3xl text-yellow-500 font-serif font-bold mb-4">Oops !!!</h2>
        <Link className="btn btn-outline " to="/">
          Go to Home
        </Link>
      </div>
    );
};

export default ErrorPage;