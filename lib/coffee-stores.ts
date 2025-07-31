import { MapboxType } from "@/types";

const token = process.env.NEXT_PUBLIC_MAPBOX_API;
const unsplashToken = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const getListOfCoffeeStorePhotos = async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${unsplashToken}&query="coffee shop"&page=1&perPage=10&orientation=landscape`);
        const photos = await response.json();
        const results = photos?.results || [];
        return results?.map((result: { urls: any }) => result.urls["small"]);
    } catch (error) {
        console.error("Error retrieving a photo", error);
    }
};

const transformCoffeeData = (idx: number, result: MapboxType, photos: Array<string>) => {
    return {
        id: result.id,
        address: result.place_name,
        name: result.text,
        imgUrl: photos.length > 0 ? photos[idx] : ""
    };
};

export const fetchCoffeeStores = async (longLat: string, limit: number) => {
    try {
        const [lon, lat] = longLat.split("%2C").map(Number);

        console.log(longLat);

        console.log(`lon: ${lon}, lat: ${lat}`);

        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?country=ph&limit=${limit}&proximity=${lon}%2C${lat}&access_token=${token}`);
        const data = await response.json();
        const photos = await getListOfCoffeeStorePhotos();

        console.log("fetchCoffeeStores", data);

        return data.features.map((result: MapboxType, idx: number) => transformCoffeeData(idx, result, photos));
    } catch (error) {
        console.error("Error while fetching coffee stores", error);
    }
};

export const fetchCoffeeStore = async (id: string, queryId: string) => {
    try {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${id}.json?proximity=ip&access_token=${token}`);
        const data = await response.json();
        const photos = await getListOfCoffeeStorePhotos();

        const coffeeStore = data.features.map((result: MapboxType, idx: number) => transformCoffeeData(parseInt(queryId), result, photos));

        console.log("fetchCoffeeStore: ", coffeeStore);
        return coffeeStore.length > 0 ? coffeeStore[0] : {};
    } catch (error) {
        console.error("Error while fetching coffee stores", error);
    }
};
