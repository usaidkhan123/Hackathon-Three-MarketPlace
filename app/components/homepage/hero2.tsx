import Image from "next/image";
import svg1 from "@/public/images/card-item.svg"
import svg2 from "@/public/images/card-item (1).svg"
import svg3 from "@/public/images/card-item (2).svg"
import svg4 from "@/public/images/media bg-cover.svg"
import svg5 from "@/public/images/card-item (3).svg"
import svg6 from "@/public/images/card-item (4).svg"
import svg7 from "@/public/images/card-item (6).svg"
import svg8 from "@/public/images/media bg-cover (1).svg"

const Hero2 = () => {
    return (
        <div>
            <div className=" h-[1850px] sm:h-[1100px] lg:h-[800px] bg-custom2 pt-[82px]">
                <div className=" justify-items-center ">
                    <h1 className="text-[24px] leading-[32px] font-bold">EDITORS PICK</h1>
                    <p className=" text-[14px] leading-[20px] text-custom3 mt-6 items-center text-center justify-center ">Problems trying to resolve <br  /> he conflict between </p>
                </div>
                <div className="mt-8 justify-items-center lg:justify-items-center lg:justify-center lg:items-center space-y-10 sm:hidden">
                <Image
          src={svg1}
          alt="company logo"
            className=""
        />
                <Image
          src={svg2}
          alt="company logo"
            className=""
        />
                <Image
          src={svg3}
          alt="company logo"
            className=""
        />
                <Image
          src={svg4}
          alt="company logo"
            className=""
        />
                </div>
                <div className="mt-8 lg:flex max-sm:hidden xl:justify-items-center sm:space-x-2 xl:items-center xl:justify-center">
                    <div className="flex">
                <Image
          src={svg5}
          alt="company logo"
            className=""
        />
                <Image
          src={svg6}
          alt="company logo"
            className="lg:ml-2 sm:ml-2"
        />
        </div>
        <div className="lg:ml-0 sm:flex lg:mt-0 sm:items-center sm:justify-items-center sm:justify-center m sm:mt-8 lg:block">
        <Image
          src={svg7}
          alt="company logo"
            className=""
        />
                <Image
          src={svg8}
          alt="company logo"
            className="mt-4 lg:ml-0"
        />
        </div>
    </div>
            </div>
        </div>
    )
}
export default Hero2;