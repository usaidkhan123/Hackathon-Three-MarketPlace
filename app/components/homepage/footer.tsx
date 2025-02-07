import Image from "next/image";
import svg1 from '@/public/images/social media.svg'
import svg2 from '@/public/images/container.svg'
const Footer = () => {
    return(
        <div>
            <div className="h-[173px] bg-custom5c pt-[60px] lg:flex mt-20">
            <p className=" ml-10 sm:ml-80 lg:ml-[100px] xl:ml-[150px] text-[24px] font-[Montserrat] leading-[32px]  font-bold">Bandage</p>
            <Image
          src={svg1}
          alt="company logo"
            className="mt-8 ml-8 sm:ml-80 lg:ml-[600px] xl:ml-[850px] lg:-mt-[70px]"
        />
            </div>

            <div>
                <div className="lg:flex space-x-20 lg:space-x-3 xl:space-x-32">
                    <div className="sm:flex">
                <div className="space-y-[10px] mt-10 ml-10 lg:ml-4 xl:ml-32">
                    <h1 className=" font-bold text-[16px] leading-[24px]">Company Info</h1>
                    <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                    <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
                </div>

                <div className="space-y-[10px] mt-10 ml-10">
                    <h1 className=" font-bold text-[16px] leading-[24px]">Legal</h1>
                    <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                    <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
                </div>

                <div className="space-y-[10px] mt-10 ml-10">
                    <h1 className=" font-bold text-[16px] leading-[24px]">Features</h1>
                    <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                    <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
                </div>
                

                <div className="space-y-[10px] mt-10 ml-10">
                    <h1 className=" font-bold text-[16px] leading-[24px]">Resource</h1>
                    <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                    <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
                </div>
                 
                <div className="space-y-[10px] mt-10 ml-10">
                    <h1 className=" font-bold text-[16px] leading-[24px]">Company Info</h1>
                    <p className=" text-custom3 font-bold text-[14px] leading-[24px]">About Us</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Carrier</p>
                    <p  className="text-custom3 font-bold text-[14px] leading-[24px]">We are hiring</p>
                    <p className="text-custom3 font-bold text-[14px] leading-[24px]">Blog</p>
                </div>
                </div>
                <div className="mt-10 ">
                <h1 className=" font-bold text-[16px] leading-[24px]">Get In Touch</h1>
                <div className="flex mt-4">
                <div className="bg-custom2 text-custom3 pt-[15px] text-[14px] leading-[28px] text-center h-[58px] rounded-[5px] w-[204px] ">Your Email</div>
                <button className="bg-custom5b text-[14px] text-white leading-[28px] w-[120px] rounded-[5px]"> Subscribe</button>
                </div>
                </div>
</div>
                <div className="mt-4">
                <Image
          src={svg2}
          alt="company logo"
            className="md:hidden"
        />
                </div>
                <div className="bg-custom2 h-[74px] text-center pt-6 font-bold max-sm:hidden">
                    <p className="text-custom4">Made With Love By Finland All Right Reserved </p>
                </div>
            </div>
        </div>
    )
}
export default Footer ;