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
				aria-label="Menu Button"
				className={
					(isActive ? "bg-transparent" : "") + " " + "group peer z-10"
				}
				onClick={handleClick}
			>
				<IoIosMenu className="opacity-100 h-7 w-7"></IoIosMenu>
			</button>
			<div
				className={
					(isActive ? "bg-transparent" : "") +
					" " +
					"absolute top-0 left-0 hidden h-screen w-screen peer-[.bg-transparent]:block"
				}
				onClick={handleClick}
			></div>
			<div className="ease-in-out duration-500 fixed top-0 -left-48 md:-left-72 flex h-screen w-48 md:w-72 justify-center bg-gradient-to-b from-black/80 py-20 peer-[.bg-transparent]:translate-x-full">
				<ul className="flex flex-col text-right text-sm md:text-lg gap-3 md:gap-8 text-white font-display font-bold">
					<li className="hover:-translate-x-3 duration-200">
						<a href="/">Home</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="https://forms.gle/3HH4MWa4dLT1mdMJ6" target="_blank">Tryouts</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/ourteam">Our Team</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/achievements">Achievements</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/posts">Outreach</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/vtxcads">VTX CADs</a>
					</li>
					<li className="hover:-translate-x-3 duration-200">
						<a href="/store">Store</a>
					</li>
				</ul>
			</div>
		</>
	);
}
