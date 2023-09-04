import SpecialProdCard from "../Cards/SpecialProdCard"

const SpecialCart = () => {
    return (
        <>
            <div className="rounded-md sm:block justify-between p-0 sm:px-[10px] sm:m-[20px]  ">
                <div className="py-3 grid grid-cols-1 place-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full">
                    <SpecialProdCard />
                    <SpecialProdCard />
                    <SpecialProdCard />
                    <SpecialProdCard />
                </div>

            </div>
        </>
    )
}

export default SpecialCart