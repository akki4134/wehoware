const StepsAnimation = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex flex-row justify-evenly items-center">
        <div className=" border-2 border-white w-24 h-12 flex justify-evenly items-center ">
          <div className="dot-box"></div>
        </div>
        <div className=" border-2 bg-white text-black w-24 h-12 flex justify-evenly items-center font-bold">
          Website
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center ml-10">
        <div className=" border-2 border-white bg-yellow-300 text-black  w-44 h-12 flex justify-evenly items-center font-bold shrink-animation">
          Hosting
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center ml-5">
        <div className=" border-2 border-white bg-white text-black  w-24 h-12 flex justify-evenly items-center font-bold">
          SEO
        </div>
        <div className=" border-2 border-white w-24 h-12 flex justify-evenly items-center"></div>
      </div>

      <div className=" flex flex-row justify-center items-center">
        <div className=" flex border-2 border-white w-56 h-12 mr-2 items-center justify-center text-xl font-bold">
          Maintainance
        </div>
        <div className="bg-white border-black w-12 h-12 flex justify-evenly items-center rotate-animation text-black font-bold">
          <div className="size-animation">AK</div>
        </div>
      </div>
    </div>
  );
};

export default StepsAnimation;
