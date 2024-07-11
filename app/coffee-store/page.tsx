"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
	const router = useRouter();

	const slugRouteHandler = () => {
		const slugRouter = "/coffee-store/Civet";

		router.push(slugRouter);
	};

	return (
		<div>
			Coffee store
			<br />
			<button onClick={slugRouteHandler}>Check Store</button>
		</div>
	);
};

export default Page;
