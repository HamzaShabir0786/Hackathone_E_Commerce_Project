// import Image from "next/image";

import ShopCard from "./shopCard/ShopCard";
import FeaturedProducts from "./featuredProducta/page";
export default function Home() {
  return (
    <>
      <div className="w-[1439px] h-[716px] m-auto landig-bg">
        <div className="w-[1044px] h-[651px] mt-[48px] absolute ml-[197.5px] gap-[80px]  flex items-center">
          <div className="h-[427px] w-[1044px] py-[48px]  gap-[30px] ">
            <div className="w-[599px] h-[331px] gap-[35px]  flex flex-col justify-between">
              <h5 className="text-white font-bold text-[16px] ">Summer 2024</h5>
              <h1 className="font-weight text-[58px] font-bold text-[#fafafa]">
                New Collection
              </h1>
              <div className="w-[376px] h-[60px] ">
                <h4 className=" font-[700px]  text-[20px] leading-[30px] text-[#fafafa]">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
              </div>
              <div className=" w-[221px] h-[62px] py-[15px] px-[40px] gap-[10px] bg-[#2DC071]">
                <h3 className="text-[#fafafa] font-[700]   text-center">
                  SHOP NOW
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShopCard />
      <FeaturedProducts/>
    </>
  );
}
