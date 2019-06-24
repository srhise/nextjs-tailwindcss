module.exports = webpackConfig => {
  const { rules } = webpackConfig.module;
  const nonCssRules = rules.filter(
    r => !r.loader || !r.loader.match(/css-loader/)
  );
  webpackConfig.module.rules = [
    ...nonCssRules,
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        { loader: "postcss-loader" }
      ]
    }
  ];
  return webpackConfig;
};
