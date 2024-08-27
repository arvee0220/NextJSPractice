"use client";
import useTrackLocation from "@/hooks/use-track-location";
import Banner from "./banner.client";
import { CoffeeStoreType } from "@/types";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import Card from "./card.server";
import { useEffect } from "react";

export default function NearbyCoffeeStores() {
	const { handleTrackLocation, isFindingLocation, longLat, locationErrorMsg } =
		useTrackLocation();

	const handleOnClick = (): void => {
		handleTrackLocation();
	};

	useEffect(() => {
		async function coffeeStoresByLocation() {
			if (longLat) {
				const response = await fetchCoffeeStores(longLat);
				console.log(response);
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
				{[].map(({ name, id, imgUrl }: CoffeeStoreType, idx: number) => (
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
