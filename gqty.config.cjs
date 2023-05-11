/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://185.113.124.200:8088/query",
    headers: {},
  },
  endpoint: "http://185.113.124.200:8088/query",
  destination: "./src/gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: false,
};

module.exports = config;

