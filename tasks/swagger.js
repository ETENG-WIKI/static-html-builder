module.exports = function(grunt) {

  grunt.config('swagger-js-codegen', {
    options: {
      apis: [{
        swagger: 'http://192.168.0.53/mvapi/swagger.json',
        className: 'MVAPI',
        moduleName: 'MVAPI',
        fileName: 'mvapi.js',
        angularjs: true
      }],
      dest: 'app/js/services'
    },
    dist: {}
  });

};
