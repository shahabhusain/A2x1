import Button from "../Button";

/* eslint-disable react/prop-types */
const ImageClipBox = ({ src, clipClass }) => {
	return (
		<div className={clipClass}>
			<img src={src} />
		</div>
	)
}

const Contact = () => {
	return (
		<div id="contact" className="my-20 min-h-96 w-screen px-10">
			<div className="relative rounded-lg bg-[#2E3D32] py-24 text-blue-50 sm:overflow-hidden">
				<div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
					<ImageClipBox
						clipClass="contact-clip-path-1"
						src="/img/intro.png"
					/>
					<ImageClipBox
						clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
						src="/videos/hero-1.png"
					/>
				</div>

				<div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
					<ImageClipBox
						clipClass="absolute md:scale-125"
						src="/videos/hero-2.png"
					/>
					<ImageClipBox
						clipClass="sword-man-clip-path md:scale-125"
						src="/img/intro1.png"
					/>
				</div>

				<div className="flex flex-col items-center text-center">
  <p className="font-general text-[10px] uppercase">
    Join the Future of Care
  </p>
  <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
    L<b>e</b>t&apos;s r<b>e</b>shape the <br /> future of <b>h</b>ealth<b>c</b>are <br /> tog<b>e</b>ther!
  </p>



					<Button
						title="contact us"
						containerClass="mt-10 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	)
}

export default Contact;