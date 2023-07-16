"use client";
import Image from "next/image";
import rtlogo from "../public/rtlogo.png";
import rtlogosmall from "../public/rtlogo-small.png";
import menu from "../public/menu.png";
import heros from "../public/heros.png";
import close from "../public/close.png";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const scrollingDivRef = useRef(null);

  useEffect(() => {
    document.getElementById("sidebar").style.display = "none";
    // Get the container and content elements
    const container = document.querySelector(".scroll-container");
    const content = document.querySelector(".scroll-content");

    // Set the scroll amount and interval time
    const scrollAmount = 1; // Adjust this value to control the scroll speed

    // Clone the content and append it to the container
    container.appendChild(content.cloneNode(true));

    // Function to scroll the content horizontally
    function scrollHorizontally() {
      container.scrollLeft += scrollAmount;

      if (container.scrollLeft >= content.offsetWidth) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scrollHorizontally);
    }

    scrollHorizontally();
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
              <h2 className="tracking-[-0.32px] font-semibold cD600">Menu</h2>
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

      <main>
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
              <div
                onClick={popuphandler}
                class="block lg:hidden py-[17px] px-6"
              >
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
                  className="bg-grene self-start lg:self-end cD600 font-semibold text-xs lg:text-base leading-[9.993px] py-4 lg:px-8 px-[13px] uppercase text-white lg:cD600 lg:leading-6"
                >
                  Meet the roadtrippers
                </Link>
                <p className="hidden lg:block max-w-[330px] leading-[22px] text-[#111312]">
                  Pack your bags, grab a map, and join us on our way to
                  greatness. Collaboration, learning and fun awaits at RoadTrip
                  Community
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

        <div
          ref={scrollingDivRef}
          id="containeris"
          class="bg-[#231F20] flex scroll-container overflow-x-hidden"
        >
          <div class=" scroll-content">
            <div class="bg-[#231F20] justify-start text-white flex flex-nowrap whitespace-nowrap gap-[10px] py-[10px] lg:py-6 lg:gap-6">
              <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
                Design is intelligence made visible
              </p>
              <p className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>

              <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
                Design is intelligence made visible
              </p>
              <p className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>

              <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
                Design is intelligence made visible
              </p>
              <p className="w-[5px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>

              <p className="cD600 lg:cD500 lg:text-[40px] leading-[34px] font-semibold lg:font-medium lg:leading-[84px]">
                Design is intelligence made visible
              </p>
              <p className="w-[5px] lg:mr-6 mr-[10px] h-[5px] lg:w-3 lg:h-3 rounded-full bg-white flex flex-shrink-0 justify-center items-center self-center"></p>
            </div>
          </div>
        </div>

        <section class="bg-[#E7A6D5] lg:border-t-4 lg:border-b-4 border-t border-b border-[#231F20]">
          <div className=" bodyCon">
            <div class="lg:py-[74px] lg:px-[120px] py-10 px-8">
              <p class="text-2xl hidden lg:block lg:text-[56px] lg:leading-[84px] uppercase cD400 text-center">
                WE AT <span class="cD600">“RoadTrip Community”</span> believe
                that growth is a <span class="cD600">marathon</span>, not a
                sprint. THAT IS WHAT OUR NAME{" "}
                <span class="cD600">SYMBOLIZES</span>; OUR journey of growth,
                progress, and community support.
              </p>
              <p class="text-2xl block lg:hidden lg:text-[56px] lg:leading-[84px] uppercase cD400 text-center leading-normal">
                The name <span class="cD600">“RoadTrip”</span> for the community
                was coined from the <span class="cD600">understanding</span>{" "}
                that <span class="cD600">life’s race is not a sprint</span> but
                rather a <span class="cD600">marathon.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="conntianer px-[12px] lg:px-[120px] py-[48px] lg:py-[72px]">
          <div className="blue offshadblack bg-[#6868AC] lg:bg-[#4D34CC] border lg:border-[3px] border-[#231F20] p-[10px] lg:p-4 text-white">
            <div class="border lg:border-[3px] border-white px-6 lg:px-20 py-[38px] lg:py-[60px] flex flex-col gap-10">
              <p class="hidden lg:block text-2xl leading-10 text-center">
                RoadTrip Community is a diverse group where designers come
                together to connect, collaborate and grow. We are also welcoming
                to no-code developers, web developers, software developers,
                product managers, writers.
              </p>
              <p class="block lg:hidden leading-normal p-01 text-center">
                RoadTrip Community is home to Product Designers, UI/UX
                Designers, Brand Designers, No-code Developers, Web Developers,
                Software Developers, Product Managers, Illustrators, Motion
                Design enthusiasts, UX Writers and lots of Entrepreneurs.
              </p>
              <div class="slotc">
                <div class="lg:bg-[#198046] bg-[#47996B] slot p-1 order-3 lg:order-none lg:p-[7px] text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                  <div class="lg:py-[9px] w-full py-1 border-[0.587px] border-[#FFF]">
                    Design
                  </div>
                </div>
                <div class="bg-[#F6B847] slot p-1 lg:p-[7px] order-4 lg:order-none text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                  <div class="lg:py-[9px] w-full py-1 border-[0.587px] border-[#231f20] text-[#231f20]">
                    Tech
                  </div>
                </div>
                <div class="bg-[#231f20] order-1 lg:order-none slot p-1 lg:p-[7px] text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                  <div class="lg:py-[9px] w-full py-1 border-[0.587px] border-[#D0CCE0] lg:border-[#FFF]">
                    Product
                  </div>
                </div>
                <div class="lg:bg-[#fff] bg-[#D0CCE0] slot p-1 order-2 lg:order-none lg:p-[7px] text-center cD600 lg:text-[22px] text-xs tracking-[-0.48px] lg:tracking-[-0.88px]">
                  <div class="lg:py-[9px] w-full py-1 border-[0.587px] border-[#231f20] text-[#231f20]">
                    Brand
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="forTwoColor w-full justify-between pt-3 lg:pt-12 flex flex-col lg:flex-row lg:gap-5 gap-3">
            <div class="offshadblack2 w-full border-[3px] border-[#231f20] lg:p-4 p-[10px] bg-[#F6B847]">
              <div class=" border-[3px] border-[#231f20] pt-[38px] lg:pt-[89px] px-6 pb-6">
                <div class="relative flex">
                  <h2 class="cD600 text-[#231f20] z-50 text-[40px] lg:text-[64px] tracking-[-0.64px]">Who We Are</h2>
                  <h2 class="cD600 text-[#fff] absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[40px] lg:text-[64px] z-10 tracking-[-0.64px]">Who We Are</h2>
                </div>
                <p class="manr text-xs lg:text-base">
                  We are a community of creatives from Nigeria and Africa,
                  collectively supporting one another in building a successful
                  career in the Design & Tech space.
                </p>
              </div>
            </div>
            <div class="offshadblack2 w-full border-[3px] border-[#231f20] lg:p-4 p-[10px] bg-[#47996B] lg:bg-[#198046]">
              <div class=" border-[3px] border-[#231f20] pt-[38px] lg:pt-[89px] px-6 pb-6">
                <div class="relative flex">
                  <h2 class="cD600 text-[#fff] z-50 text-[40px] lg:text-[64px] tracking-[-0.64px]">Our Mission</h2>
                  <h2 class="cD600 text-[#231f20] absolute top-[2px] left-[2px] lg:top-1 lg:left-1 text-[40px] lg:text-[64px] z-10 tracking-[-0.64px]">Our Mission</h2>
                </div>
                <p class="text-white manr text-xs lg:text-base">
                  We are a community of creatives from Nigeria and Africa,
                  collectively supporting one another in building a successful
                  career in the Design & Tech space.
                </p>
              </div>
            </div>
          </div>
          <div className="forCTA"></div>
        </section>
      </main>
    </>
  );
}
