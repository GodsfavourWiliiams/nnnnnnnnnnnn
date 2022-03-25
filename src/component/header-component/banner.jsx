const Banner = () => (
    <div className="bg-white">
     <div className="max-w-7xl mx-auto xl:px-0 px-3">
      <div className="flex items-center justify-between flex-wrap border-b py-4">
        <div className="flex justify-between flex-shrink-0 w-full sm:order-2 sm:w-auto">
        <span className="cursor-pointer font-bold text-xs text-primary-100">Chat with us</span>
        <span className='cursor-pointer mx-10 sm:inline font-bold hidden text-xs'>
        <a href="tel://+2348159675934">+234 815 967 5934</a></span>
        <span className="cursor-pointer text-xs font-bold">info@freshnesecom.com</span>
        </div>
        <div className="order-3 mt-2 flex justify-between flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <span className="cursor-pointer text-primary-100 font-bold text-xs">Blog</span>
        <span className='cursor-pointer text-primary-100 font-bold mx-10 text-xs'>About Us</span>
        <span className="cursor-pointer text-primary-100 font-bold text-xs">Careers</span>
        </div>
      </div>
    </div>
  </div>
)

export default Banner;