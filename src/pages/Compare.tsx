
import { RxCross2 } from "react-icons/rx"
import { IoIosAddCircleOutline } from "react-icons/io"
import { compareProducts } from "../static/staticData"
const Compare = () => {
    return (
        <>
            <section className="m-5">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Products
                                </th>
                                {compareProducts.map((item, index) => (
                                    <th key={index} scope="col" className="px-6 py-3 relative">
                                        <img src={item.img} alt="" className="max-h-[250px]" />
                                        <div className="absolute top-2 right-2 hover:bg-[#c6c5c5] hover:shadow-lg hover:border cursor-pointer rounded-full">
                                            <RxCross2 size={25} />
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Ratings & Reviews
                                </th>
                                {compareProducts.map((item, index) => (

                                    <td key={index} className="px-6 py-4">
                                        {item.ratings} <br />
                                        825 Ratings & 51 Reviews
                                    </td>

                                ))}
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Highlights
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.highlights}
                                    </td>

                                ))}
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Delivery
                                </th>

                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.delivery}
                                    </td>

                                ))}
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Variants
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.variants}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    GENERAL FEATURES
                                </th>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    SIM Type
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        dual sim
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Network Type
                                </th>
                                <td className="px-6 py-4">
                                    5G
                                </td>
                                <td className="px-6 py-4">
                                    5G
                                </td>
                                <td className="px-6 py-4">
                                    5G
                                </td>
                                <td className="px-6 py-4">
                                    5G
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Battery Capacity

                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.battery}
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    OS
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.os}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Processor

                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        Octa Core 2.2 GHz
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    FEATURES
                                </th>

                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    RAM

                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.ram}
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CAMERA
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.camera}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Resolution
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.resolution}
                                    </td>
                                ))}

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Internal Memory
                                </th>
                                {compareProducts.map((item, index) => (
                                    <td key={index} className="px-6 py-4">
                                        {item.memory}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Battery Capacity

                                </th>
                                <td className="px-6 py-4">
                                    4500 mAh

                                </td>
                                <td className="px-6 py-4">
                                    4500 mAh

                                </td>
                                <td className="px-6 py-4">
                                    4500 mAh
                                </td>
                                <td className="px-6 py-4">
                                    4500 mAh
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    OS
                                </th>
                                <td className="px-6 py-4">
                                    Android 13
                                </td>
                                <td className="px-6 py-4">
                                    Android 13
                                </td>
                                <td className="px-6 py-4">
                                    Android 13
                                </td>
                                <td className="px-6 py-4">
                                    Android 13
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}

export default Compare