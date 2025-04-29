import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { Link } from "react-router-dom";

const navItems = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'About',
		link: '/about'
	},
	{
		name: 'Services',
		link: '/services'
	},
	{
		name: 'Blog',
		link: '/blog'
	},

	{
		name: 'Carrier',
		link: '/carrer'
	},
	{
		name: 'Contact',
		link: '/contact'
	}
];

const Navbar = () => {
	const navContainerRef = useRef(null);
	const audioElementRef = useRef(null);
	const [isAudioPlaying, setIsAudioPlaying] = useState(true);
	const [isIndicatorActive, setIsIndicatorActive] = useState(true);
	const [isNavVisible, setIsNavVisible] = useState(true);

	const [lastScrollY, setLastScrollY] = useState(0);
	const { y: currentScrollY } = useWindowScroll();

	useEffect(() => {
		if (currentScrollY === 0) { // initial state with no black-bg for nav
			setIsNavVisible(true);
			navContainerRef.current.classList.remove('floating-nav');
		} else if (currentScrollY > lastScrollY) { // scrolling back up, display the nav with black-bg
			setIsNavVisible(false);
			navContainerRef.current.classList.add('floating-nav');
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add('floating-nav');
		}

		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2
		});
	}, [isNavVisible])

	const toggleAudioIndicator = () => {
		setIsAudioPlaying((prev) => !prev);
		setIsIndicatorActive((prev) => !prev);
	}

	useEffect(() => {
		if (isAudioPlaying) {
			audioElementRef.current.play();
		} else {
			audioElementRef.current.pause();
		}
	}, [isAudioPlaying]);

	return (
		<div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-between p-4">
					<div className="flex items-center gap-7">
						<img src="/img/logo.png" alt="logo" />

					</div>

					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((item) => (
								<Link 
									key={item.name}
									className="nav-hover-btn "
									to={item.link}
								>
									{item.name}
								</Link>
							))}
						</div>

						<button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
							<audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
							{[1, 2, 3, 4].map((bar) => (
								<div
									key={bar}
									className={`indicator-line ${isIndicatorActive ? '' : ' text-black'}`}
									style={{ animationDelay: `${bar * 0.2}s` }}
								/>
							))}
						</button>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Navbar