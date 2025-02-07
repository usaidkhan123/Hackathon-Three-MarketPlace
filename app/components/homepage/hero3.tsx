import Image from "next/image";
import svg1 from '@/public/images/col-md-6.svg';
import svg2 from '@/public/images/hero-cover-1.svg'
const Hero3 = () => {
    return (

        <div className="pt-[88px]">
            <div className="lg:flex">
            <div>
            <Image
          src={svg2}
          alt="company logo"
            className="max-sm:hidden max-lg:hidden  sm:ml-20 "
        />
            </div>
            <div className="justify-items-center lg:mt-28 xl:mt-48">
                <p className="text-[16px] leading-[24px] text-custom4 xl:ml-24 font-bold">SUMMER 2020</p>
                <h1 className=" text-[40px] leading-[50px] font-bold items-center  xl:ml-24 text-center justify-center">Part of the <br className="sm:hidden max-lg:hidden" />Neural <br /> Universe</h1>
                <p className="text-[20px] leading-[30px] max-md:items-center  xl:ml-24 max-md:text-center max-md:justify-center  text-custom4 mt-4 ">We know how large  <br />  objects will act, but <br />things on a small scale.</p>
                <div className=" xl:flex ">
                <button className="text-[14px] text-white bg-custom5b leading-[22px] ml-20 md:-ml-6 lg:ml-32 font-bold mt-4 w-[156px] h-[52px] rounded-[5px]">BUY NOW</button>
                <button className="text-[14px] text-custom5b xl:ml-8 bg-white leading-[22px] md:ml-6 ml-20 lg:ml-32 font-bold  mt-4 w-[165px] h-[52px] border-custom5b border-[1px] rounded-[5px]">Learn More</button>
                </div>
            </div>
            </div>
            <div>
            <Image
          src={svg1}
          alt="company logo"
            className=" mt-10 md:hidden"
        />
            </div>

        </div>
    )
}
export default Hero3;