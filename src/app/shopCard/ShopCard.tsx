export default function ShopCard() {
  return (
    <>
      <div className="w-[1439px] h-[770px]  m-auto ">
        <div className="w-[1050px] h-[770px]  m-auto py-[80px] gap-[48px] ">
          <div className="w-[660px] h-[62px] gap-[10px] m-auto ">
            <h3 className="text-center text-[#252B42] font-bold tracking-[1px]">
              Editor's Pics
            </h3>
            <p className="text-center text-[#737373] leading-[30px]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
          <div className="gird w-[1050px] h-[500px] shopcard-grid">
            <div className=" item-1">div1</div>
            <div className=" item-2">div2</div>
            <div className=" item-3">
              <div className=" item-3-1">div3</div>
              <div className=" item-3-2">div4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
