import { fetchCoffeeStore } from "@/lib/coffee-stores";
import Link from "next/link";
import React from "react";

async function getData(id: string) {
	return await fetchCoffeeStore(id);
}

const Page = async (props: { params: { id: string } }) => {
	const {
		params: { id },
	} = props;

	const coffeeStores = await getData(id);

	console.log({ coffeeStores });

	return (
		<div className="h-full pb-80">
			Coffee Store Page: {id}
			<div className="m-auto grid max-w-full p-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
				<div className="mb-2 mt-24 text-lg font-bold">
					<Link href="/">← Back to Home</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
