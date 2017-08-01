module.exports = function(grunt) {

  grunt.config('aliyun_oss', {
    options: {
      accessKeyId: 'xxxx',
      secretAccessKey: 'xxxx',
      endpoint: 'http://oss-cn-qingdao.aliyuncs.com',
      bucketName: 'eteng-etd',
      cacheControl: 'max-age=31536000'
    },
    files: {
      expand: true,
      cwd: 'dist',
      src: ['**/*'],
      dest: 'jshop/'
    }
  });

};