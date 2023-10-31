import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { toggleAddress } from "../../redux/reducers/users/userSlice"
const Address = ({ title, name, id, type, onChange, onBlur, value }: any) => {
    const dispatch: AppDispatch = useDispatch()
    const [save, setSave] = useState(false)
    const { address } = useSelector((state: RootState) => state.user)
    useEffect(() => {
        if (address) {
            setSave(true)
        }
    }, [address])
    const handleSave = () => {
        setSave(false)
        dispatch(toggleAddress(false))
    }
    return (
        <div>
            <div className="relative z-0 w-full mb-6 group bg-transparent">
                <input onChange={onChange} onBlur={onBlur} value={value}
                    type={type} name={name} id={id} readOnly={save} className={`${save === true ? "cursor-no-drop bg-[#dddddd] rounded-sm pr-10 select-none" : " focus:border-blue-600"}  block py-1.5  w-full text-lg pl-2 text-gray-900 border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 dark:bg-skin-backgroundHover focus:outline-none focus:ring-0  peer`} placeholder=" " />
                <label htmlFor="Name" className={`${save === true ? "hidden " : "block"} peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
                    <span className="text-red-500 text-lg">*</span> {title} </label>
                <span onClick={handleSave} className={`${save === true ? "block" : "hidden"} text-[#361AE3]  cursor-pointer absolute top-2 right-2`}>edit</span>
            </div>
        </div>
    )
}

export default Address