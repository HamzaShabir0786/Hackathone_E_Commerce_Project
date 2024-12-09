export default function FeaturedPost() {
  return (
    <>
      <div className="w-[1439px] h-[770px]  m-auto bg-red-200">
        <div className="w-[1050px] h-[770px]  m-auto py-[80px] gap-[48px]">
          <div className="w-[691px] h-[134px] gap-[10px] m-auto  text-24px">
            <h6 className="text-[#23A6F0] text-center">Practice Advice</h6>
            <h2 className="text-center text-[#252B42] font-bold tracking-[1px] text-[40px]">
              Featured Posts
            </h2>
            <p className="text-center text-[#737373] leading-[30px] text-[16px] font-[600]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="feature-post-grid bg-red-400">
            <div className="f-p-g-items f-p-g-item-1">
              <div className="f-p-c-pic-1 h-[50%]"></div>
              <div className="f-p-c-2 h-[50%] flex flex-col justify-around p-[25px]">
                <div className="flex  gap-[15px]">
                  <span>Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>
                <div>
                  <h4 className="text-[20px]">
                    Loudest à la Madison #1 (L'integral)
                  </h4>
                </div>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between items-center ">
                  <span>
                    <i className="fa-regular fa-bell pr-2"></i>
                    22 April 2021
                  </span>
                  <span>
                    <i className="fa-solid fa-chart-simple"></i>
                    10 comments
                  </span>
                </div>
              </div>
            </div>
            <div className="f-p-g-items f-p-g-item-2">
              <div className="f-p-c-pic-2 h-[50%]"></div>
              <div className="f-p-c-2 h-[50%]  flex flex-col justify-around p-[25px]">
                <div className="flex  gap-[15px]">
                  <span>Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>
                <div>
                  <h4 className="text-[20px]">
                    Loudest à la Madison #1 (L'integral)
                  </h4>
                </div>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between items-center ">
                  <span>
                    <i className="fa-regular fa-bell pr-2"></i>
                    22 April 2021
                  </span>
                  <span>
                    <i className="fa-solid fa-chart-simple"></i>
                    10 comments
                  </span>
                </div>
              </div>
            </div>
            <div className="f-p-g-items f-p-g-item-3">
              <div className="f-p-c-pic-3 h-[50%]"></div>
              <div className="f-p-c-2 h-[50%] flex flex-col justify-around p-[25px]">
                <div className="flex  gap-[15px] ">
                  <span>Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>
                <div>
                  <h4 className="text-[20px]">
                    Loudest à la Madison #1 (L'integral)
                  </h4>
                </div>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between items-center ">
                  <span>
                    <i className="fa-regular fa-bell pr-2"></i>
                    22 April 2021
                  </span>

                  <span>
                    <i className="fa-solid fa-chart-simple"></i>
                    10 comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
