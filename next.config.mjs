import { build } from "velite";

const ContentSecurityPolicy = `
    default-src 'self' vercel.live giscus.app;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live vitals.vercel-insights.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
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
			// giscus fetches the custom theme CSS cross-origin from giscus.app
			{
				source: '/giscus-srcery.css',
				headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
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