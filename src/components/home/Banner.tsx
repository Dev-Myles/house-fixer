import Link from "next/link";

const Banner: React.FC = () => {
  const handleScroll = (ele: string) => {
    const elem = document.getElementById(ele);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-2 flex h-[75vh] min-h-fit flex-col place-content-center bg-inherit py-10 text-center ">
      <h1 className=" my-5 h-fit font-dis text-6xl">
        Let&apos;s Build Something
      </h1>

      <h2 className="my-3 text-2xl">
        From fixes to improvements, we make houses into homes.
      </h2>

      <h3 className="text-3xl">Start Today</h3>
      <div className="bg-inherit [&>button]:mx-2 [&>button]:my-6">
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <Link href="/imagegallery">Gallery</Link>
        </button>
        <button
          onClick={() => handleScroll("form")}
          className="  bg-gradient-to-r from-blue-400 via-blue-500 to-sky-500  text-white"
        >
          Contact Us
        </button>
        <button
          onClick={() => handleScroll("reviews")}
          className=" bg-gradient-to-r from-green-500 to-green-700  text-white"
        >
          Reviews
        </button>
      </div>
    </div>
  );
};

export default Banner;
