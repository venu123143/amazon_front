import { IconType } from "react-icons";
import { features } from "../../static/staticData"
import { categories } from "../../static/staticData";
import { Link } from "react-router-dom";

const renderIcon = (icon: IconType, index: number) => {
  const Icon = icon;
  return (
    <div key={index}>
      <Icon size={30} />
    </div>
  );
};
const FeatureCollection = () => {
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
      <h3 className="font-[550] text-[1.5rem] ml-5 hover:underline w-fit">Top Categories</h3>
      <section className="rounded-md shadow-lg px-[10px] m-[20px] bg-[#ffffff] ">

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 ">
          {categories.map((item: any, index) => (
            <Link to="/" key={index}>
              <div key={index} className="flex items-center justify-between sm:justify-center cursor-pointer">
                <div>
                  <h6 className="font-medium text-[1rem]">{item.item}</h6>
                  <p className="mb-0 text-[1rem]">{item.para}</p>
                </div>
                <div className="h-[110px]">
                  <img src={item.img} alt="img" className="w-[110px] h-full" />
                </div>
              </div>
            </Link>
          ))

          }
        </div>
      </section >
    </>
  )
}

export default FeatureCollection