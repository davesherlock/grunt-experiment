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
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};