"use client";
import useTrackLocation from "@/hooks/use-track-location";
import Banner from "./banner.client";

export default function NearbyCoffeeStores() {
	const { handleTrackLocation } = useTrackLocation();

	const handleOnClick = (): void => {
		handleTrackLocation();
	};

	return (
		<div>
			<Banner handleOnClick={handleOnClick} />
		</div>
	);
}
