export default function FeaturedProducts() {
  return (
    <>
      <div className="w-[1439px] h-[1652px] bg-green-200 m-auto ">
        <div className="w-[1050px] h-[1652px] bg-green-400 m-auto">
          <div className="h-[102px] w-[691px] bg-pink-400 m-auto text-center ">
            <h4 className="font-[400] text-[#737373] trackint-[.2px] leading-[30px]">
              Featured Products
            </h4>
            <h3 className="font-bold text-[#252B42] tracking-[.2px] leading-[30px]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-normal text-[#737373] leading-[30px]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="featured-grid py-[80px] gap-[30px]">
            <div className="featured-grid-item-1 bg-red-200">
              <div className="h-[427px] w-[240px] bg-fuchsia-400"></div>
              <div className="h-[188px] w-[240px] bg-fuchsia-100">
                <h5>Graphic Design</h5>
                <li>English Department</li>
                <div>
                  <span>$16.48</span>
                  <span>$10.48</span>
                </div>
                <div className="flex">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-red-700"></div>
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-green-800"></div>
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-orange-700"></div>
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-black"></div>
                </div>
              </div>
            </div>
            <div className="featured-grid-item-2 bg-red-300"></div>
            <div className="featured-grid-item-3 bg-red-400"></div>
            <div className="featured-grid-item-4 bg-red-500"></div>
            <div className="featured-grid-item-5 bg-red-600"></div>
            <div className="featured-grid-item-6 bg-red-700"></div>
            <div className="featured-grid-item-7 bg-red-800"></div>
            <div className="featured-grid-item-8 bg-red-900"></div>
          </div>
        </div>
      </div>
    </>
  );
}
