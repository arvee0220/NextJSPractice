import Button from "@/components/button.client";
import { fetchCoffeeStore, fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData(id: string, queryId: string) {
    try {
        const data = await fetchCoffeeStore(id, queryId);
        if (!data) {
            throw new Error("Coffee store not found");
        }
        return data;
    } catch (error) {
        console.error("Error fetching coffee store data:", error);

        return null;
    }
}

/* export async function generateStaticParams() {
    const BGC_COORD = "121.04488849520385%2C14.545248939154334%2C121.05714748239126%2C14.556430567276223";

    const coffeeStores = await fetchCoffeeStores(BGC_COORD, 10);

    return coffeeStores.map((coffeeStore: CoffeeStoreType) => ({
        id: coffeeStore.id
    }));
} */

export default async function Page(props: { params: { id: string }; searchParams: { id: string } }) {
    const {
        params: { id },
        searchParams: { id: queryId }
    } = props;

    const coffeeStore: CoffeeStoreType = await getData(id, queryId);

    if (!coffeeStore) {
        return <div>Error loading coffee store data</div>;
    }

    const { name = "", address = "", imgUrl = "" } = coffeeStore;

    // console.log(Object.keys(coffeeStore));
    // console.log(JSON.stringify(coffeeStore, null, 2));
    // console.log("Coffeestore result: ", coffeeStore);
    // console.log("Address:", address);

    return (
        <div className="h-full pb-80">
            <div className="m-auto grid max-w-full p-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
                <div className="mb-2 mt-24 text-lg font-bold">
                    <Link href="/">← Back to Home</Link>
                </div>
                <div>
                    <h1>{name}</h1>
                </div>
                <Image src={imgUrl} width={740} height={360} alt={name} />
                {address && <p className="text-xs">{address}</p>}
                {/* <Button address={address} /> */}
                {/* <Button data={coffeeStore} /> */}
            </div>
        </div>
    );
}
