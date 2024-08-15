import { NextEvent } from "@/lib/types";

const EventCard = ({ event }: { event: NextEvent }) => {
	return (
		<div key={event.id}>
			<div className="relative">
				<div className="relative h-72 w-full overflow-hidden rounded-lg">
					<img
						src={event.imageUrl}
						alt={event.name}
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div className="relative mt-4">
					<h3 className="text-base font-bold text-center text-white">
						{event.name}
					</h3>
				</div>
				<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
					<div
						aria-hidden="true"
						className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
					/>
					<p className="relative text-lg font-semibold text-white">
						{event.date}
					</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
