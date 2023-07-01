import Image from "next/image";
import rtlogo from "../public/rtlogo.png";
import rtlogosmall from "../public/rtlogo-small.png";
import menu from "../public/menu.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <div class="block lg:hidden py-[17px] px-6">
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
