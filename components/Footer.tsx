import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  const linkStyles = {
    border: "none",
    outline: "none",
  };

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px -6 py-10 ">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700 text-center">
            CarHub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-end flex-wrap max-md:mt-10 gap-20 text-center mx-0">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link ">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 transition duration-300 ease-in-out hover:text-blue-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center  items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 gap-2">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link ">
          <Link
            href="/"
            className="text-gray-500 transition duration-300 ease-in-out hover:text-blue-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500 transition duration-300 ease-in-out hover:text-blue-300"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
