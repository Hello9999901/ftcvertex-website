import { useState } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io/index";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <button
        className={
          (isActive ? "bg-transparent" : "") + " " + "group peer z-10 h-7 w-7"
        }
        onClick={handleClick}
      >
        <IoIosMenu className="absolute block h-7 w-7 group-[.bg-transparent]:hidden"></IoIosMenu>
      </button>
      <div
        className={
          (isActive ? "bg-transparent" : "") +
          " " +
          "absolute top-0 left-0 hidden h-screen w-screen peer-[.bg-transparent]:block"
        }
        onClick={handleClick}
      ></div>
      <div className="px-cropin-inverse fixed top-0 left-0 hidden h-screen w-20 items-center bg-neutral-300/30 py-20 backdrop-blur-lg peer-[.bg-transparent]:flex">
        <ul className="flex flex-col gap-8 text-left text-sm font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Life</a>
          </li>
          <li>
            <a href="#">Opinions</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Humour</a>
          </li>
          <li>
            <a href="#">Archive</a>
          </li>
        </ul>
      </div>
    </>
  );
}
