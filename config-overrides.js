/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2021-12-03 10:32:32
 * @LastEditTime: 2021-12-03 10:36:18
 * @LastEditors: zaq
 * @Reference:
 */
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);
