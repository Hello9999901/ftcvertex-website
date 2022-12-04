import {useState} from 'react'
import { IoMdClose, IoIosMenu } from 'react-icons/io/index'

export default function Menu() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event: any) => {
      setIsActive(current => !current);
    };

    return (
      <>
          <button className={(isActive ? 'bg-transparent' : '') + ' ' + 'peer z-10 group'} onClick={handleClick}>
            <IoIosMenu className="absolute h-7 w-7 group-[.bg-transparent]:hidden block"></IoIosMenu>
          </button>
          <div className={(isActive ? 'bg-transparent' : '') + ' ' + 'absolute top-0 left-0 w-screen h-screen peer-[.bg-transparent]:block hidden'} onClick={handleClick}></div>
          <div className="fixed top-0 hidden peer-[.bg-transparent]:flex items-center left-0 h-screen w-20 py-20 backdrop-blur-lg bg-neutral-300/30 px-cropin-inverse">
            <ul className="flex flex-col text-left gap-8 text-sm font-medium">
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
    )
}