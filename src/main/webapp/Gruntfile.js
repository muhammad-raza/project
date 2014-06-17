module.exports = function(grunt) {
  grunt.initConfig({

    compass: {
        dist: {
          options: {
            outputStyle: "compressed",
            sassDir: 'scss',
            cssDir: 'generated/css'
          }
        }
    },

    uglify: {
        dist: {
          files: [{
            expand: true,
            src: 'js/**/*.js',
            dest: 'generated/js'
          }]
        }
    },

    watch: {
        options: {
          livereload: true
        },

        sass: {
            files: 'scss/**/*.scss',
            tasks: ['compass']
        },
        scripts: {
            files: 'js/**/*.js',
            tasks: ['uglify']
        }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['compass', 'uglify']);
};