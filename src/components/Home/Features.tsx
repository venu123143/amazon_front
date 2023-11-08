import { IconType } from "react-icons";
import { features } from "../../static/staticData"
import { categories } from "../../static/staticData";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/reducers/product/productSlice";

const renderIcon = (icon: IconType, index: number) => {
  const Icon = icon;
  return (
    <div key={index}>
      <Icon size={30} />
    </div>
  );
};
const FeatureCollection = () => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const getProducts = (filters: { category: string }) => {
    dispatch(getAllProducts(filters))
    navigate('/search')
  }
  return (
    <>
      <section className="rounded-md m-[1rem] bg-[#F5F5DC]">

        <div className="mx-[4%] py-2 hidden lg:flex items-center justify-between">
          {features && features.map((each: any) => (
            <div key={each.id} className="flex justify-evenly items-center gap-2">
              <div>
                {renderIcon(each.img, each.id)}
              </div>
              <div>
                <h6 className="font-bold text-[1rem]">{each.item}</h6>
                <p className="mb-0 text-[1rem]">{each.para}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <h3 className="font-[550] text-[1.5rem] text-skin-base ml-5 hover:underline w-fit">Top Categories</h3>
      <section className=" bg-[#ffffff] dark:opacity-75 rounded-md shadow-lg px-[10px] m-[20px]">

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  ">
          {/* to={`/products?category=${item?.params}`} */}
          {categories.map((item: any, index) => (
            <div onClick={() => getProducts({ category: item?.url })} key={index}>
              <div key={index} className="flex items-center justify-between md:justify-center cursor-pointer">
                <div>
                  <h6 className="font-medium text-[1rem]">{item.item}</h6>
                  <p className="mb-0 text-[1rem]">{item.para}</p>
                </div>
                <div className="h-[110px]">
                  <img src={item.img} alt="img" className="w-[110px] h-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section >
    </>
  )
}

export default FeatureCollection