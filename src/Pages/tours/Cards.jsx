import React from "react";
import { Link, useParams } from "react-router-dom";
import tours from "../../App";

const Cards = () => {
const id = useParams().CardId
const card = tours.find((el) => el.id == id) 
console.log(card);


  return (
    <div className="container py-[50px] bg-yellow-50 flex justify-between gap-20 ">
      <div className="w-[500px] h-[300px] bg-slate-400 rounded-xl p-[30px] ">

      <div className="relative flex flex-col items-start gap-[30px]" >
        <h1 className="text-[30px] text-white ">{card.name}</h1>
        <p className=" text-white text-[15px]">{card.description}</p>
        <p className=" absolute bottom-[-120px] text-[24px] text-white font-bold ">{card.price}</p>
        <i class="absolute right-[-10px] text-white bottom-[-120px]  text-[35px] fa-solid fa-train"></i>
      </div>
      </div>
      <div className="w-[400px] flex flex-col gap-5">
         <h1 className="text-[33px] text-gray-600">Want More?</h1>
         <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam illo, voluptatibus minus reiciendis ea natus assumenda quia in inventore.</p>
        <Link to={`Cards`}>
          <button className="  px-4 py-1 text-gray-600 bg-transparent border-[3px] rounded-xl border-[#4b5563]">
            More
          </button>
          
        </Link>
      </div>
    </div>
  );
};

export default Cards;
