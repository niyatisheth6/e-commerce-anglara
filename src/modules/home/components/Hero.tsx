import Image from "next/image";

import { MoveLeft, MoveRight } from "lucide-react";

import Button from "@/shared/components/button/Button";

import HeroImg from "@/assets/images/shoes.png";

function Hero() {
  return (
    <>
      <div className="lg:min-h-[43rem] bg-white relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-12 grid-10 items-center">
            <div className="flex flex-col lg:gap-10 gap-7 lg:py-[10.375rem] py-10 pb-0 lg:max-w-[32.8125rem]">
              <h1 className="font-bold text-[4rem] maxMd:text-[2.5rem] maxXs:leading-[2.8406rem] text-foreground leading-[4.8406rem]">
                Lorem ipsum dolor sit.
              </h1>
              <p className="text-secondary text-base leading-1.5">
                Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
                pellentesque feugiat gravida tincidunt lobortis mi. Nisl
                sollicitudin in dictumst elementum amet nulla. Malesuada tempor
                consequat dui fringilla pretium. Egestas nibh et sociis enim
                nisl aliquet ultrices.
              </p>
              <div className="flex gap-10 maxXs:flex-col maxXs:gap-4">
                <Button variant="outlined">Explore</Button>
                <Button variant="primary">Buy Now</Button>
              </div>
            </div>
            <div className="lg:hidden  w-full mt-8 maxLg:pb-10">
              <div className="relative w-full ">
                <Image
                  src={HeroImg}
                  alt="Green athletic shoe on dark background"
                  // fill
                  className="object-cover max-h-[31.25rem]"
                  // priority
                />
                <div className="absolute bottom-8 right-4 flex gap-2">
                  <button className="w-[2.375rem] h-[2.375rem] rounded-full bg-white flex justify-center items-center text-foreground">
                    <MoveLeft size={16} />
                  </button>
                  <button className="w-[2.375rem] h-[2.375rem] rounded-full bg-primary flex justify-center items-center text-foreground">
                    <MoveRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src={HeroImg}
              alt="Green athletic shoe on dark background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button className="w-[2.375rem] h-[2.375rem] rounded-full bg-white flex justify-center items-center text-foreground">
                <MoveLeft size={16} />
              </button>
              <button className="w-[2.375rem] h-[2.375rem] rounded-full bg-primary flex justify-center items-center text-foreground">
                <MoveRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;

