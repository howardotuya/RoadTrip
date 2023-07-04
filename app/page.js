"use client";
import Image from "next/image";
import rtlogo from "../public/rtlogo.png";
import rtlogosmall from "../public/rtlogo-small.png";
import menu from "../public/menu.png";
import heros from "../public/heros.png";
import close from "../public/close.png";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("sidebar").style.display = "none";
  }, []);

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
              <Link href="#" onClick={popuphandler}>
                About Us
              </Link>
              <Link href="#" onClick={popuphandler}>
                Inside Danfo Bus
              </Link>
              <Link href="#" onClick={popuphandler}>
                Partner With Us
              </Link>
            </div>

            <div>
              <Link href="#" onClick={popuphandler} className="sidebar-cta">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="headerBG w-full">
        <nav className="w-full flex justify-between border-b-4 border-[#231F20]">
          <div className="lg:px-6 px-3 border-r-4 border-[#231F20] flex justify-center items-center">
            <Image
              src={rtlogosmall}
              alt="RoadTrip Community Logo"
              className="block lg:hidden w-[82px] h-[22px]"
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

        <section className=" flex flex-col justify-center items-center">
          <div class="pt-10 pb-8 lg:pb-[58px] px-5 lg:px-[64px] xl:px-0">
            <div className="">
              <Image
                src={heros}
                alt=""
                className="border-[1.404px] lg:border-[5px] border-mblack w-full max-w-[1200px] h-auto offshad"
                quality={100}
                priority
              />
            </div>
            <div className="pt-6 lg:pt-[29px]">
              <p class="block lg:hidden visbymi text-sm leading-[-0.24px]">
                ....where strangers become family
              </p>
              <h2 className="cD700 h2-01">LET’S JOURNEY TOGETHER </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-end pt-1 lg:pt-0">
              <Link
                href=""
                className="bg-grene self-start lg:self-end sf font-semibold text-xs lg:text-base leading-[9.993px] py-4 lg:px-8 px-[13px] uppercase text-white lg:cD600 lg:leading-6"
              >
                Meet the roadtrippers
              </Link>
              <p className="hidden lg:block max-w-[330px] leading-[22px] text-[#111312]">
                Pack your bags, grab a map, and join us on our way to greatness.
                Collaboration, learning and fun awaits at RoadTrip Community
              </p>
              <p className="block lg:hidden tracking-[-0.32px] p-01 pt-7">
                Join RoadTrip, a community of adventure seekers and tech
                enthusiasts, and let us embark on unforgettable journeys
                together
              </p>
            </div>
          </div>
        </section>
      </header>

      <div class="containeris overflow-x-hidden">
        <div
          id="infinite-scroll"
          class="bg-[#231F20] infinite-scroll justify-start text-white flex flex-nowrap whitespace-nowrap gap-[10px] py-[10px] lg:py-6 lg:gap-6"
        >
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
          <div className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></div>
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
          <div className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></div>
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
          <div className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></div>
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
          <div className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></div>
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
          <div className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></div>
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
          <div className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></div>
          <div className="lg:cD500 sf lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
            Design is intelligence made visible
          </div>
        </div>
      </div>
    </>
  );
}
