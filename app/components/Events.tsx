import prisma from "@/prisma/db";
import { Event } from "@prisma/client";
import delay from "delay";
import Link from "next/link";
import EventCard from "./EventCard";
interface Props {
	isFeatured?: boolean;
	city?: string;
}

const Events = async ({ isFeatured, city }: Props) => {
	let Event: Event[];
	if (isFeatured) {
		const events = await prisma.event.findMany({
			where: {
				isFeatured: true,
			},
		});
		Event = events.filter((event) => event.isFeatured);
	} else if (city) {
		const events = await prisma.event.findMany({
			where: {
				city: {
					equals: city,
					mode: "insensitive",
				},
			},
		});
		Event = events;
	} else {
		const events = await prisma.event.findMany();
		Event = events;
	}

	return (
		<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
			<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
				{Event.map((event) => (
					<Link key={event.id} href={`/event/${event.slug}`}>
						<EventCard event={event} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Events;
