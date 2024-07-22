import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const coffeeStoreId = "civet-coffee";

	const coffeeStores = [
		{
			name: "StrangeLove Coffee",
			imgUrl: "https://images.unsplash.com/photo-1687435630031-ac4762b627ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
		},
		{
			name: "Civet Coffee",
			imgUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
		},
		{
			name: "StrangeLove Coffee",
			imgUrl: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
		{
			name: "Dark Horse Coffee",
			imgUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
		},
		{
			name: "StrangeLove Coffee",
			imgUrl: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
		{
			name: "Dark Horse Coffee",
			imgUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
		},
	];

	return (
		<div className="mb-56">
			<main className="mx-auto mt-10 max-w-6xl px-4">
				<Banner />
				<div className="mt-20">
					<h2 className="mt-8 pb-8 text-4xl font-bold text-white">BGC Stores</h2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
					{coffeeStores.map(({ name, imgUrl }, idx) => (
						<Card
							key={`${name}-${idx}`}
							name={name}
							imgUrl={imgUrl}
							href={`/coffee-store/${idx}`}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
