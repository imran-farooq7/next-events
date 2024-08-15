export const formatDate = (dateStr: string) => {
	const date = new Date(dateStr);

	const formattedDate = date.toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
	});
	return formattedDate;
};
