"use client";
import { HeartIcon } from "@heroicons/react/16/solid";
import { Event } from "@prisma/client";
import { addToMyEvents } from "../action/actions";
import { useState } from "react";
import toast from "react-hot-toast";

const Button = ({ event }: { event: Event }) => {
	const [loading, setLoading] = useState(false);

	const handleAddMyEvent = async (event: Event) => {
		try {
			setLoading(true);
			const { success } = await addToMyEvents(event);
			if (success) {
				toast.success("Event added successfully");
			} else {
				toast.error("Something went wrong");
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};
	return (
		<button
			onClick={() => handleAddMyEvent(event)}
			className="w-1/2 flex justify-center items-center gap-2 text-white my-12 font-bold px-7 py-3 rounded-xl bg-sky-500 hover:scale-105 transition-all ease-in-out"
		>
			{loading ? (
				<span className="animate-pulse">Adding...</span>
			) : (
				<>
					Add to my events <HeartIcon color="red" width={30} height={30} />
				</>
			)}
		</button>
	);
};

export default Button;
