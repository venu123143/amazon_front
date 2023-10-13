import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// react icons
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai"
import { LiaTimesSolid } from "react-icons/lia"
import { BsSearch } from "react-icons/bs"
import { IoMdArrowDropdown, IoMdKeypad } from "react-icons/io"
import { PiDotsThreeVerticalBold } from "react-icons/pi"

// images
import Logo from "../../assets/icons/vgold.png"
import Compare from "../../assets/images/compare.svg"
import Wishlist from "../../assets/images/wishlist.svg"
import User from "../../assets/images/user.svg"
import Cart from "../../assets/images/cart.svg"
import { toggleScroll } from "../../redux/reducers/userReducer"

const Navbar = () => {

  const { screen } = useSelector((state: any) => state.functions)
  const dispatch = useDispatch()

  const [active, setActive] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [categories, setCategories] = useState(false)
  const [login, setLogin] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      setActive(true)
      setDropdown(false)
    } else {
      setActive(false)
      setLogin(false)
    }
  })

  const category = () => {
    setCategories(!categories)
    setDropdown(false)
  }
  const options = () => {
    setDropdown(!dropdown)
    setCategories(false)
  }

  const screenFuncTrue = () => {
    dispatch(toggleScroll(false))
  }
  const screenFuncFalse = () => {
    dispatch(toggleScroll(true))
  }
  // console.log(screen);

  return (
    <>
      <div className={`sm:static`}>
        <header className="header-top-strip py-3 hidden sm:block">
          <div className="w-full">
            <div className="flex justify-around">
              <div>
                <p className="text-white mb-0">Free shipping Over $100 & Free Returns</p>
              </div>
              <div>
                <p className="text-end text-white">Hotline: <a className="text-white" href="tel:+91 8008952100">+91 8008952100</a></p>
              </div>
            </div>
          </div>
        </header>

        <header className={`${active === true ? "shadow-sm fixed top-0 left-0 w-full z-10 transition-all ease-in-out " : null} w-full header-upper py-3`}>
          <div className="h-[100%] flex justify-between items-center">
            {screen ? <LiaTimesSolid onClick={screenFuncTrue} className="text-white ml-4 text-[3rem] first-letter:block sm:hidden" /> :
              <AiOutlineMenu onClick={screenFuncFalse} className="text-white ml-4 text-[3rem] first-letter:block sm:hidden" />
            }

            <div className="logo sm:w-1/6 w-5/12 text-center">
              <h1>
                <Link to="/" className="text-white"><img src={Logo} className="bg-transparent" width="100" alt="logo" /></Link>
              </h1>
            </div>
            <div className="search sm:w-5/12 max-w-full">
              <form>
                <div className="relative hidden sm:flex">
                  <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 hidden z-10 md:flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-l-lg hover:bg-gray-200  focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button" onClick={category}> All categories <IoMdArrowDropdown size={22} /> </button>
                  {categories &&
                    (
                      <div className="absolute left-0 top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                        <div className="py-1" role="none">
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-0">Mobiles</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-1">Laptops</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-2">Cameras</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-3">Cloths</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-4">Tablets</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-5">Accessories</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-6">Washing Machines</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-7">Air Coinditioner</Link>
                          <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-8">Headsets</Link>
                          <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-3">Sign out</button>
                          </form>
                        </div>
                      </div>
                    )
                  }
                  <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block outline-none border-none p-2.5  w-full z-20 text-md md:rounded-l-none rounded-lg rounded-r-lg"
                      placeholder="Search for cloths, electronics Phones etc..." required />
                    <button type="submit" className="group bg-[#febd69] absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white rounded-r-lg">
                      <BsSearch size={22} />
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className=' w-full links sm:w-5/12 max-w-4xl'>
              <div className="header-upper-links w-full flex items-center justify-around ">
                <div className="group bg-transparent">
                  <Link to="/compare" className="flex items-center text-white">
                    <img src={Compare} alt="compare" className="ml-[5px] transition-all transform group-hover:rotate-180 duration-500 ease-in-out" />
                    <p className="mb-0 text-[.91rem] hidden lg:block">compare <br />Products</p>
                  </Link>
                </div>
                <div className="group bg-transparent">
                  <Link to="/wishlist" className="flex items-center  text-white">
                    <img src={Wishlist} alt="wishlist" className="ml-[5px] transition-all transform group-hover:-scale-x-100 duration-500 ease-in-out" />
                    <p className="mb-0 text-[.91rem] hidden lg:block">favourite <br />wishlist</p>
                  </Link>
                </div>
                <div className="group bg-transparent" >
                  {login ? (
                    <>
                      <Link to="/logout" className="flex items-center text-white">
                        <AiOutlineLogout size={35} className="transition-all transform group-hover:-scale-x-100 duration-500 ease-in-out" />
                        <p className="mb-0 text-[.91rem] hidden lg:block">logout</p>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="flex items-center text-white">
                        <img src={User} alt="user" className="ml-[5px] transition-all transform group-hover:-scale-x-100 duration-500 ease-in-out" />
                        <p className="mb-0 text-[.91rem] hidden lg:block "> login <br /> My Account</p>
                      </Link>
                    </>
                  )
                  }
                </div>
                <div className="group bg-transparent">
                  <Link to="/cart" className="flex items-center">
                    <img src={Cart} alt="cart" className="transition-all transform group-hover:rotate-180 duration-500 ease-in-out" />
                    <div className="flex flex-col">
                      <span className="badge bg-white text-center text-black h-[40%] w-[55%] rounded-[50%] badge-warning">90</span>
                      <p className="mb-0 text-white ">$1000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {
            screen && (
              <div className="h-screen block sm:hidden bg-white">
                <div className={`block h-[100vh] absolute top-20 left-0 right-0 z-10 md:hidden md:w-auto`} id="navbar-dropdown">
                  <ul className=" font-medium  p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                    </li>
                    <li className="relative">
                      <button id="dropdownNavbarLink" onClick={options} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                      </svg></button>
                      {/* <!-- Dropdown menu --> */}
                      {
                        dropdown && (
                          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                            <div className="py-1" role="none">
                              <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-0">Account settings</Link>
                              <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-1">Support</Link>
                              <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-2">License</Link>
                              <form method="POST" action="#" role="none">
                                <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-3">Sign out</button>
                              </form>
                            </div>
                          </div>
                        )
                      }
                    </li>
                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>

                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>

                  </ul>
                </div>

              </div>
            )
          }
        </header>
        <header className={` ${screen === true ? "pointer-events-none overflow-hidden" : "pointer-events-auto"} block sm:hidden py-1 items-center justify-center bg-[#131921] `}>
          <div className="relative block sm:hidden w-4/5 m-auto">
            <input type="search" id="search-dropdown" className="block outline-none border-none p-2.5  w-full z-20 md:rounded-l-none rounded-lg rounded-r-lg"
              placeholder="Search for cloths, electronics Phones etc..." required />
            <button type="submit" className="group bg-[#febd69] absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white rounded-r-lg">
              <BsSearch size={22} />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </header>
        <header className="header-bottom py-3">
          <div className="flex justify-evenly items-center">
            <div className="relative inline-block text-left">
              <div className="flex items-center ">

                <button onClick={options} className="sm:inline-flex w-full hidden justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <IoMdKeypad size={22} />
                  Options
                  <IoMdArrowDropdown size={22} />
                </button>
              </div>
              {
                dropdown && (
                  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                    <div className="py-1" role="none">
                      <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-0">Account settings</Link>
                      <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-1">Support</Link>
                      <Link to="#" className="text-gray-700 block px-4 py-2 border-b-2 text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-2">License</Link>
                      <form method="POST" action="#" role="none">
                        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-500 hover:text-white" role="menuitem" id="menu-item-3">Sign out</button>
                      </form>
                    </div>
                  </div>
                )
              }
            </div>
            <PiDotsThreeVerticalBold className="text-white hidden sm:block" size={30} />
            <div className="flex items-center text-white uppercase">
              <NavLink className="mr-[10px] border-none" to="/"> <span>Home</span></NavLink>
              <NavLink className="mr-[10px] border-none" to="/products"><span>our store</span></NavLink>
              <NavLink className="mr-[10px] border-none" to="/blogs"><span>blogs</span></NavLink>
              <NavLink className="mr-[10px] border-none" to="/contact"><span>contact</span></NavLink>
            </div>
          </div>
        </header >
      </div>
    </>
  )
}

export default Navbar