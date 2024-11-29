import clsx from "clsx";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  speed?: number; // Add a speed prop to control the animation duration
  [key: string]: unknown;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = 40,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={clsx(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={clsx("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}


// "use client";

// import React from "react";
// import Image from "next/image";

// import clsx from "clsx";

// import style from "@/assets/css/home.module.css";
// import client1 from "@/assets/images/client1.png";
// import client2 from "@/assets/images/client2.png";
// import client3 from "@/assets/images/client3.png";
// import client4 from "@/assets/images/client4.png";
// import client5 from "@/assets/images/client5.png";
// import client6 from "@/assets/images/client6.png";
// import client7 from "@/assets/images/client7.png";
// import Marquee from "./Marquee";

// export default function TrustedBySection() {
//   const companies = [
//     client1,
//     client2,
//     client3,
//     client4,
//     client5,
//     client6,
//     client7,
//   ];
//   return (
//     <section className=" bg-rangoongreen">
//       <div>
//         <div className="py-10  px-4 md:px-8">
//           <h3 className="text-center text-grey text-base font-semibold">
//             TRUSTED BY COMPANIES
//           </h3>
//           <div
//             className={clsx(
//               style.trustesdGallery,
//               " py-8.5 flex gap-6 overflow-hidden relative crelative "
//             )}
//           >
//             <Marquee
//               className={clsx(
//                 style.trustesdGalleryIcon,
//                 "flex gap-5 max-w-full "
//               )}
//             >
//               {companies.map((logo, idx) => (
//                 <div
//                   className={clsx(
//                     "image_wrapper",
//                     (logo === client5 || logo === client4) &&
//                       style.trustesdGrayScaleIcon
//                   )}
//                   key={idx}
//                 >
//                   <Image src={logo} alt={`client${idx + 1}`} />
//                 </div>
//               ))}
//             </Marquee>
//             <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-rangoongreen dark:from-white"></div>
//             <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-rangoongreen dark:from-white"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
