/* eslint-disable react/no-unescaped-entities */
function Fold3() {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="flex max-w-[80vw] mx-auto items-center justify-center">
        <div className="flex flex-col lg:flex-row max-md:pt-[28rem]">
          <div className="lg:w-1/2 p-10 max-md:px-0 max-md:text-justify flex flex-col justify-center">
            <h2 className="text-2xl text-[#2c2f55] mb-4">
              Joint surgeon, Dr. John Hahn believes he has discovered the
              secret. And he's got
              <span className="font-bold ">
                {' '}
                hundreds of thousands of followers
              </span>
              , some even in their nineties, to prove it.
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
              sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper
              sem, in lobortis est. Cras pharetra vitae tellus quis commodo.
              Phasellus semper viverra purus, vel feugiat nunc venenatis et.
              Suspendisse nisi arcu, tristique dictum sollicitudin vel,
              facilisis at urna. Cras a vulputate risus. Nam venenatis enim et
              libero molestie tincidunt.
            </p>
            <p className="text-gray-600 mb-4">
              nunc leo, eget suscipit ex semper quis. Quisque mollis ornare
              consectetur. Cras facilisis sem erat, et facilisis ante dignissim
              in. Suspendisse ex libero.
            </p>
          </div>

          <div className="shape h-96 w-[50vw]  rounded-[3.5rem] skew-y-6 absolute -right-40 top-20 max-md:left-12 max-md:w-[100vw]">
            <img
              src="src/assets/doctor.png"
              alt="Dr. John Hahn"
              className="absolute h-[20rem] mx-auto bottom-0"
            />
            <div>
              <p className="text-right w-44 absolute left-[35%] max-md:left-[45%] top-[20%] leading-4 text-sm text-gray-700 -skew-y-6">
                Lorem ipsum dolor, sit amet csectetur aaspisicing elit. Autm opo
                dicta raone ipsum nemo aspernatur obcaecati iure.
              </p>

              <p className="text-right w-44 absolute left-[35%] max-md:left-[45%] top-[55%] leading-4 text-sm font-semibold text-gray-800 -skew-y-6">
                Dr. John Hahn <br />
                DPM, ND, America's
                <br />
                Joint Doctor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fold3;
