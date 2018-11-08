module.exports = function(grunt) {
	grunt.loadNpmTasks('steal-tools');

	grunt.initConfig({
		"steal-build": {
			default: {
				options: {
					system: {
						main: "index",
						config: __dirname + "/package.json!npm",
					},
					buildOptions: {
						bundleAssets: true,
						sourceMaps: true
					}
				}
			}
		},

	});

	grunt.registerTask('default', ['steal-build']);
};
