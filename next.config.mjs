/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "plus.unsplash.com",
			},
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
