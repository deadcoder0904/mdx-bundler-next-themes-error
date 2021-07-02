module.exports = {
	webpack: (config, options) => {
		// config.module.rules.push({
		// 	test: /\.(png|jpe?g|gif|mp4)$/i,
		// 	use: [
		// 		{
		// 			loader: 'file-loader',
		// 			options: {
		// 				publicPath: '/_next',
		// 				name: 'static/media/[name].[hash].[ext]',
		// 			},
		// 		},
		// 	],
		// })
		config.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						prettier: false,
						svgo: true,
						svgoConfig: { plugins: [{ removeViewBox: false }] },
						titleProp: true,
					},
				},
			],
		})

		return config
	},
}
