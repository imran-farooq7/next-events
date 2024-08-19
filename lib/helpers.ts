import prisma from "@/prisma/db";
import { unstable_cache } from "next/cache";

export const formatDate = (dateStr: string, year: boolean) => {
	const date = new Date(dateStr);

	const formattedDate = date.toLocaleDateString("en-US", {
		day: "numeric",
		weekday: year ? "long" : undefined,
		month: "long",
		year: year ? "numeric" : undefined,
	});
	return formattedDate;
};
export const cachedFeaturedEvents = unstable_cache(async () => {
	const events = await prisma.event.findMany({
		where: {
			isFeatured: true,
		},
	});
	console.log("featured events fetched");

	return events;
});
export const cachedEvents = unstable_cache(async (page: number) => {
	const events = await prisma.event.findMany({
		take: 8,
		skip: (page - 1) * 8,
	});
	return events;
});
export const cachedCityEvents = unstable_cache(async (city: string) => {
	const events = await prisma.event.findMany({
		where: {
			city: {
				equals: city,
				mode: "insensitive",
			},
		},
	});
	return events;
});
