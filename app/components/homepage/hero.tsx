import svg1 from '@/public/images/carousel 1.svg'
import svg2 from '@/public/images/carousel-item.svg'
import Image from 'next/image';
const Hero = () => {
    return(
        <div>
            <div className='sm:hidden '>
            <Image
          src={svg1}
          alt="company logo"
            className=""
        />
        </div>
        <div className='max-sm:hidden'>
        <Image
          src={svg2}
          alt="company logo"
            className=""
        />
        
        </div>
     </div>
    )
}
export default Hero;