/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cms.seerahapp.com",
			},
		],
	},
};

export default nextConfig;
