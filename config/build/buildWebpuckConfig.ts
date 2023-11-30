import {type BuildOptions} from "./types/config"
import type webpack from "webpack"
import {buildPlugins} from "./buildPlugins"
import {buildLoaders} from "./buildLoaders"
import {buildResolvers} from "./buildResolvers"
import {buildDevServer} from "./buildDevServer"

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options
  const {entry, output} = paths
  return {
    mode,
    entry,
    output: {
      filename: "[name].[contenthash].js",
      path: output,
      clean: true
    },

    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
