import img from "../assets/jah guide 2.jpg";
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {TbNoCopyright} from 'react-icons/tb'
import { Link } from "react-router-dom";
import Nav from './Nav'
const Bracelets = () => {
  return (
       <div>
<Nav/>
    
    <div className=" w-full min-h-screen flex px-2 md:px-10 py-6">
      <div className="w-full flex flex-col items-center justify-center p-4">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="mt-6 w-full bg-cover  object-cover bg-center h-[800px] 
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden"
        >
          <div className="p-8  flex items-center justify-center mt-10">
            <div className="md:flex  ">
              <div className="uppercase tracking-wide text-md text-xl md:text-3xl
               text-indigo-500 md:text-white font-bold">
                <h1 className=" p-5  shadow shadow-[#54abd4] hover:shadow-[#546bd4]
                 hover:text-blue-600 hover:bg-white    ">
                  Mother Land
                  <br />
                  <span className=" font-serif">Bracelets</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <h1>
Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-4 items-center justify-center mt-6 gap-6">
          <div className=" w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>

          <div className=" w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>

          <div className=" col-span-3 md:col-span-1 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>

          <div className=" w-full bg-cover col-span-3 md:col-span-1 object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>
          <div className="col-span-3 md:col-span-1 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>
          <div className="col-span-2 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>
          <div className="col-span-4 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>
          <div className=" col-span-3 md:col-span-1 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>
          <div className="col-span-3 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden">
          </div>
        </div>
        <div className=" mt-8 flex flex-col items-center justify-center   ">
        <Link to='/' className=" text-[25px] font-serif flex flex-row underline  ">
          <TbNoCopyright className=" w-8 h-8"/>-T3-Stores.Co.Zm</Link>
        <p className=" text-[15px] font-light">Details:</p>
        <p className=" text-sm font-light">+260 776-061-217</p>
        <p className=" text-sm font-light flex flex-row gap-1"><FaWhatsapp  className=" rounded w-4 h-4"/>+260 965-199-516</p>
        <p className=" text-sm font-light flex flex-row gap-1"><FaInstagramSquare className=" rounded w-5 h-5"/>-@T3-Stores-123</p>
        <p className=" text-sm font-semi-bold ">FAQs</p>
        </div>
        <div className=" mt-10">

        </div>
      </div>
    </div>
    </div>
  );
};

export default Bracelets;






