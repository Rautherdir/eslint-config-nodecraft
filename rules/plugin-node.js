"use strict";
module.exports = {
	rules: {
		// Disallow require()s for files that npm ignores
		"node/no-unpublished-require": "off",

		//Disallow import declarations for files that npm ignores
		"node/no-unpublished-import": "off"
	},
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {
				// Implemented by TypeScript
				"node/no-unsupported-features/es-syntax": [
					"error",
					{ ignores: ["modules"] }
				]
			},
			"settings": {
				"node": {
					"tryExtensions": [".ts"]
				}
			}
		}
	]
};