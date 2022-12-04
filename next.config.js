import Nextra from "nextra";

const withNextra = Nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	staticImage: true,
	flexsearch: {
		codeblocks: false,
	},
	defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ["en", "ja"],
		defaultLocale: "ja",
	},
};

export default withNextra(nextConfig);
