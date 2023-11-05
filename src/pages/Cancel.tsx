import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router-dom"
const Cancel = () => {
  return (
    <div className="bg-gray-100 dark:bg-skin-background flex justify-center items-center h-screen">
      <div className=" p-6 my-auto md:mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert">
          <strong className="font-bold">Failure!</strong>
          <span className="block sm:inline"> Payment Failed, Please try again.</span>
        </div>
        <div className="bg-red-600 w-fit m-auto rounded-full">
          <RxCross2 size={30} className="text-white font-[400] w-16 h-16 mx-auto my-6" />
        </div>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 dark:text-skin-base font-semibold text-center">
            Payment failed!
          </h3>
          <p className="text-gray-600 my-2">
            sorry for the Failed online Transation.
          </p>
          <p className="text-skin-base"> Please Try again..! </p>
          <div className="py-10 text-center">
            <Link to="/cart" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
              Go to cart
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cancel