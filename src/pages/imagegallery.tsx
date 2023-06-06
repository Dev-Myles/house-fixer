import { type NextPage } from "next";
import Gallery from "~/components/gallery/Gallery";

const ImageGallery: NextPage = () => {
  const imageLinks = [
    "/images/plans.png",
    "/images/tools.png",
    "/images/house1.png",
    "/images/house2.png",
    "/images/house3.png",
    "/images/house4.png",
    "/images/house5.png",
    "/images/house6.png",
    "/images/plans.png",
    "/images/tools.png",
    "/images/house1.png",
    "/images/house2.png",
    "/images/house3.png",
    "/images/house4.png",
    "/images/house5.png",
    "/images/house6.png",
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl">Our Work</h1>
      <Gallery images={imageLinks} />
    </div>
  );
};

export default ImageGallery;
