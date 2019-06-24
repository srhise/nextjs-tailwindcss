module.exports = {
  globalImports: ["./styles/index.css"],
  publicPath: "static",
  publicUrl: "/static/",
  webpack: webpackConfig => {
    const { rules } = webpackConfig.module;
    const nonCssRules = rules.filter(r => !r.loader.match(/css-loader/));
    webpackConfig.module.rules = [
      ...nonCssRules,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader", options: require("./postcss.config") }
        ]
      }
    ];
    return webpackConfig;
  }
};
