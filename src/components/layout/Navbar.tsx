import Link from "next/link";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import IconProvider from "../providers/IconProvider";

const NavBar: React.FC = () => {
  return (
    <div className="box- flex h-12 flex-row justify-between p-2 drop-shadow-md">
      <Link href="/">
        <h1 className="font-dis text-xl">Logo</h1>
      </Link>
      <div className="flex w-1/3 flex-row justify-around align-middle">
        <IconProvider>
          <AiOutlineMail />
        </IconProvider>
        <IconProvider>
          <AiFillInstagram />
        </IconProvider>
      </div>
    </div>
  );
};

export default NavBar;
