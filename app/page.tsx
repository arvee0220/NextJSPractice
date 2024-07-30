import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import NearbyCoffeeStores from "@/components/nearby-coffee-stores.client";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";

async function getData() {
	return await fetchCoffeeStores();
}

export default async function Home() {
	const coffeeStores = await getData();

	// Temporary placeholder
	const coffeeStores1 = [
		{
			id: "sample_ID",
			name: "random",
			address: "nowhere",
			imgUrl: "https://images.unsplash.com/photo-1687435630031-ac4762b627ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: "sample_ID",
			name: "random",
			address: "nowhere",
			imgUrl: "https://images.unsplash.com/photo-1687435630031-ac4762b627ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: "sample_ID",
			name: "random",
			address: "nowhere",
			imgUrl: "https://images.unsplash.com/photo-1687435630031-ac4762b627ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
		},
	];

	return (
		<div className="mb-56">
			<main className="mx-auto mt-10 max-w-6xl px-4">
				<NearbyCoffeeStores />
				<div className="mt-20">
					<h2 className="mt-8 pb-8 text-4xl font-bold text-slate-500">BGC Stores</h2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
					{coffeeStores.map(({ name, id, imgUrl }: CoffeeStoreType, idx: number) => (
						<Card
							key={`${name}-${id}`}
							name={name}
							imgUrl={imgUrl}
							href={`/coffee-store/${id}?id=${idx}`}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
