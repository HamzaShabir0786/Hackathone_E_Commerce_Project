export default function Header() {
  return (
    <>
      <div className="h-[136px] w-[1439px] bg-white m-auto flex flex-col ">
        <div className="w-[1439px] h-[58px] bg-[#252B42] m-auto flex items-center mb-2 ">
          <div className="w-[100%] h-[46px]  flex justify-between px-[24px] bg-red-900">
            <div className="w-[auto] h-[46px] gap-[10px] flex items-center bg-blue-300">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-white"></i>
                <h6>(225)555-0118</h6>
              </div>
              <div className="flex  items-center gap-2">
                <i className="fa-solid fa-message text-white"></i>
                <h6>hamzii2205@gmail.com</h6>
              </div>
            </div>
            <div className=" w-[auto] bg-pink-300 h-[44px] p-[10px] gap-[10px]">
              <h6 className="font-[Montserrat] font-[700] text-[14px] tracking-[0.2px] leading-[24px]">
                Follow Us and get a chance to win 80% off
              </h6>
            </div>
            <div className="w-[auto]  bg-amber-600 h-[46px] p-[10px] gap-[10px] flex ">
              <h6 className="font-[montserrat] font-[900px] text-[14px] leading-[24px] text-white">
                Follow US:
              </h6>
              <div className="w-[120px] h-[26px]">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        {/* nav contact end here */}
        <div className="w-[1439px] h-[58px] top-[70px]  flex items-center mb-[16px]  ">
          <div className="w-[187px] h-[58px] ml-[38px]   flex items-center">
            <h3 className="font-800 text-[#252b42] ">Bandage</h3>
          </div>

          <div className="flex items-center justify-between  ml-[265px] w-[1155px] h-[58px]">
            <div className="flex list-none gap-[15px] text-[#737373]">
              <li>Home</li>
              <li>Shope</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </div>
          </div>
          <div className=" w-[324px] h-[54px] top-[2px]  flex justify-center items-center text-[#23a6f0]">
            <div className="flex items-center ">
              <i className="fa-solid fa-user h-[46px] w-[46px]"></i>
              <div className="flex ml-[-10px] ">
                <a href="#">Login</a> / <a href="#">Register</a>
              </div>
            </div>
            <i className="fa-solid fa-magnifying-glass h-[46px] w-[46px]"></i>
            <i className="fa-solid fa-cart-shopping h-[46px] w-[46px]">1 </i>
            <i className="fa-regular fa-solid fa-heart h-[46px] w-[46p]">1</i>
          </div>
        </div>
      </div>
    </>
  );
}
