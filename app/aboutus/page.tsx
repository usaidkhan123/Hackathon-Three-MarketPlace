import Image from "next/image";
import Link from "next/link";
import svg1 from '@/public/images/icn search .icn-xs.svg'
import svg2 from '@/public/images/icn shopping-cart .icn-xs.svg'
import svg3 from '@/public/images/icn menu .icn-xs.svg'
import svg4 from '@/public/images/technology 1.svg'
import svg10 from '@/public/images/Vector (1).svg'
import svg5 from '@/public/images/Video card.svg'
import svg6 from '@/public/images/media bg-cover (2).svg'
import svg7 from '@/public/images/media.svg'
import svg8 from '@/public/images/social media (1).svg'
import svg9 from '@/public/images/media (1).svg'
import svg11 from '@/public/images/media (2).svg'
import svg12 from '@/public/images/row (3).svg'
import svg13 from '@/public/images/row (4).svg'
import Footer from "@/app/components/homepage/footer";
const Header = () => {
    return (
        <div>
                 <div className="flex  mt-2 md:items-center md:justify-center md:justify-items-center">
            <p className="  text-[24px] font-[Montserrat] leading-[32px] font-bold">Bandage</p>
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
            <p className="text-[14px] leading-[22px] font-bold mt-4 text-custom5b ml-20 sm:ml-10 xl:ml-44 ">Login</p>
            <button className="w-[214px] h-[52px] bg-custom5b font-bold rounded-[5px] text-white ml-10 sm:ml-4">Become a member</button>
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






          <div className=" sm:flex items-center justify-center justify-items-center md:space-x-20 lg:space-x-52">
            <div className=" mt-32 items-center justify-center justify-items-center">
                <p className=" text-[40px] leading-[50px] font-bold">ABOUT US</p>
                <p className="text-[20px] leading-[30px] text-custom3 text-center font-bold mt-8">We know how large <br />objects will act, but things <br />on a small scale just do <br /> not act that way.</p>
                <button className="w-[195px] h-[52px] bg-custom5b font-bold rounded-[5px] text-[14px] leading-[22px] text-white mt-8">Get Quote Now</button>
            </div>
            <div className="mt-10">
            <Image
          src={svg4}
          alt="company logo"
        />
        </div>
          </div>
















          <div className="items-center justify-items-center sm:flex xl:pl-60">
            <div className=" md:ml-16 sm:ml-10 max-sm:items-center max-sm:justify-center max-sm:justify-items-center">
            <p className="text-[14px] leading-[20px] mt-36 text-red-600">Problems trying</p>
            <p className="text-[24px] leading-[32px] font-bold text-center mt-12 sm:text-start ">Met minim Mollie non <br className="sm:hidden"/> desert <br className="max-sm:hidden "/> Alamo est sit <br className="sm:hidden" /> cliquey dolor do  <br className="max-sm:hidden" /> met sent.</p>
            </div>
            <div className="md:ml-24  md:mt-32">
            <p className="text-[14px] leading-[20px] text-custom4 text-center mt-12">Problems trying to resolve the conflict between the two major realms <br className="max-sm:hidden"/> of Classical physics: Newtonian mechanics </p>
            </div>
          </div>













          <div className=" items-center justify-center justify-items-center pt-32 space-y-8 sm:flex sm:space-x-0 md:space-x-20 xl:space-x-32">
            <div>
                <p className="font-bold text-[58px] leading-[80px] lg:mt-6 md:mt-6 ">15K</p>
                <p className=" text-[16px] leading-[24px] font-bold">Happy Customers</p>
            </div>
            <div>
                <p className="font-bold text-[58px] leading-[80px] ">150K</p>
                <p className=" text-[16px] leading-[24px] font-bold">Monthly Visitors</p>
            </div>
            <div>
                <p className="font-bold text-[58px] leading-[80px]   ">150k</p>
                <p className=" text-[16px] leading-[24px] font-bold">Countries Worldwide</p>
            </div>
            <div>
                <p className="font-bold text-[58px] leading-[80px] ">100+</p>
                <p className=" text-[16px] leading-[24px] font-bold">Top Partners</p>
            </div>
          </div>






















          <div className=" items-center justify-center justify-items-center mt-20">
          <Image
          src={svg5}
          alt="company logo"
          className="sm:hidden"
        />
        <Image
          src={svg6}
          alt="company logo"
          className="max-sm:hidden"
        />
          </div>







          <div>
            <div className="items-center justify-center justify-items-center">
                <p className="text-center text-[40px] leading-[50px] font-bold mt-10 ">Meet Our <br className="sm:hidden "/> Team</p>
                <p className="text-center text-[14px] leading-[20px] text-custom3 mt-6">Problems trying to resolve <br className="sm:hidden"/>the conflict between <br className="max-sm:hidden"/> the two major <br className="sm:hidden"/>realms of Classical physics:<br className="sm:hidden"/> Newtonian mechanics </p>
            </div>
            <div className=" lg:flex  md:space-x-6 items-center justify-items-center justify-center">
            <div className="mt-6 items-center justify-center justify-items-center">
            <Image
          src={svg7}
          alt="company logo"
          className=""
        />
        <div className=" h-[172px] w-[316px] items-center justify-items-center space-y-2 pt-8">
            <p className="text-[16px] leading-[24px] font-bold">Username</p>
            <p className="text-[16px] leading-[24px] font-bold text-custom3">Profession</p>
            <Image
          src={svg8}
          alt="company logo"
          className=""
        />
        </div>
            </div>
            <div className="mt-6 items-center justify-center justify-items-center">
            <Image
          src={svg9}
          alt="company logo"
          className=""
        />
        <div className=" h-[172px] w-[316px] items-center justify-items-center space-y-2 pt-8">
            <p className="text-[16px] leading-[24px] font-bold">Username</p>
            <p className="text-[16px] leading-[24px] font-bold text-custom3">Profession</p>
            <Image
          src={svg8}
          alt="company logo"
          className=""
        />
        </div>
            </div>
            <div className="mt-6 items-center justify-center justify-items-center">
            <Image
          src={svg11}
          alt="company logo"
          className=""
        />
        <div className=" h-[172px] w-[316px] items-center justify-items-center space-y-2 pt-8">
            <p className="text-[16px] leading-[24px] font-bold">Username</p>
            <p className="text-[16px] leading-[24px] font-bold text-custom3">Profession</p>
            <Image
          src={svg8}
          alt="company logo"
          className=""
        />
        </div>
            </div>
            
            </div>
          </div>













        <div className="bg-custom2 ">
            <div>
                <h1 className="text-[40px] pt-[50px] leading-[50px] font-bold text-center">Big <br className="sm:hidden"/>Companies <br className="sm:hidden"/>Are Here</h1>
                <p className="text-center text-[14px] leading-[20px] text-custom3 mt-6">Problems trying to resolve <br className="sm:hidden"/>the conflict between <br className="max-sm:hidden"/> the two major <br className="sm:hidden"/>realms of Classical physics:<br className="sm:hidden"/> Newtonian mechanics </p>
            </div>
            <div>
                <div className="items-center justify-items-center justify-center">
            <Image
          src={svg12}
          alt="company logo"
          className="sm:hidden"
        /> 
        </div>
        <div className="items-center justify-items-center justify-center">
        <Image
          src={svg13}
          alt="company logo"
          className="max-sm:hidden"
        />
</div>
            </div>
        </div>

          <Footer></Footer>
        </div>
    )
}
export default Header;