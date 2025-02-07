import Image from "next/image";
import Link from "next/link";
import svg1 from '@/public/images/icn search .icn-xs.svg'
import svg2 from '@/public/images/icn shopping-cart .icn-xs.svg'
import svg3 from '@/public/images/icn menu .icn-xs.svg'
import svg10 from '@/public/images/Vector (1).svg'
import hsvg from  '@/public/images/sm (1).svg'
import hsvg1 from '@/public/images/technology 1 (1).svg'
import hsvg2 from '@/public/images/icn settings .icn-xl.svg'
import hsvg3 from '@/public/images/Arrow 2.svg'
import Footer from "@/app/components/homepage/footer";

const Contact = () => {
    return (
        <div> <div className="flex  mt-2 items-center justify-center justify-items-center">
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


     


















         <div className="sm:flex">
          <div className=" mt-32 max-sm:items-center  max-sm:justify-center md:ml-10 lg:ml-32 xl:ml-72  max-sm:justify-items-center">
            <p className="text-[16px] leading-[24px] font-bold">CONTACT US</p>
                <p className=" text-[40px] sm:text-[58px] sm:leading-[80px] leading-[50px] sm:text-start text-center mt-4 font-bold">Get in touch <br />today!</p>
                <p className="text-[20px] leading-[30px] text-custom3 text-center sm:text-start font-bold mt-8">We know how large <br className="sm:hidden"/>objects will act <br className="max-sm:hidden"/> but things <br className="sm:hidden" />on a small scale <span className="sm:hidden"> just do  <br className="sm:hidden" /> not act that way.</span></p>
                <p className=" text-[24px] leading-[32px] mt-6 font-bold">Phone  +451 215 215 </p>
                <p className=" text-[24px] leading-[32px] mt-2  font-bold">Fax  +451 215 215 </p>
                <Image
                className=" mt-6"
      src={hsvg}
      alt="company logo"
    />
            </div>
            <div className="max-sm:items-center lg:ml-20 sm:mt-40  md:ml-4 xl:ml-40 max-sm:justify-center  max-sm:justify-items-center mt-10">
            <Image
      src={hsvg1}
      alt="company logo"
    />
            </div>
         </div>







         <div className="  bg-custom2 h-[1500px] sm:h-[800px] sm:justify-items-center sm:items-center sm:justify-center ">
          <div className=" pt-10">
            <p className="text-[14px] leading-[24px] font-bold text-center mt-16">VISIT OUR OFFICE</p>
            <p className=" text-[40px] leading-[50px] font-bold text-center mt-6">We help small <br /> businesses <br /> with big ideas</p>
          </div>
          <div className=" lg:flex md:justify-items-center md:items-center">
          <div className="items-center justify-items-center ">
          <div className=" w-[300px] h-[333px] bg-white mt-6 pt-10 items-center justify-center justify-items-center">
          <Image
      src={hsvg2}
      alt="company logo"
      className=""
    />
    <p className="text-[14px] leading-[24px] font-bold text-center  mt-6">georgia.young@example.com</p>
    <p className="text-[14px] leading-[24px] font-bold text-center mt-1">georgia.young@ple.com</p>
    <p className=" text-[16px] leading-[24px] font-bold mt-6">Get Support</p>
    <button className=" w-[157px] h-[44px] rounded-[5px] mt-4 text-custom5b border-custom5b border-[1px] text-[14px] leading-[24px] font-bold text-center">Submit Request</button>
            </div>
            </div>
            <div className="items-center justify-items-center ">
          <div className=" w-[300px] h-[333px] md:h-[380px] bg-custom6b mt-6 pt-10 items-center justify-center justify-items-center">
          <Image
      src={hsvg2}
      alt="company logo"
      className=""
    />
    <p className="text-[14px] leading-[24px] font-bold text-center text-white  mt-6">georgia.young@example.com</p>
    <p className="text-[14px] leading-[24px] font-bold text-center text-white mt-1">georgia.young@ple.com</p>
    <p className=" text-[16px] leading-[24px] font-bold text-white mt-6">Get Support</p>
    <button className=" w-[157px] h-[44px] rounded-[5px] mt-4 text-custom5b border-custom5b border-[1px] text-[14px] leading-[24px] font-bold text-center">Submit Request</button>
            </div>
            
         </div>
         <div className="items-center justify-items-center ">
          <div className=" w-[300px] h-[333px] bg-white mt-6 pt-10 items-center justify-center justify-items-center">
          <Image
      src={hsvg2}
      alt="company logo"
      className=""
    />
    <p className="text-[14px] leading-[24px] font-bold text-center  mt-6">georgia.young@example.com</p>
    <p className="text-[14px] leading-[24px] font-bold text-center mt-1">georgia.young@ple.com</p>
    <p className=" text-[16px] leading-[24px] font-bold mt-6">Get Support</p>
    <button className=" w-[157px] h-[44px] rounded-[5px] mt-4 text-custom5b border-custom5b border-[1px] text-[14px] leading-[24px] font-bold text-center">Submit Request</button>
            </div>
            </div>
            </div>
            </div>

  










         <div className="mt-32 items-center justify-center justify-items-center">
          <Image
      src={hsvg3}
      alt="company logo"
     
    />
    <p className=" text-[16px] leading-[24px] font-bold text-center mt-2">WE Cant WAIT TO MEET YOU</p>
          <p className="text-[58px] leading-[80px] font-bold text-center mt-2">Lets Talk</p>
    <button className=" w-[186px] h-[52px] rounded-[5px] mt-6 text-white  bg-custom5b text-[14px] leading-[22px] font-bold text-center">Try it free now</button>
                   </div>


                   <Footer></Footer>
</div>
    )
}
export default Contact ;