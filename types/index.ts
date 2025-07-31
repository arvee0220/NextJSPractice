export type CoffeeStoreType = {
    id: string;
    name: string;
    imgUrl: string;
    address: string;
};

/* export type MapboxType = {
	id: string;
	properties: {
		address: string;
	};
	text: string;
}; */

export type MapboxType = {
    id: string;
    place_name: string;
    text: string;
};
