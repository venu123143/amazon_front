import { RxCross2 } from "react-icons/rx"
import { BiErrorAlt } from "react-icons/bi"
const DeleteModal = ({ openModal, modal }: any) => {
    return (
        <div>
            <div id="popup-modal" tabIndex={-1} className={`absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  z-50 transition-all ease-in ${modal === true ? "scale-100 duration-200" : "scale-0 duration-200"}  p-4 overflow-x-hidden overflow-y-auto  `}>
                <div className=" w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={() => openModal(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <RxCross2 className="" size={20} />
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <BiErrorAlt className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button type="button" onClick={() => openModal(false)} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={()=>openModal(false)} className={`${modal === true ? "block delay-75" : "hidden"} transition-all ease-in absolute top-0 left-0 z-40 bg-black opacity-50 w-full h-screen`}>
            </div>
        </div>
    )
}

export default DeleteModal