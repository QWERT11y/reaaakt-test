import React from "react";
import { Link, NavLink } from "react-router-dom";
import tours from "../../App";

const Section1 = () => {
  return (
    <div className="h-[700px] container bg-[url('https://s3-alpha-sig.figma.com/img/f81f/d99f/bfae0fdd87d7934e2b2a3a946149f822?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pLJl-tmiU1oHmX2z5ExTcQ0Gs4f5Z5P7RCBT2sDSKmTQZPgsZKA-QNSB3U3DOYzUb7dO1PthBLtWmGncmT6zOFuQk-~o5jhOc5W7OqgHTU~BeWZxZE7dsWwFG91tvcuLPhrvDHn3YBu4MuQKPsfKLhmaWFP1auHQbWNXmscTEkb3~02OiV6PTH7qdtdaP9b02PBlxl-SHsuYevdMqfWLMiW25EXCuNbadug4GMh2EQuVnd2Ux6SfIAjXjG~JBf4qN827GzjyAA-SJ9S~K7xnVVWOe8EuTMkvCCdrLv0NXFStNdBPnjoFtZKJEdyQv6tx-LOkWKzTK~jdebQAxCFxmQ__')]">
      <div className="flex justify-between items-center py-[60px] ">
        <div className="text-white text-center flex flex-col  justify-center items-center gap-[100px]">
          <div>
            <h1 className="text-[50px]">tourism is a pleasure for the soul</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              consequatur neque voluptatibus maiores perferendis amet ratione
              voluptate accusantium libero similique!
            </p>
          </div>
          <div className=" flex items-center gap-[50px]">
            {tours.map((el) => {
              return (
                <div className="relative w-[450px] h-[300px] bg-slate-50 rounded-3xl p-[30px]">
                  <div className="text-start text-black flex flex-col items-start gap-[30px]">
                    <h1 className="text-[30px]">{el.name}</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, <br /> adipisicing
                      elit. Velit, nobis?
                    </p>

                    <div className="flex items-center gap-4">
                      <Link to={`/Cards/${el.id}`}>
                        <button className=" absolute bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                          More
                        </button>
                      </Link>
                      <Link to={`/Cards/${el.id}`}>
                        <button className=" absolute left-[120px] bottom-[30px] px-5 py-1 bg-lime-700 text-white border-[3px] border-[#4d7c0f] rounded-xl ">
                          About
                        </button>
                      </Link>
                    </div>
                  </div>
                  <i class="absolute right-[30px] bottom-[30px] text-black text-[35px] fa-solid fa-train"></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
