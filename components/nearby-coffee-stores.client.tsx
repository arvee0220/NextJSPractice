"use client";
import useTrackLocation from "@/hooks/use-track-location";
import Banner from "./banner.client";
import { CoffeeStoreType } from "@/types";
import Card from "./card.server";
import { useEffect, useState } from "react";

export default function NearbyCoffeeStores() {
	const { handleTrackLocation, isFindingLocation, longLat, locationErrorMsg } =
		useTrackLocation();

	const [coffeeStores, setCoffeeStores] = useState<[]>([]);

	const handleOnClick = (): void => {
		handleTrackLocation();
	};

	useEffect(() => {
		async function coffeeStoresByLocation() {
			if (longLat) {
				try {
					const limit = 10;
					const response = await fetch(
						`/api/getCoffeeStoresByLocation?longLat=${longLat}&limit=${limit}`
					);
					const coffeeStores = await response.json();
					setCoffeeStores(coffeeStores);
				} catch (error) {
					console.error(error);
				}
			}
		}

		coffeeStoresByLocation();
	}, [longLat]);

	return (
		<div>
			<Banner
				handleOnClick={handleOnClick}
				buttonText={isFindingLocation ? "Locating" : "View stores nearby"}
			/>

			{locationErrorMsg && <p>Error: {locationErrorMsg}</p>}

			<div className="mt-20">
				<h2 className="mt-8 pb-8 text-4xl font-bold text-slate-500">Stores near me</h2>
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
		</div>
	);
}
