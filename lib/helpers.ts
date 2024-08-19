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
