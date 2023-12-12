import StepsAnimation from "@/components/StepsAnimation";

const Home = () => {
  return (
    <>
      <div className="flex flex-col p-10 h-screen justify-center md:items-start">
        <div className="md:fixed md:right-1/4 md:top-1/4 top-1/4 xs:mt-20 xs:ml-10">
          <StepsAnimation />
        </div>
        <div className="text-5xl md:text-7xl font-bold">
          <div className="flex flex-col justify-center md:items-start">
            <div>Grow Your</div>
            <div className="text-rose-500">Business</div>
            <div>In The</div>
            <div className="text-stroke-white text-8xl md:text-9xl slide-animation">
              Digital World
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
