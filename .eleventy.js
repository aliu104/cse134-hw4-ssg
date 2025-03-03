module.exports = function(eleventyConfig) {
    // Create a collection of blog posts
    eleventyConfig.addCollection("post", function(collection) {
      return collection.getFilteredByTag("post");
    });
  
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      },
      markdownTemplateEngine: "njk"
    };
  };
  