import { MapboxType } from "@/types";


const transformCoffeeData = (res: MapboxType) => {
	return {
		id: res.id,
		address: res.properties?.address || "",
		name: res.text,
		imgUrl: "https://images.unsplash.com/photo-1687435630031-ac4762b627ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
	};
};

export const fetchCoffeeStores = async () => {
	try {
		const res = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/Coffee.json?limit=10&proximity=121.0508357096025%2C14.550952168272048&access_token=${process.env.MAPBOX_API}`
		);

		const data = await res.json();

		return data.features.map((res: MapboxType) => transformCoffeeData(res));
	} catch (error) {
		console.error(`Error while fetching coffee stores`, error);
	}
};
