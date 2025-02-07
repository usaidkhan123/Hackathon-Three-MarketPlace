import Image from "next/image";
import Link from "next/link";
import svg1 from '@/public/images/icn search .icn-xs.svg'
import svg2 from '@/public/images/icn shopping-cart .icn-xs.svg'
import svg3 from '@/public/images/icn menu .icn-xs.svg'
import svg4 from '@/public/images/Vector.svg'
import svg5 from '@/public/images/icn settings icn-xs (1).svg'
import svg6 from '@/public/images/a.svg'
import svg7 from '@/public/images/icn settings icn-xs (2).svg'
import svg8 from '@/public/images/icn settings icn-xs (3).svg'
import svg9 from '@/public/images/icn settings icn-xs (4).svg'
import svg10 from '@/public/images/Vector (1).svg'
import svg11 from '@/public/images/icn settings icn-xs (5).svg'
import svg12 from '@/public/images/icn settings icn-xs (6).svg'
import svg13 from '@/public/images/icn settings icn-xs (7).svg'
import svg14 from '@/public/images/1.svg'
import svg15 from '@/public/images/Register.svg'
const Header = () => {
    return (
        <div>
            <div className="bg-custom h-[58px] sm:w-full flex text-white max-sm:hidden max-md:hidden "> 
            <Image
          src={svg4}
          alt="company logo"
          className="lg:ml-4"
        />
                <p className="text-[14px] font-[] leading-[24px] mt-4 ml-1">(225) 555-0118</p>
                <Image
          src={svg5}
          alt="company logo"
            className="lg:ml-2"
        />
                <p className="text-[14px] font-[] leading-[24px] mt-4  ml-1">michelle.rivera@example.com</p>
                <p className="text-[14px] font-[] leading-[24px] font-bold mt-4 lg:ml-24 xl:ml-72 ">Follow Us  and get a chance to win 80% off</p>
                <p className="text-[14px] font-[] leading-[24px]  mt-4 lg:ml-20  xl:ml-60">Follow Us  :</p>
                <div className="flex space-x-2">
                <Image
          src={svg6}
          alt="company logo"
        />     <Image
        src={svg7}
        alt="company logo"
      />     <Image
      src={svg8}
      alt="company logo"
    />
         <Image
          src={svg9}
          alt="company logo"
        />
        </div>
            </div>








            <div className="flex   mt-8  items-center justify-center justify-items-center">
            <p className=" ml-10 text-[24px] font-[Montserrat] leading-[32px] font-bold">Bandage</p>
            <div className=" flex  max-sm:hidden md:flex">
            <ul className="flex lg:space-x-[30px] lg:ml-36 xl:space-x-[45px] xl:ml-72 sm:ml-24 sm:space-x-[12px] -mt-1">
                <li className=" text-[14px] font-[Montserrat] leading-[45px]  text-gray-600"> <Link href="/pp">Home</Link></li>
                <li  className=" text-[14px] font-[Montserrat] leading-[45px] text-gray-600"><Link href={"/helpcenter"}>Help</Link></li>
                <Image
          src={svg10}
          alt="company logo"
            className="ml-1 "
        />
                <li className=" text-[14px] font-[Montserrat] leading-[45px] text-gray-600"><Link href="/aboutus">About</Link></li>
                <li className=" text-[14px] font-[Montserrat] leading-[45px] text-gray-600"> <Link href={"/pricing"}>Blog</Link></li>
                <li className=" text-[14px] font-[Montserrat] leading-[45px]  text-gray-600"><Link href={"/contact"}>Premium</Link></li>
                <li className=" text-[14px] font-[Montserrat] leading-[45px]  text-gray-600"><Link href={"/team"}>Pages</Link></li>
            </ul>
         </div>
         <div className="flex sm:ml-6 lg:space-x-3 lg:ml-20 xl:ml-36 sm:space-x-2 max-sm:hidden">
          <Image
          src={svg11}
          alt="company logo"
            className="ml-2"
        />
          <Image
          src={svg15}
          alt="company logo"
            className="ml-2"
        />
          <Image
          src={svg14}
          alt="company logo"
            className="ml-2"
        />
        <Link href={"/cart"}>
         <Image
          src={svg12}
          alt="company logo"
            className="ml-2"
        />
        </Link>
          <Image
          src={svg13}
          alt="company logo"
            className="ml-2"
        />
          <Image
          src={svg14}
          alt="company logo"
            className="ml-2"
        /> 
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
        <Link href={"/cart"}>
        <Image
          src={svg3}
          alt="company logo"
          width={24}
          height={24}
         
        />
         </Link>
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
        </div>
    )
}
export default Header;