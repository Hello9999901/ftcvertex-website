import { useState } from "react";
import { IoIosMenu } from "react-icons/io/index";

export default function Menu() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (event: any) => {
		setIsActive((current) => !current);
	};

	return (
		<>
			<button
				className={
					(isActive ? "bg-transparent" : "") + " " + "group peer z-10"
				}
				onClick={handleClick}
			>
				<IoIosMenu className="opacity-100 h-7 w-7 group-[.bg-transparent]:opacity-0 duration-300 ease-in"></IoIosMenu>
			</button>
			<div
				className={
					(isActive ? "bg-transparent" : "") +
					" " +
					"absolute top-0 left-0 hidden h-screen w-screen peer-[.bg-transparent]:block"
				}
				onClick={handleClick}
			></div>
			<div className="ease-in-out duration-500 fixed top-0 -left-72 flex h-screen w-72 justify-center bg-neutral-800 py-20 backdrop-blur-lg peer-[.bg-transparent]:translate-x-full">
				<ul className="flex flex-col text-right text-lg gap-8 text-white font-display font-bold">
					<li className="hover:-translate-x-3 duration-200">
						<a href="/">Home</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/ourteam">Our Team</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/achievements">Awards and Highlights</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/posts">Outreach</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/vtxcads">VTX CADs</a>
					</li>
				</ul>
			</div>
		</>
	);
}
