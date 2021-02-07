module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    require.resolve("@babel/preset-react")
  ],
  plugins: [
    require.resolve('@babel/plugin-proposal-class-properties')
  ]
};
