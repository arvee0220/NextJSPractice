import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";

const Banner = ({
	handleOnClick,
	buttonText,
}: {
	handleOnClick: MouseEventHandler<HTMLButtonElement> | undefined;
	buttonText: string;
}) => {
	return (
		<div className="mb-12 grid lg:mb-24 lg:grid-cols-2">
			<div className="z-20 flex flex-col px-2 md:pt-12">
				<h1 className="my-2 flex-wrap">
					<span className="pr-2 text-white">Coffee</span>
					<span className="text-gray-900">Connoisseur</span>
				</h1>
				<p className="font-sans text-xl font-semibold text-gray-900 md:mt-5 lg:text-2xl">
					Discover your local coffee shops!
				</p>

				<div className="mt-12">
					<button onClick={handleOnClick}>{buttonText}</button>
				</div>
			</div>
			<div className="absolute top-2 z-10 md:top-10 md:mt-12 md:pl-10 md:pt-0 lg:right-[20%] lg:flex lg:pl-20 -scale-x-100">
				{" "}
				<Image
					src="/static/hero-image1.png"
					width={300}
					height={300}
					alt="hero image"
					priority
				/>
			</div>
		</div>
	);
};

export default Banner;
