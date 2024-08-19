"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/db";
import { Event } from "@prisma/client";
import { redirect } from "next/navigation";

export const addToMyEvents = async (event: Event) => {
	const session = await auth();
	if (!session) {
		redirect("/api/auth/signin");
	} else {
		const addedEvent = await prisma.user.update({
			where: {
				id: session?.user?.id,
			},
			data: {
				myEvents: {
					connect: {
						id: event.id,
					},
				},
			},
		});
		return {
			success: true,
		};
	}
};
