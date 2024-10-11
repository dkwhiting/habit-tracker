// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withMonicon } = require("@monicon/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const configWithMonicon = withMonicon(config, {
    icons: [
        "flowbite:sort-outline",
        "material-symbols:backspace-rounded",
        "ic:baseline-plus-minus-alt"
    ],
  });

module.exports = configWithMonicon;
