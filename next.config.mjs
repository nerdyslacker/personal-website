import { build } from "velite";

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' localhost vercel.app vercel.live vitals.vercel-insights.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    frame-src giscus.app;
    connect-src *;
    font-src 'self';
`;
 
const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, ''),
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;