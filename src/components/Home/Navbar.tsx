import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// react icons
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai"
import { LiaRupeeSignSolid, LiaTimesSolid } from "react-icons/lia"
import { BsSearch, BsSun } from "react-icons/bs"
import { IoMdArrowDropdown, IoMdKeypad } from "react-icons/io"
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import { FiChevronDown } from "react-icons/fi"
import { CiDark } from "react-icons/ci"
import { HiMiniComputerDesktop } from "react-icons/hi2"

// images
import Logo from "../../assets/icons/vgold.png"
import Compare from "../../assets/images/compare.svg"
import Wishlist from "../../assets/images/wishlist.svg"
import User from "../../assets/images/user.svg"
import Cart from "../../assets/images/cart.svg"
import { logout, setTheme, toggleScroll } from "../../redux/reducers/users/userSlice"
import { AppDispatch, RootState } from "../../redux/store"
import { Category, getCategories } from "../../redux/reducers/filters/filterSlice"
import { getAllProducts } from "../../redux/reducers/product/productSlice"
import { cartTotal } from "../../redux/reducers/cart/cartSlice"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selctedCat, setSelectedCat] = useState("")
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [openCate, setOpenCat] = useState(false)

  // theme
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const { screen, theme, user } = useSelector((state: RootState) => state.user)
  const { cartTotalAmount, cartTotalQuantity } = useSelector((state: RootState) => state.cart)
  const { categories } = useSelector((state: RootState) => state.filters)
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getAllProducts({ title: query }))
    navigate(`/search?q=${query}`)
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      setActive(true)
      setDropdown(false)
      setIsDropdownOpen(false)
    } else {
      setActive(false)
      setIsDropdownOpen(false)
    }
    setOpenCat(false)
  })
  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark")
    }
  }
  onWindowMatch()

  const category = () => {
    setOpenCat(!openCate)
    setDropdown(false)
  }
  const options = () => {
    setDropdown(!dropdown)
    setOpenCat(false)
    setIsDropdownOpen(false)

  }

  const screenFuncTrue = () => {
    dispatch(toggleScroll(false))
  }
  const screenFuncFalse = () => {
    dispatch(toggleScroll(true))
  }
  // console.log(screen);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break;
      case "light":
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
        break;
      default:
        localStorage.removeItem("theme")
        // localStorage.setItem("theme", "dark")

        onWindowMatch()
        break;
    }
  }, [theme])
  useEffect(() => {
    dispatch(cartTotal())
  }, [])
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")

      }
    }
  })

  const handleLogout = () => {
    dispatch(logout())
  }
  const handleCategory = (id: string) => {
    dispatch(getAllProducts({ category: id }))
    navigate(`/search?f=${id}`)
    setOpenCat(false)
  }
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <>
      <div className={`sm:static`}>
        <header className="header-top-strip py-3 hidden sm:block">
          <div className="w-full">
            <div className="flex justify-around">
              <div>
                <p className="text-white mb-0">Free shipping Over 199 Rupees</p>
              </div>
              <div>
                <p className="text-end text-white">Admin Email: <a className="text-white" href="venugopalreddy9493@gmail.com">venugopalreddy9493@gmail.com</a></p>
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
              <form onSubmit={handleSubmit}>
                <div className="relative hidden sm:flex">
                  <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 hidden z-10 md:flex items-center py-2.5 px-4 text-sm font-medium text-center  rounded-l-lg text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button" onClick={category}> {selctedCat === "" ? "All categories " : selctedCat}<IoMdArrowDropdown size={22} /> </button>
                  {openCate &&
                    (
                      <div className="absolute left-0 top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                        <div className="py-1" role="none">
                          {categories && categories.map((cat: Category) => (
                            <div onClick={() => { handleCategory(cat?._id); setSelectedCat(cat?.title) }} key={cat?._id} className="hover:text-black hover:bg-gray-200 bg-opacity-90 pl-5 my-2">{cat?.title}</div>
                          ))}

                        </div>
                      </div>
                    )
                  }
                  <div className="relative w-full">
                    <input
                      onChange={(e) => setQuery(e.target.value)} value={query}
                      type="search" id="search-dropdown" className="block outline-none border-none p-2.5  w-full z-20 text-md md:rounded-l-none rounded-lg rounded-r-lg"
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
                  {user ? (
                    <>
                      <div onClick={handleLogout} className="flex sm:cursor-pointer items-center text-white">
                        <AiOutlineLogout title="logout" size={35} className="transition-all transform group-hover:-scale-x-100 duration-500 ease-in-out" />
                        <p className="mb-0 text-[.91rem] hidden lg:block">logout</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/login" data-tooltip-id="Login_tooltip" className="flex items-center text-white">
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
                      <span className={`badge ${user && cartTotalQuantity >= 1 ? "bg-white" : null} text-center text-black h-6 w-6 rounded-full badge-warning flex items-center justify-center`}>
                        {user && cartTotalQuantity >= 1 ? cartTotalQuantity : null}
                      </span>
                      <p className="mb-0 text-white ">
                        {user && cartTotalAmount > 1 ? <span><LiaRupeeSignSolid className="inline text-[1.2rem]" />{cartTotalAmount}</span> : null}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {
            <div className={`transition-all w-full z-10 h-screen absolute ease-linear duration-300 delay-150 ${screen === true ? "group:overflow-hidden -translate-x-0 " : "-translate-x-full"} block bg-white dark:bg-gray-800 sm:hidden md:w-auto`} id="navbar-dropdown">
              <div className=" font-medium  p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
                <span>
                  <Link to="/" onClick={() => screenFuncTrue()} className="mobile-menu">Home</Link>
                </span>
                <span className="relative">
                  <button id="dropdownNavbarLink" onClick={options} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    <span>Theme</span>
                    <FiChevronDown className="inline font-Rubik" />
                  </button>
                  {
                    dropdown && (
                      <div className="absolute right-0  z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                        <div className="py-1" role="none">
                          <div onClick={() => {
                            dispatch(setTheme("light"))
                            setDropdown(false)
                            screenFuncTrue()
                          }} className="custom-menu-item" role="menuitem" id="menu-item-0">
                            <BsSun size={20} className="inline mr-3" />
                            <span>Light</span>
                          </div>
                          <div onClick={() => {
                            dispatch(setTheme("dark"))
                            setDropdown(false)
                            screenFuncTrue()
                          }} className="custom-menu-item" role="menuitem" id="menu-item-1">
                            <CiDark size={20} className="inline mr-3" />
                            <span>Dark</span>
                          </div>
                          <div onClick={() => {
                            dispatch(setTheme("system"))
                            setDropdown(false)
                            screenFuncTrue()
                          }} className="custom-menu-item" role="menuitem" id="menu-item-2">
                            <HiMiniComputerDesktop size={20} className="inline mr-3" />
                            <span>System</span>
                          </div>

                        </div>
                      </div>
                    )
                  }
                </span>
                <span>
                  <Link to="/orders" onClick={() => screenFuncTrue()} className="mobile-menu">Orders</Link>
                </span>
                <span>
                  <Link to="/profile" onClick={() => screenFuncTrue()} className="mobile-menu">Profile</Link>
                </span>
                <span>
                  <Link to="/contact" onClick={() => screenFuncTrue()} className="mobile-menu">Contact</Link>
                </span>
              </div>
            </div>
          }

        </header>
        <header className={` ${screen === true ? "pointer-events-none overflow-hidden" : "pointer-events-auto"} block sm:hidden py-1 items-center justify-center bg-[#131921] `}>
          <div className="relative block sm:hidden w-4/5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setQuery(e.target.value)} value={query}
                type="search" id="search-dropdown" className="block outline-none border-none p-2.5  w-full z-20 md:rounded-l-none rounded-lg rounded-r-lg"
                placeholder="Search for cloths, electronics Phones etc..." required />
              <button type="submit" className="group bg-[#febd69] absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white rounded-r-lg">
                <BsSearch size={22} />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </header>
        <header className="header-bottom py-3 ">
          <div className="flex justify-evenly  items-center">
            <div className="relative inline-block text-left">
              <div className="flex items-center ">

                <button onClick={options} className="text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-black sm:inline-flex w-full hidden justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold shadow-md" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <IoMdKeypad size={22} />
                  Options
                  <IoMdArrowDropdown size={22} />
                </button>

              </div>
              {
                dropdown && (
                  <div className="bg-white dark:bg-transparent absolute sm:block hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                    <div className="py-1" role="none">
                      <Link to="/profile" onClick={() => setDropdown(false)} className="options " role="menuitem" id="menu-item-0">Profile</Link>
                      <button onClick={toggleDropdown} className="options" role="menuitem" id="menu-item-1">
                        <span>Theme</span>
                        <FiChevronDown className="inline font-Rubik" />
                      </button>

                      <Link onClick={() => setDropdown(false)} to="#" className="options">Account settings</Link>

                      <Link to="/orders" onClick={() => setDropdown(false)} className="options" role="menuitem" id="menu-item-0">Orders</Link>

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
          {
            isDropdownOpen && (
              <div className="absolute left-1/4 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:block hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                <div className="py-1" role="none">
                  <div onClick={() => {
                    dispatch(setTheme("light"))
                    setIsDropdownOpen(false)
                    setDropdown(false)

                  }} className="custom-menu-item" role="menuitem" id="menu-item-0">
                    <BsSun size={20} className="inline mr-3" />
                    <span>Light</span>
                  </div>
                  <div onClick={() => {
                    dispatch(setTheme("dark"))
                    setIsDropdownOpen(false)
                    setDropdown(false)
                  }} className="custom-menu-item" role="menuitem" id="menu-item-1">
                    <CiDark size={20} className="inline mr-3" />
                    <span>Dark</span>
                  </div>
                  <div onClick={() => {
                    dispatch(setTheme("system"))
                    setIsDropdownOpen(false)
                    setDropdown(false)
                  }} className="custom-menu-item" role="menuitem" id="menu-item-2">
                    <HiMiniComputerDesktop size={20} className="inline mr-3" />
                    <span>System</span>
                  </div>

                </div>
              </div>
            )
          }
        </header >
      </div>
    </>
  )
}

export default Navbar