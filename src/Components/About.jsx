import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbNoCopyright } from "react-icons/tb";
import { Link} from 'react-router-dom'
import Nav from './Nav'
const About = () => {
  return (
    <div>
<Nav/>
   
    <div className="w-full flex min-h-screen px-2 md:px-10 py-6 mt-6 ">
      <div className=" w-full flex flex-col items-center justify-center p-4">
        <h1 className=" text-[45px] font-serif text-[#54d0d4] underline  ">
          GET TO KNOW <br />
          <span className="text-[#2d9599] underline">T3</span>
        </h1>
        <div className=" w-full grid grid-cols-2 md:grid-cols-4 items-center justify-center mt-6 gap-1">
          <div className=" w-full shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[510px] b">
            <h2 className=" underline font-semibold">WHO</h2>
            <div className=" mt-4 text-left">
              <p className=" block text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ipsa quam magnam incidunt ut, excepturi corrupti tempora
                accusantium explicabo voluptas? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis, qui temporibus
                asperiores in error autem laboriosam sequi earum eos magni
                repellendus, molestiae illo voluptates eligendi assumenda nobis
                eius. Incidunt itaque harum quisquam ex reiciendis ipsam ab enim
                magnam tenetur? Minus necessitatibus aliquam eligendi nobis, at
                perspiciatis illum magnam excepturi vitae!
              </p>
            </div>
          </div>
          <div className="w-full  shadow shadow-[#54d0d4]  rounded-[40px] col-span-3 h-60 ">
          <h2 className=" underline font-semibold">WHere</h2>
          <div className=" mt-4 text-left">
              <p className=" block text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ipsa quam magnam incidunt ut, excepturi corrupti tempora
                accusantium explicabo voluptas? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis, qui temporibus
                asperiores in error autem laboriosam sequi earum eos magni
                repellendus, molestiae illo voluptates eligendi assumenda nobis
                eius. Incidunt itaque harum quisquam ex reiciendis ipsam ab enim
                magnam tenetur? Minus necessitatibus aliquam eligendi nobis, at
                perspiciatis illum magnam excepturi vitae!
              </p>
            </div>
          </div>
          <div className="w-full  shadow shadow-[#54d0d4]  rounded-[40px] col-span-2 h-64 ">
          <h2 className=" underline font-semibold">WHen</h2>
          <div className=" mt-4 text-left">
              <p className=" block text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ipsa quam magnam incidunt ut, excepturi corrupti tempora
                accusantium explicabo voluptas? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis, qui temporibus
                asperiores in error autem laboriosam sequi earum eos magni
                repellendus, molestiae illo voluptates eligendi assumenda nobis
                eius. Incidunt itaque harum quisquam ex reiciendis ipsam ab enim
                magnam tenetur? Minus necessitatibus aliquam eligendi nobis, at
                perspiciatis illum magnam excepturi vitae!
              </p>
            </div>
          </div>

          <div className=" w-full  shadow shadow-[#54d0d4]  rounded-[40px] row-span-3 h-[260px] ">
          <h2 className=" underline font-semibold">Why</h2>
          <div className=" mt-4 text-left">
              <p className=" block text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               eligendi nobis, at
                perspiciatis illum magnam excepturi vitae!
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-8 flex flex-col items-center justify-center   ">
          <Link to='/' className=" text-[25px] font-serif flex flex-row underline  ">
            <TbNoCopyright className=" w-8 h-8" />
            -T3-Stores.Co.Zm
          </Link>
          <p className=" text-[15px] font-light">Details:</p>
          <p className=" text-sm font-light">+260 776-061-217</p>
          <p className=" text-sm font-light flex flex-row gap-1">
            <FaWhatsapp className=" rounded w-4 h-4" />
            +260 965-199-516
          </p>
          <p className=" text-sm font-light flex flex-row gap-1">
            <FaInstagramSquare className=" rounded w-5 h-5" />
            -@T3-Stores-123
          </p>
          <p className=" text-sm font-semi-bold ">FAQs</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
