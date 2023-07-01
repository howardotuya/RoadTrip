"use client"
import Image from "next/image";
import rtlogo from "../public/rtlogo.png";
import rtlogosmall from "../public/rtlogo-small.png";
import menu from "../public/menu.png";
import close from "../public/close.png";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("sidebar").style.display = "none"
  }, [])

  const popuphandler = () => {
    const popup = document.getElementById("sidebar");

    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
  };

  return (
    <>
      <nav
        id="sidebar"
        className="z-50 hidden sidebar justify-end items-end overflow-hidden"
      >
        <div
          id="sidebar-container"
          className="bg-white overflow-scroll lg:overflow-hidden flex flex-col"
        >
          <div className="border-b-[3px] border-[#231F20] flex justify-between items-center">
            <div className="px-3">
              <h2 className="tracking-[-0.32px] font-semibold sf">Menu</h2>
            </div>
            <div className="border-[#231F20] border-l-[3px] py-4 px-6">
              <Image
                src={close}
                alt="close logo"
                className="w-8 h-8" 
                quality={100}
                priority 
                onClick={popuphandler}
              />
            </div>
          </div>

          <div className="h-full justify-between flex flex-col">

            <div class="sidebar-text flex flex-col">
              <Link href="#" onClick={popuphandler}>About Us</Link>
              <Link href="#" onClick={popuphandler}>Inside Danfo Bus</Link>
              <Link href="#" onClick={popuphandler}>Partner With Us</Link>
            </div>

            <div><Link href="#" onClick={popuphandler} className="sidebar-cta">Donate</Link></div>

          </div>

        </div>
      </nav>

      <header className="headerBG">
        <nav className="w-full  flex justify-between border-b-4 border-[#231F20]">
          <div className="lg:px-6 px-3 border-r-4 border-[#231F20] flex justify-center items-center">
            <Image
              src={rtlogosmall}
              alt="RoadTrip Community Logo"
              className="block lg:hidden  w-[88px] h-[22px]"
              quality={100}
              priority
            />
            <Image
              src={rtlogo}
              alt="RoadTrip Community Logo"
              className="hidden lg:block w-[136px] h-[38.843px]"
              quality={100}
              priority
            />
          </div>

          <div class="flex flex-row items-center justify-center border-l-4 border-[#231F20]">
            <div class="hidden lg:flex flex-row items-center justify-center gap-6 font-medium pl-9 pr-8">
              <div>About</div>
              <div className="w-[7px] h-[7px] rounded-full bg-[#231f20]"></div>
              <div>Inside Danfo Bus</div>
              <div className="w-[7px] h-[7px] rounded-full bg-[#231f20]"></div>
              <div>Partner With Us</div>
            </div>
            <div class="hidden lg:flex">
              <Link
                href="#"
                className="cD600 bg-[#231F20]  text-[#F9F4E8] py-5 pl-16 shrink-0 flex pr-7"
              >
                Donate 
              </Link>
            </div>
            <div onClick={popuphandler} class="block lg:hidden py-[17px] px-6">
              <Image
                src={menu}
                alt="RoadTrip Community Logo"
                className="block lg:hidden w-8 h-8"
                quality={100}
                priority
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
