interface Props {
	params: {
		slug: string;
	};
}
const EventDetails = ({ params }: Props) => {
	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-6 mt-4 text-xl font-bold lg:text-2xl text-black">
				Events in <span className="capitalize">{params.slug}</span>
			</h1>
		</main>
	);
};

export default EventDetails;
