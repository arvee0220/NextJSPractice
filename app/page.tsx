import Banner from "@/components/banner.client";
import Link from "next/link";

export default function Home() {
	const coffeeStoreId = "civet-coffee";

	return (
		<div className="mb-56">
			<main className="mx-auto mt-10 max-w-6xl px-4">
				<Banner />
				<Link href={`/coffee-store/${coffeeStoreId}`}>Civet Coffee</Link>
			</main>
		</div>
	);
}
