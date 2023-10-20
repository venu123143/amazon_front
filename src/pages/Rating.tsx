import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const RatingStar = ({ stars }:any) => {
    return (
        <div className="flex">
            {Array.from({ length: 5 }, (_, index) => {
                let number = index + 0.1;

                return (
                    <span key={index}>
                        {stars >= index + 1 ? (
                            <AiFillStar className="text-[#ffd700]" />
                        ) : stars >= number ? (
                            <BsStarHalf className="text-[#ffd700]" />
                        ) : (
                            <AiOutlineStar className="icon" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default RatingStar;
