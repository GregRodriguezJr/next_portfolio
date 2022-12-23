import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 
        ? setShadow(true) : setShadow(false)
    }
    window.addEventListener('scroll', handleShadow);
  },[])
  

  return (
    <div className="fixed w-full h-16 shadow-xl z-[100] bg-[#ecf0f3]" >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
          <h3 className='ml-2'>
            {'< '}G / R{' >'}
          </h3>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                    Home
                </li>
            </Link>
            <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                    Projects
                </li>
            </Link>
            <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                    Skills
                </li>
            </Link>
            <Link href="/#education">
                <li className="ml-10 text-sm uppercase hover:border-b">
                    Education
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
            <Link href='/'>
              <h3 
                className='ml-2'
                onClick={()=> setNav(false)}
              >
                {'< '}G / R{' >'}
              </h3>
            </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase border-t border-gray-300 my-5">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#projects">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="#skills">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="#education">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Education</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
