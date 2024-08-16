import { HeartIcon } from "@heroicons/react/16/solid";

const Button = () => {
	return (
		<button className="w-1/2 flex justify-center items-center gap-2 text-white my-12 font-bold px-7 py-3 rounded-xl bg-sky-500 hover:scale-105 transition-all ease-in-out">
			Favourite <HeartIcon color="red" width={30} height={30} />
		</button>
	);
};

export default Button;
