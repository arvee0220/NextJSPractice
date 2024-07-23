import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import Image from "next/image";
import Link from "next/link";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";

async function getData() {
	return await fetchCoffeeStores();
}

export default async function Home() {
	const coffeeStores = await getData();

	const coffeeStoreId = "civet-coffee";

	return (
		<div className="mb-56">
			<main className="mx-auto mt-10 max-w-6xl px-4">
				<Banner />
				<div className="mt-20">
					<h2 className="mt-8 pb-8 text-4xl font-bold text-white">BGC Stores</h2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
					{coffeeStores.map(({ name, imgUrl, address }: CoffeeStoreType, idx: number) => (
						<Card
							key={`${name}-${idx}`}
							name={name}
							imgUrl={imgUrl}
							address={address}
							href={`/coffee-store/${idx}`}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
