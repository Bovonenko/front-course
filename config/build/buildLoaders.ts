import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};
	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes(".module."),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:8]"
							: "[hash:base64:5]",
					},
				},
			},
			"sass-loader",
		],
	};
	return [typescriptLoader, styleLoader];
}
