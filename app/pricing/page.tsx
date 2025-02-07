import Image from "next/image";
import svg1 from '@/public/images/icn search .icn-xs.svg'
import svg2 from '@/public/images/icn shopping-cart .icn-xs.svg'
import svg3 from '@/public/images/icn menu .icn-xs.svg'
import svg16 from '@/public/images/Vector (3).svg'
import svg10 from '@/public/images/Vector (1).svg'
import hsvg1 from '@/public/images/form-check-input.svg'
import Link from "next/link";
import hsvg2 from "@/public/images/col-md-4.svg"
import hsvg3 from "@/public/images/col-md-4 (2).svg"
import hsvg4 from "@/public/images/col-md-4 (3).svg"
import svg14 from '@/public/images/row (6).svg'
import svg15 from '@/public/images/row (7).svg'
import Footer from "@/app/components/homepage/footer";
import hsvg from '@/public/images/sm.svg'

const Pricing = () => {
    return (
        <div>
             <div className="flex  mt-2 items-center justify-center justify-items-center">
            <p className="  text-[24px] font-[Montserrat] leading-[32px] sm:ml-6 font-bold">Bandage</p>
            <div className=" flex  max-sm:hidden md:flex">
            <ul className="flex lg:space-x-[20px] lg:ml-40 xl:space-x-[45px] xl:ml-72 mt-1 sm:ml-14 sm:space-x-[12px] ">
            <li className=" text-[14px] font-[Montserrat] leading-[45px]  text-gray-600">Home</li>
                <li  className=" text-[14px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/pp"}>Shop</Link></li>
                <Image
          src={svg10}
          alt="company logo"
            className="ml-1 "
        />
                <li className=" text-[14px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/aboutus"}>About </Link></li>
                <li className=" text-[14px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/team"}>Team</Link></li>
                <li className=" text-[14px] font-[Montserrat] leading-[45px]  text-gray-600"><Link href={"/contact"}>Contact</Link></li>
                <li className=" text-[14px] font-[Montserrat] leading-[45px]  text-gray-600"><Link href={"/plp"}>Pages</Link></li>
            </ul>
            <p className="text-[14px] leading-[22px] font-bold mt-4 text-custom5b ml-28 sm:ml-10 xl:ml-44 ">Login</p>
            <button className="w-[214px] h-[52px] bg-custom5b font-bold rounded-[5px] text-white ml-10 sm:ml-10">Become a member</button>
         </div>
            <div className="flex space-x-8 ml-[50px] sm:hidden">
            <Image
          src={svg1}
          alt="company logo"
          width={24}
          height={24}
        />
        <Image
          src={svg2}
          alt="company logo"
          width={24}
          height={24}
        />
        <Image
          src={svg3}
          alt="company logo"
          width={24}
          height={24}
        />
        </div>
         </div>
         <div className=" justify-items-center mt-16 space-y-[30px] sm:hidden">
            <ul>
                <li className=" text-[30px] font-[Montserrat] leading-[45px]  text-gray-600">Home</li>
                <li  className=" text-[30px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/pp"}>Product</Link></li>
                <li className=" text-[30px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/pricing"}>Pricing</Link> </li>
                <li className=" text-[30px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/contact"}>Contact</Link></li>
            
            </ul>
         </div>






         <div>
            <div className="items-center justify-center justify-items-center mt-20">
                <p className=" text-[16px] leading-[24px] font-bold text-custom3">PRICING</p>
                <p className="text-[30px] sm:text-[58px] leading-[80px] font-bold">SUBSCRIPTION</p>
            <div className="flex space-x-4">
         <p className=" font-bold text-[14px] leading-[24px]">Home </p>
          <Image
          src={svg16}
          alt="company logo"
        />
          <p className="text-custom4 font-bold text-[14px] leading-[24px]">Shop</p>
          </div>
        </div>
         </div>








         <div className=" bg-custom2  items-center justify-center justify-items-center pt-32">
            <div className="">
            <p className="text-[40px]  leading-[80px] font-bold text-center ">Pricing</p>
            <p className=" text-[14px] leading-[20px] text-custom3 text-center">Problems trying to resolve <br className="sm:hidden"/>the conflict between the two major <br className="sm:hidden"/>realms of Classical physics:<br className="sm:hidden"/> Newtonian mechanics </p>
            <div className="flex space-x-1 mt-10 items-center justify-center justify-items-center lg:space-x-10">
                <p className=" text-[16px] leading-[24px] font-bold mt-2">Monthly</p>
                <Image
          src={hsvg1}
          alt="company logo"
       
        />
           <p className=" text-[16px] leading-[24px] font-bold mt-2">Yearly</p>
              <button className="w-[109px] h-[44px] bg-custom6a text-[14px] leading-[24px] font-bold rounded-[37px]">Save 25%</button>  
            </div>
            </div>
         </div>





         <div className="space-y-6 mt-20 lg:flex items-center justify-center justify-items-center mb-20">
         <Image
          src={hsvg2}
          alt="company logo"
          width={300}
          height={300}       
        /> <Image
        src={hsvg3}
        alt="company logo"
        width={300}
        height={300} 
      /> <Image
      src={hsvg4}
      alt="company logo"
      width={300}
      height={300} 
    />

         </div>

        <div className="bg-custom2 ">
            <div className=" items-center justify-center justify-items-center pt-6">
            <p className=" text-[20px] leading-[30px] text-center font-bold ">Trusted By Over 4000 <br className="sm:hidden" /> Big Companies</p>
            </div>
            <div className="items-center justify-center justify-items-center">
            <Image
      src={svg14}
      alt="company logo"
    className="sm:hidden"
    />
    <Image
      src={svg15}
      alt="company logo"
    className="max-sm:hidden"
    />
            </div>
        </div>























<div className=" items-center justify-center justify-items-center place-content-center">
    <div className="pt-24 items-center justify-center justify-items-center place-content-center">
        <p className="text-[40px] leading-[50px] font-bold text-center">Start your <br className="sm:hidden"/> 14 days free trial</p>
        <p className="text-[14px] mt-6 leading-[20px] text-custom4 text-center">Met minim Mollie non desert Alamo est sit <br className="sm:hidden"/>cliquey dolor do met sent. RELIT official<br className="sm:hidden"/> consequent.</p>
        <button className="w-[186px] h-[52px] text-[14px]  leading-[22px] font-bold text-white rounded-[5px] ml-10 mt-8 bg-custom5b">Try it free now</button>
        <Image
      src={hsvg}
      alt="company logo"
    className=" mt-4"
    />
    </div>
</div>








      <Footer></Footer>
         </div>


    )
}
export default Pricing;