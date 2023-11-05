import { Link } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs"
const Sucess = () => {
  return (
    <>

      <div className="bg-gray-100 dark:bg-skin-background flex justify-center items-center h-screen">

        <div className=" p-6 my-auto md:mx-auto">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline "> Payment done successfully.</span>
          </div>
          <div>
            <BsFillPatchCheckFill size={30} className="text-green-600 w-16 h-16 mx-auto my-6" />
          </div>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 dark:text-skin-base font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p className="text-skin-base"> Have a great day! </p>
            <div className="py-10 text-center">
              <Link to="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Sucess;
