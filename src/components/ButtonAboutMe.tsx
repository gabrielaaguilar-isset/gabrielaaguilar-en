"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const ButtonAboutMe = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/about-me" && (
        <button className="bg-black text-white py-[16px] px-[42px] rounded-[35px] mt-8 ">
          <Link href="/about-me" >
          About me

          </Link>
        </button>
      )}
    </div>
  );
};

export default ButtonAboutMe;
