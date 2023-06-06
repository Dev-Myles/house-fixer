import { type NextPage } from "next";
import Banner from "~/components/home/Banner";
import Contact from "~/components/home/Contact";
import Gallery from "~/components/home/Gallery";
import Reviews from "~/components/home/Reviews";

const Home: NextPage = () => {
  return (
    <>
      <main className="min-h-screen bg-[#fafafc]">
        <Banner />

        <Reviews />
        <div className="flex flex-col bg-[#fafafc] lg:flex-row">
          <Gallery />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
