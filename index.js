"use strict";

var extendData = ["eslint:recommended", "plugin:node/recommended", "plugin:@typescript-eslint/eslint-recommended"];
var internalExtends = [
	"./rules/best-practices",
	"./rules/errors",
	"./rules/node",
	"./rules/style",
	"./rules/variables",
	"./rules/es6",
	"./rules/plugin-node"
].map(require.resolve);

module.exports = {
	extends: extendData.concat(internalExtends),
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		strict: ["error", "global"]
	},
	"plugins": [
		"json",
		"node"
	],
	"env": {
		"browser": true,
		"node": true
	},
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"parser": "@typescript-eslint/parser",
			"plugins": [
				"json",
				"node",
				"@typescript-eslint"
			],
			"settings": {
				"node": {
					"tryExtensions": [".ts", ".tsx", "json"]
				}
			}
		}
	]
};