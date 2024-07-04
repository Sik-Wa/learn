import img from "../assets/swag.jpg";
import Nav from './Nav'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {TbNoCopyright} from 'react-icons/tb'
const Swag = () => {
  return (
      <div>
<Nav/>
    
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
                  STREET
                  <br />
                  <span className=" font-serif">SWAGGER</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 flex-col md:grid-cols-4 items-center justify-center mt-6 gap-1">
          <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] col-span-2 h-[510px] b"></div>
          <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[510px] b"></div>

          <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[510px] b"></div>
          <div className="w-full  shadow shadow-[#54d0d4]  rounded-[40px] col-span-4 h-64 "></div>
          <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[510px] b"></div>
          <div className=" w-full hidden md:flex shadow shadow-[#54d0d4]  rounded-[40px] col-span-3 h-[510px] b"></div>
        </div>
      </div>
    </div>
    <div className=" mt-8 flex flex-col items-center justify-center   ">
        <h1 className=" text-[25px] font-serif flex flex-row underline  ">
          <TbNoCopyright className=" w-8 h-8"/>-T3-Stores.Co.Zm</h1>
        <p className=" text-[15px] font-light">Details:</p>
        <p className=" text-sm font-light">+260 776-061-217</p>
        <p className=" text-sm font-light flex flex-row gap-1"><FaWhatsapp  className=" rounded w-4 h-4"/>+260 965-199-516</p>
        <p className=" text-sm font-light flex flex-row gap-1"><FaInstagramSquare className=" rounded w-5 h-5"/>-@T3-Stores-123</p>
        <p className=" text-sm font-semi-bold ">FAQs</p>
        </div>
    </div>
  );
};

export default Swag;
