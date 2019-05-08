module.exports = api => ({
  presets: [
    [
      "@babel/preset-env",
      ...(api.env("test") ? [{ targets: { node: "current" } }] : [])
    ]
  ]
});
