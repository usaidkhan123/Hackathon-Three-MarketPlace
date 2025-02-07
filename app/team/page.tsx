import svg1 from '@/public/images/icn search .icn-xs.svg'
import svg2 from '@/public/images/icn shopping-cart .icn-xs.svg'
import svg3 from '@/public/images/icn menu .icn-xs.svg'
import svg10 from '@/public/images/Vector (1).svg'
import Image from 'next/image'
import Link from 'next/link'
import svg16 from '@/public/images/Vector (3).svg'
import hsvg1 from '@/public/images/unsplash_1-aA2Fadydc.svg'
import hsvg2 from '@/public/images/unsplash_Lks7vei-eAg.svg'
import hsvg3 from '@/public/images/unsplash_PSmDDeXaEWE.svg'
import hsvg4 from '@/public/images/unsplash_mcSDtbWXUZU.svg'
import hsvg5 from '@/public/images/unsplash_gMsnXqILjp4.svg'
import hsvg6 from '@/public/images/unsplash_mcSDtbWXUZU (1).svg'
import hsvg7 from '@/public/images/unsplash_1-aA2Fadydc (1).svg'
import hsvg8 from '@/public/images/unsplash_PSmDDeXaEWE (1).svg'
import hsvg9 from '@/public/images/unsplash_Lks7vei-eAg (1).svg'
import hsvg10 from '@/public/images/unsplash_gMsnXqILjp4 (1).svg'
import svg7 from '@/public/images/media.svg'
import svg8 from '@/public/images/social media (1).svg'
import svg9 from '@/public/images/media (1).svg'
import svg11 from '@/public/images/media (2).svg'
import hsvg11 from "@/public/images/media (3).svg"
import hsvg12 from "@/public/images/media (5).svg"
import hsvg13 from "@/public/images/media (9).svg"
import hsvg14 from "@/public/images/media (10).svg"
import hsvg15 from "@/public/images/media (11).svg"
import hsvg from '@/public/images/sm.svg'
import Footer from "@/app/components/homepage/footer"


const Team = () => {
    return (
        <div>



            {/* Header */}

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












        {/* Hero Section */}



         <div>
            <div className="items-center justify-center justify-items-center mt-20">
                <p className=" text-[16px] leading-[24px] font-bold text-custom3">WHAT WE DO</p>
                <p className="text-[40px] sm:text-[58px] leading-[50px] sm:leading-[80px] font-bold text-center">Innovation <br className='sm:hidden'/> tailored for you</p>
            <div className="flex space-x-4">
         <p className=" font-bold text-[14px] leading-[24px]">Home </p>
          <Image
          src={svg16}
          alt="company logo"
        />
          <p className="text-custom4 font-bold text-[14px] leading-[24px]">Team</p>
          </div>
        </div>
        <div className='items-center justify-center justify-items-center space-y-2 sm:hidden'>
        <Image
          src={hsvg9}
          alt="company logo"
            className=" "
        />
        <div>
         <div  className='flex '>
        <Image
          src={hsvg10}
          alt="company logo"
            className=""
            width={160}
            height={160}
        /><Image
        src={hsvg8}
        alt="company logo"
        width={160}
        height={160}
          className=" "
      />
      </div>
         <div className='flex'>
        <Image
          src={hsvg6}
          alt="company logo"
            className=""
            width={160}
            height={160}
        /><Image
        src={hsvg7}
        alt="company logo"
          className=" "
          width={160}
            height={160}
      />
      </div>
      </div>
        </div>


        <div>
            <div className=' mt-6 max-sm:hidden xl:flex items-center justify-center justify-items-center'>
            <Image
        src={hsvg2}
        alt="company logo"
          className=" "
            />
            <div className='flex space-x-2 '>
            <div className='flex-col space-y-2'>
            <Image
        src={hsvg1}
        alt="company logo"
          className=" "
            /><Image
            src={hsvg5}
            alt="company logo"
              className=" "
                />
            </div>
            <div className='flex-col space-y-2'>
            <Image
        src={hsvg3}
        alt="company logo"
          className=" "
            /><Image
            src={hsvg4}
            alt="company logo"
              className=" "
                />
            </div>
            </div>
            </div>
        </div>
         </div>


        {/* Team Section */}

         <div>
            <div className="items-center justify-center justify-items-center">
                <p className="text-center text-[40px] leading-[50px] font-bold mt-10 ">Meet Our <br className="sm:hidden "/> Team</p>
                <p className="text-center text-[14px] leading-[20px] text-custom3 mt-6">Problems trying to resolve <br className="sm:hidden"/>the conflict between <br className="max-sm:hidden"/> the two major <br className="sm:hidden"/>realms of Classical physics:<br className="sm:hidden"/> Newtonian mechanics </p>
            </div>
            <div className="lg:flex md:space-x-6 items-center justify-items-center justify-center">
            <div className="mt-6 items-center justify-center justify-items-center">
            <Image
          src={svg7}
          alt="company logo"
          width={320}
          height={320}
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
          width={320}
          height={320}
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
          width={320}
          height={320}
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
         






          <div>
            <div className="lg:flex md:space-x-6 items-center justify-items-center justify-center">
            <div className="mt-6 items-center justify-center justify-items-center">
            <Image
          src={hsvg11}
          alt="company logo"
          width={320}
          height={320}
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
          src={hsvg12}
          alt="company logo"
          width={320}
          height={320}
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
          src={hsvg13}
          alt="company logo"
          width={320}
          height={320}
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



          <div>
            <div className="lg:flex md:space-x-6 items-center justify-items-center justify-center">
            <div className="mt-6 items-center justify-center justify-items-center">
            <Image
          src={hsvg14}
          alt="company logo"
          width={320}
          height={320}
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
          src={hsvg15}
          alt="company logo"
          width={320}
          height={320}
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
          width={320}
          height={320}
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

















          <div className=" items-center justify-center justify-items-center place-content-center">
    <div className="pt-24 items-center justify-center justify-items-center place-content-center">
        <p className="text-[40px] leading-[50px] font-bold text-center">Start your <br className="sm:hidden"/> 14 days free trial</p>
        <p className="text-[14px] mt-6 leading-[20px] text-custom4 text-center">Met minim Mollie non desert Alamo est sit <br className="sm:hidden"/>cliquey dolor do met sent. RELIT official<br className="sm:hidden"/> consequent.</p>
        <button className="w-[186px] h-[52px] text-[14px]  leading-[22px] font-bold text-white rounded-[5px] ml-10 mt-8 bg-custom5b">Try it free now</button>
        <Image
      src={hsvg}
      alt="company logo"
    className=" mt-4 ml-4"
    />
    </div>
</div>

















        <Footer></Footer>
         </div>
    )
}
export default Team;