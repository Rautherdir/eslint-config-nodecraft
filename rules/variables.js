"use strict";
module.exports = {
	rules: {

	},
	"overrides": [
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {
				// Rules overriden by typescript-eslint
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": ["error", {
					"vars": "all",
					"args": "after-used",
					"argsIgnorePattern": "^_",
					"ignoreRestSiblings": false
				}]
			}
		}
	]
};