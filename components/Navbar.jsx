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
    <>
      <div className={`${open ? "w-60" : "w-20"} h-screen`}></div>
      <div className="flex z-[5] h-screen fixed top-0 left-0 flex-row ">
        <div
          className={`${
            open ? "w-60" : "w-20"
          } opacity-90 h-full  bg-black border border-red-600 relative p-5 pt-8`}
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
              className={`text-red-600 origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Hey! There.
            </h1>
          </div>
          <div className="flex justify-evenly flex-col py-8 pt-10 h-[80%]">
            {Menus.map((menu, index) => (
              <>
                <Link href={menu.href}>
                  <a
                    key={index}
                    className={`text-white mt-2 cursor-pointer gap-x-4 p-0.5 flex items-center text-lg hover:text-red-600 font-medium`}
                  >
                    <div
                      className={`origin-left p-1 duration-200 ${
                        router.asPath == menu.href && "bg-red-600  rounded"
                      }`}
                    >
                      <img src={`${menu.src}.png`} className={`w-10`} />
                      {/* <Link href={menu.href}> */}
                    </div>
                    <div
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 ${
                        router.asPath == menu.href &&
                        "text-red-600 border-b-2 border-red-600"
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
    </>
  );
};

export default Navbar;
