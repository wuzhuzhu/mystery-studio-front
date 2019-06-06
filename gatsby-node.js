/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~styles": path.resolve(__dirname, "src/styles"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~config": path.resolve(__dirname, "src/config"),
        "~hooks": path.resolve(__dirname, "src/utils/hooks"),
        "~images": path.resolve(__dirname, "src/images")
      }
    }
  });
};
