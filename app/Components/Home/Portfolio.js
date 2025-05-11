import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="mb-10 mt-36">
      <span
        className="flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2 mb-20"
        id="portfolio"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <RxDragHandleDots2 />
        PORTFOLIO
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-y-10 md:gap-y-28">
        <div
          className="md:col-span-2 w-full rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Image
            src="/Assets/Portfolios/1.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
          {/* <img src={ic1} alt="portfolio" className="w-full rounded-lg" /> */}
        </div>
        <div
          className="w-full rounded-lg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {/* <img src={ic2} alt="portfolio" className="w-full rounded-lg" /> */}
          <Image
            src="/Assets/Portfolios/2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
        <div
          className="w-full rounded-lg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {/* <img src={ic3} alt="portfolio" className="w-full rounded-lg" /> */}
          <Image
            src="/Assets/Portfolios/3.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
        <div
          className="md:col-span-2 w-full rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* <img src={ic4} alt="portfolio" className="w-full rounded-lg" /> */}
          <Image
            src="/Assets/Portfolios/4.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
        <div
          className="md:col-span-2 w-full rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* <img src={ic5} alt="portfolio" className="w-full rounded-lg" /> */}
          <Image
            src="/Assets/Portfolios/5.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
