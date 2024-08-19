import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
interface Props {
	page: number;
	totalEvents: number;
}

export default function Pagination({ page, totalEvents }: Props) {
	const prevPath = page > 1 ? `/events?page=${page - 1}` : "";
	const nextPath = totalEvents > 8 * page ? `/events?page=${page + 1}` : "";
	return (
		<nav
			className="flex items-center justify-between bg-transparent w-full px-4 py-4 sm:px-6"
			aria-label="Pagination"
		>
			{prevPath && (
				<Link
					href={prevPath}
					className="relative inline-flex items-center rounded-md bg-cyan-500 px-8 py-4 text-sm font-semibold text-white hover:bg-cyan-700 focus-visible:outline-offset-0 gap-x-2"
				>
					<ArrowLeftIcon className="size-5 text-white font-bold" />
					Previous
				</Link>
			)}
			{nextPath && (
				<Link
					href={nextPath}
					className="relative ml-auto items-center rounded-md bg-cyan-500 px-8 py-4 text-sm font-semibold text-white hover:bg-cyan-700 focus-visible:outline-offset-0 flex gap-x-2"
				>
					Next
					<ArrowRightIcon className="size-5 text-white font-bold" />
				</Link>
			)}
		</nav>
	);
}
