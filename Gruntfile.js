module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            basic: {
                src:['node_modules/bootstrap/dist/js/bootstrap.js','js/main.js'],
                dest:'public/js/scripts-compiled.js'
            },
            extras: {
                src:[ 'node_modules/bootstrap/dist/css/bootstrap.css','css/main.css'],
                dest:'public/css/style-compiled.css'
            }
        },
		uglify: {
			my_target: {
			  files: [{
				expand: true,
				cwd: 'public/js', 
				src: '**/*.js',
				dest: 'public/js/min'
			  }]
			}
		  },
		  cssmin: {
			  target: {
				files: [{
				  expand: true,
				  cwd: 'public/css',
				  src: ['*.css', '!*.min.css'],
				  dest: 'public/css/min',
				  ext: '.min.css'
				}]
			  }
}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify','cssmin']);

};