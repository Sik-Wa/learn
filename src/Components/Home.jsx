import image from "../assets/hero-image.jpg";
import image1 from "../assets/Bj1.jpg";
import image2 from "../assets/Lupita1.jpg";
import image3 from "../assets/Man1.jpg";
import image4 from "../assets/B1.jpg";
import image5 from "../assets/Africa1.jpg";
import { Link } from "react-router-dom"
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {TbNoCopyright} from 'react-icons/tb'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
<Nav/>
  
    <section className="w-full flex  min-h-screen px-2 md:px-10 py-6 ">
      <div className=" w-full flex flex-col items-center justify-center p-4">
        <h1 className=" text-[45px] font-serif">T3</h1>
        <p className=" text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempora.</p>
        <p className=" text-sm font-light">Lorem ipsum dolor sit amet consec.</p>
        <p className=" text-sm font-light">Lorem ipsum dolor </p>
        <p className=" text-sm font-light">Lorem </p>
        <div className=" w-full grid grid-cols-1 md:grid-cols-4 items-center justify-center mt-6 gap-6">

          <div style={{backgroundImage:`url(${image5})`}} className="col-span-2 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Odit similique ipsa ipsam. Facilis iusto placeat amet. Voluptas qui porro fuga.
             </p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl text-white ">Afro <br/>
          <span className=" text-2xl font-mono">King & Queen</span></Link>
          </div>


          <div style={{backgroundImage:`url(${image})`}} className=" w-full bg-cover object-cover
           bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, et.</p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl text-white ">Overseas<br/>
          <span className=" text-2xl font-mono">Clothing</span></Link>
          </div>

          <div style={{backgroundImage:`url(${image1})`}} className=" col-span-2 w-full bg-cover object-cover
           bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, et.</p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl text-white ">Modern<br/>
          <span className=" text-2xl font-mono">Jewelery</span></Link>
          </div>


          <div style={{backgroundImage:`url(${image2})`}} className="col-span-2  w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, et.</p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl text-white ">Tradional <br/>
          <span className=" text-2xl font-mono">Afro-Queen</span></Link>
          </div>


          <div style={{backgroundImage:`url(${image3})`}} className=" col-span-2 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, et.</p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl text-white ">CLassic<br/>
           <span className=" text-2xl font-mono">Afro-King</span></Link>
          </div>

          <div style={{backgroundImage:`url(${image4})`}} className=" w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, et.</p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Bracelets'>Click</Link>
          </div>
          <Link to='/Bracelets' className=" font-serif text-xl text-white ">African <br/>
           <span className=" text-2xl font-mono">Bracelet</span></Link>
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
       
    </section>
    </div>
  )
}

export default Home