import { IoIosWater } from 'react-icons/io';
function Showcase({ heading, content }) {
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <img src="\spice.png" alt="composition" className="w-28" />
        <div className="flex gap-1 items-center text-base text-blue-950 font-semibold">
          <IoIosWater size={12} />
          <h5>{heading}</h5>
        </div>
        <p className="text-sm text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export default Showcase;
