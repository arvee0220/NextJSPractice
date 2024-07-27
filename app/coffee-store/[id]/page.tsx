import { fetchCoffeeStore, fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData(id: string) {
	try {
		const data = await fetchCoffeeStore(id);
		if (!data) {
			throw new Error("Coffee store not found");
		}
		return data;
	} catch (error) {
		console.error("Error fetching coffee store data:", error);

		return null;
	}
}

export async function generateStaticParams() {
	const coffeeStores = await fetchCoffeeStores();

	return coffeeStores.map((coffeeStore: CoffeeStoreType) => ({
		id: coffeeStore.id,
	}));
}

export default async function Page(props: { params: { id: string } }) {
	const {
		params: { id },
	} = props;

	const coffeeStore = await getData(id);

	if (!coffeeStore) {
		return <div>Error loading coffee store data</div>;
	}

	const { name, address, imgUrl } = coffeeStore[0];

	console.log(Object.keys(coffeeStore));
	console.log(JSON.stringify(coffeeStore, null, 2));
	console.log("Coffeestore result: ", coffeeStore);

	return (
		<div className="h-full pb-80">
			<div className="m-auto grid max-w-full p-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
				<div className="mb-2 mt-24 text-lg font-bold">
					<Link href="/">← Back to Home</Link>
				</div>
				<div>
					<h1>{name}</h1>
				</div>
				<Image src={imgUrl} width={740} height={360} alt={name} />
				{address && <p>{address}</p>}
			</div>
		</div>
	);
}
