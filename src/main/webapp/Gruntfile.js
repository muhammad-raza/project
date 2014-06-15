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
          files: {
            'generated/js/output.min.js': ['js/jquery.js']
          }
        }
    },

    watch: {
    options: {
      livereload: true
    },

        css: {
            files: 'scss/**/*.scss',
            tasks: ['compass']
        }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('w', ['watch']);
  grunt.registerTask('default', ['compass', 'uglify']);
};