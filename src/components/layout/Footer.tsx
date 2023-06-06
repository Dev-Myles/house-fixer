import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-main bg-background h-fit border-t-[1px] border-gray-200 ">
      <div className="flex flex-col justify-between text-lg lg:flex-row">
        <div className="mx-auto p-6 text-3xl lg:mx-0">
          <Link href="/">Logo</Link>
        </div>
        <div className="p-2">
          <ul className="cursor-pointer text-center duration-300 [&>*:hover]:text-emerald-700 [&>*]:inline-block [&>*]:p-4 [&>*]:ease-in-out">
            <Link href="/">
              <li>Our Work</li>
            </Link>
            <Link href="/">
              <li>Contact</li>
            </Link>
            <Link href="/">
              <li>Policy</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="pb-8 pt-4 text-center">
        <span>@2023 Build. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
