import { useState } from "react"
import { Link } from "react-router-dom"
import {AiOutlineClose} from 'react-icons/ai'
import {RiMenuUnfoldFill} from 'react-icons/ri'

 
 const Nav = () => {
    const [menu,setMenu] = useState(false);
    const handleChange = () => {
        
        setMenu(!menu);
        
    };
   return (
    <header className="     h-10  relative z-50 md:fixed py-4 px-4
      from-transparent bg-gradient-to-b bg-slate-50
     shadow shadow-black">
        {/* Desktop nav section  */}
        <nav className=" ">

<div className="hidden overflow-hidden md:flex md:justify-center md:items-center md:gap-8  
 items-center justify-center w-full  text-lg font-mono">
<Link to="/Suits" className=" px-3 font-extrabold rounded">
  SUITS
</Link>
<Link to="/Swag" className=" px-3 font-extrabold rounded">
  SWAG
</Link>

<Link to="/Tradition" className=" px-3 font-extrabold rounded">
  TRADITION
</Link>
<Link to="/Bracelets" className=" px-3  font-extrabold rounded">
  BRACELETS
</Link>
<Link to="/" className=" px-3  font-extrabold  rounded">
  HOME
</Link>
<Link to="/Jews" className=" px-3  font-extrabold rounded">
  JEWELERY
</Link>
<Link to="/Designers" className=" px-3  font-extrabold rounded">
  DESIGNERS
</Link>
<Link to="/Testimonials" className=" px-3 font-extrabold rounded">
  TESTIMONIALS
</Link>
<Link to="/About" className=" px-3 font-extrabold rounded">
  ABOUT
</Link>

</div>


{/* Hamburger Menu Section */}


<div className=" md:hidden flex justify-between  ">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange}  />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange}  />
          )}
            <h1 className=" font-serif text-xl ">LoGo</h1>
        </div>
       




{/* The mobile section */}
<div className={`${menu ? " translate-x-0" : " -translate-x-full"}
  md:hidden overflow-hidden  flex flex-col absolute rounded shadow shadow-orange-600 
        bg-slate-100 text-black from-transparent to-slate-400 
        -left-8 top-16 font-mono text-xl text-center pt-8 pb-4 gap-8
        w-3/4 h-fit transition-transform ease-in-out duration-500`}>
            
            <Link to="/" className=" font-mono text-xl">
            Home
          </Link>
          <Link to="/Suits" className=" font-sans text-xl">
          Suits
          </Link>
          <Link to="/Swag" className=" font-sans text-xl">
            Swag
          </Link>
          <Link to="/Tradition" className=" font-sans text-xl">
            Tradition
          </Link>

          <Link to="/Bracelets" className=" font-sans text-xl">
            Bracelets
          </Link>
          <Link to="/Jews" className=" font-sans text-xl">
            Jewelery
          </Link>
          <Link to="/Designers" className=" font-sans text-xl">
            Designers
          </Link>
          <Link to="/Testimonials" className=" font-sans text-xl">
            Testimonials
          </Link>
          <Link to="/About" className=" font-sans text-xl">
            About
          </Link>
</div>
        </nav>
    </header>
   )
 }
 
 export default Nav