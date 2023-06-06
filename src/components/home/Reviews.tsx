import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Reviews: React.FC = () => {
  return (
    <div
      id="reviews"
      className="m-3 rounded-xl p-3 pb-12 font-quest font-bold shadow-md md:text-xl [&>q]:ml-5 [&>q]:max-w-prose [&>q]:italic"
    >
      <h1 className="  font-dis text-3xl">Customer Reviews:</h1>
      <br />
      <q>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sed harum qui numquam.
      </q>
      <br />
      <br />
      <q>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sed harum qui numquam.
      </q>
      <br />
      <br />{" "}
      <q>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sed harum qui numquam.
      </q>
      <br />
      <br />
      <div className="font-bas mt-5 flex flex-row items-center justify-center">
        <div className="my-auto max-w-[200px]">
          <h6 className="block text-3xl">Logo</h6>
        </div>
        <div className="mt-5 flex w-fit flex-row items-center">
          <span className="mx-3">On</span>
          <FcGoogle size={40} />:<span className="ml-2 text-xl"> 5.0</span>
          <div className="flex flex-row text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
