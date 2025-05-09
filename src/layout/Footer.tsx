
export default function Footer() {
  return (
    <footer className="container">
      <div className="pb-20">
        <div className="flex flex-col justify-center items-center px-[10px] mt-15 mb-8 xl:py-8">
          <h2 className="text-[30px] font-bold leading-[30px] xl:text-[42px] mb-2">Biz bilan aloqa</h2>
          <p className="text-center text-[14px]">Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>
        </div>
        <div className="flex flex-col gap-y-8 lg:flex-row justify-between">
          <div className="w-[100%] lg:w-[66%] px-4 pt-4 pb-8 rounded-[8px] bg-white/10 backdrop-blur-sm">
            <h4 className="text-[20px] md:text-[26px] mb-2">Bizning jamoa haqida </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-10 gap-y-5">
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
              <li className="flex items-center gap-2 px-2 py-0 h-[80px] rounded-[8px] bg-white/10 backdrop-blur-sm">
                <span className="inline-block w-[60px] h-[60px] rounded  bg-white"></span>
                <div>
                  <h5 className="text-[16px]">Xusanov Alibek</h5>
                  <span className="text-[14px]">Developer</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[100%] p-5 lg:w-[30%] lg:p-10 rounded-[8px] bg-white/10 backdrop-blur-sm">
            <div className="flex flex-col justify-center items-center mb-6">
              <h2 className="text-[16px] leading-[30px] xl:text-[26px] mb-1">Bepul konsultatsiya</h2>
              <p className="text-center text-[12px]">Loyihangiz bo'yicha boshlang'ich bepul konsultatsiya uchun ma'lumotingizni qoldiring</p>
            </div>
            <form className="">
              <input className="border w-[100%] rounded bg-white/10 backdrop-blur-sm px-5 py-2 outline-0 mb-3" type="text" placeholder="Ismingiz" />
              <input className="border w-[100%] rounded bg-white/10 backdrop-blur-sm px-5 py-2 outline-0 mb-7" type="text" placeholder="Telefon raqamingiz" />
              <button className="w-[100%] text-center px-3 py-2 rounded bg-accent-color hover:bg-[#4200dbe0] duration-300 cursor-pointer mb-[40px] lg:mb-20">Jo'natish</button> 
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
