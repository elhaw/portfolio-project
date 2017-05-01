module.exports = function(grunt) {

  // grunt.initConfig({
  //   responsive_images: {
  //     dev: {
  //       options: {
  //         engine: 'im',
  //         sizes: [{
  //           width:500,
  //           suffix:'-small',
  //           quality:90
  //         },{

  //           width:1000,
  //           suffix:'-medium',
  //           quality:90
  //         }]
  //       },
  //       files: [{
  //         expand: true,
  //         src: ['*.{gif,jpg,png}'],
  //         cwd: 'images-src/',
  //         dest: 'images'
  //       }]
  //     }
  //   },
  // });

  // grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.registerTask('default', ['responsive_images']);
  grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'portfolio.html': 'minn.html'   // 'destination': 'source'
        
      }
    }
  }
});
  grunt.registerTask('default', ['htmlmin']);
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


};
