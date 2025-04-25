import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const links = [
	{
		href: 'https://www.github.com/Tamoziit',
		icon: <FaGithub className="text-xl" />
	},
	{
		href: 'https://www.linkedin.com/in/tamojit-das-b77b62293',
		icon: <FaLinkedin className="text-xl" />
	},
	{
		href: 'https://www.instagram.com/tamoziit18',
		icon: <FaInstagram className="text-xl" />
	},
	{
		href: 'https://leetcode.com/u/Tamojit_Das/',
		icon: <SiLeetcode className="text-xl" />
	}
];

const Footer = () => {
	return (
		<footer className="w-screen bg-violet-300 py-4 text-black">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				<p className="text-center text-sm md:text-left">
					&copy; Nova 2024. All rights reserved.
				</p>

				<div className="flex justify-center gap-4 md:justify-start">
					{links.map((link) => (
						<a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
							{link.icon}
						</a>
					))}
				</div>

				<a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right lg:mr-8">
					Privacy Policy
				</a>
			</div>
		</footer>
	)
}

export default Footer