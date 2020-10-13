const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

  // Add support for YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  return {
    dir: {
      input: "src",
      includes: '_includes',
      data: '_data',
      output: '_site_dev',
    },
    htmlTemplateEngine: "njk",
  };
};