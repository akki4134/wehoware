import Image from "next/image";
import ServiceOnePic from "../../../public/webapp.png";
import ServiceTwoPic from "../../../public/website.jpg";
import ServiceThreePic from "../../../public/mobile.png";
import ServiceFourPic from "../../../public/seo.svg";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <video
        autoPlay
        loop
        muted
        playsInline 
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: -1,
        }}
        src="/web.mp4" // Direct path from the public directory
      />
      <div className="hidden md:block">
        <div className=" absolute left-0 top-0 p-20 ml-32">
          <Image
            src={ServiceOnePic}
            alt="Picture of the author"
            width={180}
            height={180}
          />
        </div>
        <div className=" absolute right-0 top-0 p-20 mr-32">
          <Image
            src={ServiceTwoPic}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
        <div className=" absolute left-10 bottom-0">
          <Image
            src={ServiceThreePic}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
        <div className=" absolute right-10 bottom-5">
          <Image
            src={ServiceFourPic}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className=" font-semibold text-2xl">
        We <span className=" text-6xl font-bold">Build</span>
      </div>
      <div className=" text-6xl font-bold">Anything</div>
      <div className=" font-semibold text-2xl">you want</div>
    </div>
  );
};

export default Services;
