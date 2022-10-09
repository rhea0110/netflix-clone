import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      title: "Coming Soon",
      src: "soon",
      href: "/comingsoon",
      asPath: "/comingsoon",
    },
    { title: "Popular Shows", src: "tvi", href: "/home", asPath: "/home", gap: true,},
    {
      title: "Premium Shows",
      src: "exc",
      href: "/exclusive",
      asPath: "/exclusive",
    },

    {
      title: "Movies",
      src: "movie",
      href: "/movies",
      asPath: "/movies",
    },

    { title: "Kids", src: "kids", href: "/kids", asPath: "/kids"},

    {
      title: "Settings",
      src: "set",
      gap: true,
      href: "/settings",
      asPath: "/settings",
    },
    {
      title: "Language",
      src: "lang",
      href: "/languages",
      asPath: "/languages",
    },
    {
      title: "Logout",
      src: "logout",
      href: "/logout",
      asPath: "/logout",
      gap: true,
    },
  ];

  const router = useRouter();
  return (
    <div className="flex flex-row h-full">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } h-full opacity-90 bg-red-600 relative p-5 pt-8`}
      >
        <img
          src={"back.png"}
          alt="collapse"
          className={`absolute  cursor-pointer rounded-full -right-3 top-2 w-6 ${
            !open && "-rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="nfl.png"
            className={`w-20 rounded-md rounded-t-md cursor-pointer duration-500`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            } `}
          >
            Hey! There.
          </h1>
        </div>
        <div className="pt-6">
          {Menus.map((menu, index) => (
            <>
            <Link href={menu.href}>
              <a
                key={index}
                className={`text-white cursor-pointer gap-x-4 p-0.5 flex items-center text-lg hover:text-black font-medium ${
                  menu.gap ? "mt-[75px]" : "mt-2"
                }`}
                >
                    <div
                  className={`origin-left p-1 duration-200 ${
                    router.asPath == menu.href &&
                    "bg-rose-400 opacity-95 rounded"
                  }`}
                >
                <img src={`${menu.src}.png`} className={`w-12`} />
                {/* <Link href={menu.href}> */}
                </div>
                    <div
                  className={`${!open && "hidden"} origin-left duration-200 ${
                    router.asPath == menu.href &&
                    "text-black border-b-2 border-black"
                  }`}
                >
                  {menu.title}
                </div>
                {/*   </Link> */}
              </a>
            </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
