"use client";

import { useState } from "react";

type PositionType = { coords: { latitude: number; longitude: number } };

const useTrackLocation = () => {
	const [isFindingLocation, setIsFindingLocation] = useState<boolean>(false);
	const [longLat, setLongLat] = useState<string>("");
	const [locationErrorMsg, setLocationErrorMsg] = useState<string>("");

	function success(position: PositionType) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		setLongLat(`${longitude}%2C${latitude}`);

		setIsFindingLocation(false);

		setLocationErrorMsg("");

		console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
	}

	function error() {
		setIsFindingLocation(false);

		setLocationErrorMsg("Unable to retrieve your location");

		console.error("Unable to retrieve your location");
	}

	const handleTrackLocation = () => {
		if (!navigator.geolocation) {
			console.log("Geolocation is not supported by your browser");
			setLocationErrorMsg("Geolocation is not supported by your browser");
		} else {
			console.log("Locating…");
			setIsFindingLocation(true);
			setLocationErrorMsg("");
			navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	return {
		longLat,
		locationErrorMsg,
		isFindingLocation,
		handleTrackLocation,
	};
};

export default useTrackLocation;
