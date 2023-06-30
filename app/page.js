import Image from 'next/image';
import rtlogo from "../public/rtlogo.png"

export default function Home() {
  return (
    <>
      <header>
        <nav>

        <div className="px-6 border-r-4 ">
          <Image src={rtlogo} alt="RoadTrip Community Logo" className="w-[136px] h-[38.843px]" />
        </div>

        </nav>
      </header>
    </>
  )
}
