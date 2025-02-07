import Image from "next/image";
import svg1 from '@/public/images/fixed-height (11).svg'
import svg2 from '@/public/images/fixed-height (12).svg'
import svg3 from '@/public/images/fixed-height (13).svg'
import svg4 from '@/public/images/icon akar-icons-calendar.svg'
import svg5 from '@/public/images/icon ant-design-area-chart-outlined.svg'
import svg6 from '@/public/images/@none.svg'
const Featureds = () => {
    return (
        <div className="justify-items-center text-center mt-20">
            <div className=" justify-items-center text-center ">
                <p className="text-[14px] leading-[24px] mt-[20px] text-custom5b">Practice Advice</p>
                <p className=" text-[40px] leading-[50px] mt-[20px] font-bold">Featured Products</p>
                <p className=" text-[14px] leading-[20px] mt-[10px] text-custom3">Problems trying to resolve the <br />conflict between the two major </p>
            </div>
            <div className="lg:flex lg:space-x-2 xl:space-x-8">
                <div className="lg:flex-col">
            <div className="mt-20 ">
            <Image
          src={svg1}
          alt="company logo"
            className=" "
        />
            </div>
            <div className="  h-[348px] w-[330px] border-[1px] border-black  pl-[25px]">
                <div className="flex  space-x-[15px] pt-[35px]">
                <p className="text-[12px] leading-[16px] text-custom5b">Google</p>
                <p className="text-[12px] leading-[16px]">Trending</p>
                <p className="text-[12px] leading-[16px]">New</p>
                </div>
                <div className="mt-2">
                    <p className="text-[20px] mt-2 leading-[30px]">Loudest a la Madison #1 L <br />integral</p>
                    <p className="mt-4 text-custom4">We focus on ergonomics and meeting <br /> you where you work. It s only a <br /> keystroke away.</p>
                    <div className=" flex">
                    <div className=" flex mt-4">
                    <Image
          src={svg4}
          alt="company logo"
            className=" "
        />
        <p className=" ml-2 text-[12px] leading-[16px] text-custom4">22 April 2021</p>
        </div>
        <div className="flex mt-4">
        <Image
          src={svg5}
          alt="company logo"
            className=" ml-20"
        />
        <p className="ml-2 text-[12px] leading-[16px]  text-custom4">10 comments</p>
        </div>
        </div>
        <div className="mt-4 flex">
            <p className=" text-[14px] leading-[24px] text-custom3">Learn More</p>
            <Image
          src={svg6}
          alt="company logo"
            className=" ml-3"
        />
        </div>
                </div>
            </div> 
            </div>














           <div className="">
            <div className="mt-20">
            <Image
          src={svg2}
          alt="company logo"
            className=" "
        />
            </div>
            <div className="  h-[348px]  w-[330px] border-[1px] border-black  pl-[25px]">
                <div className="flex  space-x-[15px] pt-[35px]">
                <p className="text-[12px] leading-[16px] text-custom5b">Google</p>
                <p className="text-[12px] leading-[16px]">Trending</p>
                <p className="text-[12px] leading-[16px]">New</p>
                </div>
                <div className="mt-2">
                    <p className="text-[20px] mt-2 leading-[30px]">Loudest a la Madison #1 L <br /> integral</p>
                    <p className="mt-4 text-custom4">We focus on ergonomics and meeting <br /> you where you work. It s only a <br /> keystroke away.</p>
                    <div className=" flex">
                    <div className=" flex mt-4">
                    <Image
          src={svg4}
          alt="company logo"
            className=" "
        />
        <p className=" ml-2 text-[12px] leading-[16px] text-custom4">22 April 2021</p>
        </div>
        <div className="flex mt-4">
        <Image
          src={svg5}
          alt="company logo"
            className=" ml-20"
        />
        <p className="ml-2 text-[12px] leading-[16px]  text-custom4">10 comments</p>
        </div>
        </div>
        <div className="mt-4 flex">
            <p className=" text-[14px] leading-[24px] text-custom3">Learn More</p>
            <Image
          src={svg6}
          alt="company logo"
            className=" ml-3"
        />
        </div>
                </div>
            </div>
            </div>












         <div>
            <div className="mt-20">
            <Image
          src={svg3}
          alt="company logo"
            className=" "
        />
            </div>
            <div className="  h-[348px]  w-[330px] border-[1px] border-black pl-[25px]">
                <div className="flex  space-x-[15px] pt-[35px]">
                <p className="text-[12px] leading-[16px] text-custom5b">Google</p>
                <p className="text-[12px] leading-[16px]">Trending</p>
                <p className="text-[12px] leading-[16px]">New</p>
                </div>
                <div className="mt-2">
                    <p className="text-[20px] mt-2 leading-[30px]">Loudest a la Madison #1 L <br /> integral</p>
                    <p className="mt-4 text-custom4">We focus on ergonomics and meeting <br /> you where you work. It s only a <br /> keystroke away.</p>
                    <div className=" flex">
                    <div className=" flex mt-4">
                    <Image
          src={svg4}
          alt="company logo"
            className=" "
        />
        <p className=" ml-2 text-[12px] leading-[16px] text-custom4">22 April 2021</p>
        </div>
        <div className="flex mt-4">
        <Image
          src={svg5}
          alt="company logo"
            className=" ml-20"
        />
        <p className="ml-2 text-[12px] leading-[16px]  text-custom4">10 comments</p>
        </div>
        </div>
        <div className="mt-4 flex">
            <p className=" text-[14px] leading-[24px] text-custom3">Learn More</p>
            <Image
          src={svg6}
          alt="company logo"
            className=" ml-3"
        />
        </div>
                </div>
            </div>
            </div>
            </div>

        </div>
    )
}
export default Featureds;