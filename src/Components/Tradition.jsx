import img from "../assets/crossk.jpg";

const Tradition = () => {
  return (
  <div className=" w-full min-h-screen flex px-2 md:px-10 py-6">
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="mt-6 w-full bg-cover object-cover bg-center h-[800px]
         rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden"
      >
        <div className="p-8  flex items-center justify-center mt-10">
          <div className="md:flex  ">
            <div
              className="uppercase tracking-wide text-md text-xl md:text-3xl
             text-indigo-500 md:text-white font-bold"
            >
              <h1
                className=" p-5  shadow shadow-[#54abd4] hover:shadow-[#546bd4]
               hover:text-blue-600 hover:bg-white    "
              >
                TRADIONAL 
                <br />
                <span className=" font-serif">CHITENGE WEAR</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-2 md:grid-cols-4 items-center justify-center mt-6 gap-1">
        <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] col-span-4 h-[510px] b"></div>
        <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] col-span-2 h-[510px] b"></div>
        <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[510px] b"></div>
        <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[510px] b"></div>
        <div className="w-full  shadow shadow-[#54d0d4]  rounded-[40px] col-span-4  h-[510px] ">
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tradition