/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"source.unsplash.com",
			"plus.unsplash.com",
			"images.unsplash.com",
			"media.istockphoto.com",
		],
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = nextConfig;
