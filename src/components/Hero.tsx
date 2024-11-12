import type { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className=' w-full relative'>
      <figure className='w-full  img-box  overflow-hidden bg-cover absolute backdrop-blur-lg bg-transparent opacity-5'>
        <img
          src={
            "https://static.toiimg.com/thumb/msid-112527716,width-1280,height-720,resizemode-4/112527716.jpg"
          }
          className='img-cover'
          alt='hero'
        />
      </figure>
    </div>
  );
};
export default Hero;
