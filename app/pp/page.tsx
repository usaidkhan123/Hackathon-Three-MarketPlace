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
import svg16 from '@/public/images/Vector (3).svg'
import hsvg1 from '@/public/images/carousel 2.svg'
import hsvg2 from '@/public/images/stars.svg'
import hsvg3 from '@/public/images/product-colors (1).svg'
import hsvg4 from '@/public/images/hr.svg'
import hsvg5 from '@/public/images/like.svg'
import hsvg6 from '@/public/images/basket.svg'
import hsvg7 from '@/public/images/more.svg'
import hsvg8 from '@/public/images/col-md-6 (1).svg'
import hsvg9 from '@/public/images/card-item (7).svg'
import hsvg10 from '@/public/images/Vector (5).svg'
import hsvg12 from '@/public/images/fixed-height (14).svg'
import hsvg13 from '@/public/images/fixed-height (15).svg'
import hsvg14 from '@/public/images/fixed-height (17).svg'
import hsvg15 from '@/public/images/fixed-height (18).svg'
import hsvg16 from '@/public/images/product-cover-5 (1).svg'
import hsvg17 from '@/public/images/fixed-height (19).svg'
import svg21 from '@/public/images/mobile-clients-1.svg'
import svg23 from '@/public/images/container (1).svg'
import Footer from "@/app/components/homepage/footer";
const Hero = () => {
    return (
        <div>
            <div className="bg-custom5d h-[58px] sm:w-full flex text-white max-sm:hidden max-md:hidden"> 
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
                <p className="text-[14px] font-[] leading-[24px]  mt-4 lg:ml-20 xl:ml-60">Follow Us  :</p>
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








            <div className="flex   mt-8">
            <p className=" ml-10 text-[24px] font-[Montserrat] leading-[32px] font-bold">Bandage</p>
            <div className=" flex  max-sm:hidden">
            <ul className="flex lg:space-x-[30px] lg:ml-36 xl:space-x-[45px] xl:ml-72 sm:ml-24 sm:space-x-[12px] -mt-1">
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
         </div>
         <div className="flex sm:ml-6 lg:space-x-3 lg:ml-20 xl:ml-44 sm:space-x-2 max-sm:hidden">
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
          <Image
          src={svg12}
          alt="company logo"
            className="ml-2"
        />
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





        {/* Hero Secrtion */}




         <div>
            <div className="bg-custom5c mt-32  pt-10 ">
            <div className="flex space-x-4 items-center justify-items-center place-content-center place-items-center justify-center">
          <p className=" font-bold text-[14px] leading-[24px]">Home </p>
          <Image
          src={svg16}
          alt="company logo"
        />
          <p className="text-custom4 font-bold text-[14px] leading-[24px]">Shop</p>
          </div>
          <div className="xl:flex md:flex   md:justify-items-start md:items-center md:justify-center xl:justify-items-start xl:items-center xl:justify-center">
          <div className="items-center justify-items-center">
          <Image
          src={hsvg1}
          alt="company logo"
          className="mt-36 sm:hidden"
        />
        <Image
          src={hsvg8}
          alt="company logo"
          className="max-sm:hidden mt-10"
        />
          </div>
          <div>
          <div className="items-start justify-items-start justify-start place-content-start pl-[30px]">
            <p className=" text-[20px] leading-[30px] xl:-mt-8 sm:-mt-8 md:-mt-8 mt-8">Floating Phone</p>
            <div className="flex mt-2">
            <Image
          src={hsvg2}
          alt="company logo"
          className=" "
        />
        <p className=" ml-[10px] text-custom4 text-[14px] leading-[24px] font-bold">10 Reviews</p>
        </div>
          </div>
          <div className="pl-[30px] space-y-3">
            <p className="text-[24px] leading-[32px] font-bold">$1,139.33</p>
            <p className="text-[14px] leadinhg-[24px]  font-bold text-custom3 ">Availability  : <span className=" text-custom5b">In Stock </span></p>
            <p className=" text-[14px] leading-[20px] text-custom4">Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br />met sent. RELIT official consequent <br />door ENIM RELIT Mollie. Excitation <br />venial consequent sent nostrum met.</p>
            <Image
          src={hsvg4}
          alt="company logo"
          className=""
        />
            <Image
          src={hsvg3}
          alt="company logo"
          className=""
        />
          </div>
          <div className=" flex space-x-2 ml-2 mt-6">
          <button className="text-[14px] leading-[24px] bg-custom5b w-[148px] h-[44px] text-white font-bold rounded-[5px]">Select Options</button>
          <Image
          src={hsvg5}
          alt="company logo"
          className=""
        />
                <Image
          src={hsvg6}
          alt="company logo"
          className=""
        />
                <Image
          src={hsvg7}
          alt="company logo"
          className=""
        /></div>
        </div>
        </div>
            </div>
        </div>












      <div>
        <div className=" flex mt-20 space-x-3 items-center justify-center">
          <p className=" text-[14px] leading-[24px] font-semibold text-custom3">Description</p>
          <p className=" text-[14px] leading-[24px] font-semibold text-custom3">Additional Information</p>
          <p className=" text-[14px] leading-[24px] font-semibold text-custom3">Reviews</p>
        </div>
        <div className="items-center justify-center justify-items-center lg:flex xl:flex xl:space-x-20 lg:space-x-8 ">
        <Image
          src={hsvg9}
          alt="company logo"
          className=" mt-10 sm:hidden "
        />
         <Image
          src={hsvg9}
          alt="company logo"
          className=" mt-10 max-sm:hidden "
        />
        <div>
        <p className=" text-[24px] leading-[32px] mt-8 font-bold">the quick fox jumps over </p>
        <p className=" text-[14px] leading-[20px] text-custom3  xl:mt-6  lg:mt-6  mt-10">Met minim Mollie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official <br /> consequent door ENIM RELIT Mollie. <br />Excitation venial consequent sent nostrum <br /> met.</p>
        <p className=" text-[14px] leading-[20px] text-custom3 xl:mt-6  lg:mt-6 mt-10">Met minim Mollie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official <br /> consequent door ENIM RELIT Mollie. <br />Excitation venial consequent sent nostrum <br /> met.</p>
        <p className=" text-[14px] leading-[20px] text-custom3 xl:mt-6 lg:mt-6  mt-10">Met minim Mollie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official <br /> consequent door ENIM RELIT Mollie. <br />Excitation venial consequent sent nostrum <br /> met.</p>
</div>

        {/* div2 */}
        <div>
        <div className="">
        <p className=" text-[24px] leading-[32px] mt-8 font-bold">the quick fox jumps over </p>
        <div className="flex mt-10">
        <Image
          src={hsvg10}
          alt="company logo"
          className=""
        />
        <p className="text-[14px] ml-4 leading-[20px] text-custom3 font-bold">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex mt-6">
        <Image
          src={hsvg10}
          alt="company logo"
          className=""
        />
        <p className="text-[14px] ml-4 leading-[20px] text-custom3 font-bold">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex mt-6">
        <Image
          src={hsvg10}
          alt="company logo"
          className=""
        />
        <p className="text-[14px] ml-4 leading-[20px] text-custom3 font-bold">the quick fox jumps over the lazy dog</p>
        </div>
        </div>
        {/* div3 */}
        <div>
        <p className=" text-[24px] leading-[32px] mt-8 font-bold">the quick fox jumps over </p>
        <div className="flex mt-10">
        <Image
          src={hsvg10}
          alt="company logo"
          className=""
        />
        <p className="text-[14px] ml-4 leading-[20px] text-custom3 font-bold">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex mt-6">
        <Image
          src={hsvg10}
          alt="company logo"
          className=""
        />
        <p className="text-[14px] ml-4 leading-[20px] text-custom3 font-bold">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex mt-6">
        <Image
          src={hsvg10}
          alt="company logo"
          className=""
        />
        <p className="text-[14px] ml-4 leading-[20px] text-custom3 font-bold">the quick fox jumps over the lazy dog</p>
        </div>

        </div>
        </div>
        </div>
      </div>




      <div className="bg-custom5c items-center justify-center justify-items-center">
        <div className="max-sm:items-center max-sm:justify-center max-sm:justify-items-center pt-14">
        <p className="  text-[24px] font-[Montserrat] leading-[32px] font-bold">BESTSELLER PRODUCT</p>
        </div>
        <div className="lg:flex xl:space-x-4 lg:space-x-1 max-sm:space-y-6">
          <div>
          <Image
          src={hsvg12}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
          <div>
          <Image
          src={hsvg13}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
          <div>
          <Image
          src={hsvg14}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
          <div>
          <Image
          src={hsvg15}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
        </div>
        <div className="lg:flex lg:space-x-1 xl:space-x-4 mt-4 max-sm:space-y-8">
          <div>
          <Image
          src={hsvg16}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
          <div>
          <Image
          src={hsvg17}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
          <div>
          <Image
          src={hsvg14}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
          <div>
          <Image
          src={hsvg15}
          alt="company logo"
          className=""
        />
        <div className="w-[239px] h-[162px] bg-white items-center justify-center justify-items-center pt-[60px]">
        <h1 className="text-[16px] leading-[24px] font-bold">Graphic Design</h1>
            <p className="text-[14px] text-custom3 leading-[24px] font-bold  ">English Department</p>
            <div className="flex">
                <p className=" text-custom4 font-bold">$16.48</p>
                <p className=" text-custom5  font-bold">$6.48</p>
            </div>
        </div>
          </div>
        </div>
        
        <div>
         <Image
          src={svg21}
          alt="company logo"
          className="sm:hidden"
        />
          <Image
          src={svg23}
          alt="company logo"
          className="max-md:hidden max-sm:hidden mt-16 xl:ml-24"
        />
         </div>

      </div>





































      <Footer></Footer>

        </div>













    )
}
export default Hero;