/* eslint-disable react/no-unescaped-entities */
import Button from '../Components/Button';

function Fold2() {
  return (
    <div className="bg-[#2c2f55]">
      <div className=" grid grid-cols-2 gap-10 max-w-[80vw] mx-auto text-white py-12 px-6 max-md:grid-cols-1">
        <div>
          <div className="grid grid-cols-11 grid-rows-10 gap-0">
            <div className="col-span-4 row-span-5 col-start-2 relative ">
              <img
                src="https://images.pexels.com/photos/15035577/pexels-photo-15035577/free-photo-of-man-running-in-park.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="aspect-square rounded-xl filter grayscale"
              />
              <div className="absolute inset-0 bg-[#2c2f55] opacity-60"></div>
            </div>
            <div className="col-span-5 row-span-6 col-start-7 relative">
              <img
                src="https://images.pexels.com/photos/12031390/pexels-photo-12031390.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="aspect-square rounded-xl filter grayscale"
              />
              <div className="absolute inset-0 bg-[#2c2f55] opacity-60"></div>
            </div>
            <div className="col-span-4 row-span-5 row-start-6 relative">
              <img
                src="https://images.pexels.com/photos/6399679/pexels-photo-6399679.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="aspect-square rounded-xl filter grayscale"
              />
              <div className="absolute inset-0 bg-[#2c2f55] opacity-60"></div>
            </div>
            <div className="col-span-4 row-span-4 col-start-6 row-start-7 relative">
              <img
                src="https://images.pexels.com/photos/2381616/pexels-photo-2381616.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="aspect-square rounded-xl filter grayscale"
              />
              <div className="absolute inset-0 bg-[#2c2f55] opacity-60"></div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            Doctor's Secret to Living Ache-Free and Mobile for Life...
          </h1>
          <h4 className="text-xl font-semibold text-[#a0c717] mt-4">
            FEED YOUR JOINTS DAILY!
          </h4>
          <p className="text-base mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper sem,
            in lobortis est. Cras pharetra vitae tellus quis commodo. Phasellus
            semper viverra purus, vel feugiat nunc venenatis et. Suspendisse
            nisi arcu, tristique dictum sollicitudin vel, facilisis at urna.
            Cras a vulputate risus. Nam venenatis.
          </p>
          <div className="py-5">
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fold2;
