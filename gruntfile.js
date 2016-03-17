module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '_site'
                }
            }
        },
        watch: {
          livereload: {
            files: [
                '_src/_config.yml',
                '_src/_data/**',
                '_src/**.html',
                '_src/_layouts/**',
                '_src/_posts/**',
                '_src/_includes/**',
                '_src/_less/**'
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
              livereload: true
            },
          },
          less : {
              files : ['./**/**/*.less'],
              tasks: ['less','shell:jekyllBuild'],
              options: {
                livereload: true
              },
          }
      },
      less: {
        development: {
            options: {
                paths: ["./src/_less"]
            },
            files: [
                {
                  "./_src/style/ui.css" : "./_src/_less/bootstrap.less"
                },
                {
                   "./_src/style/doc.css" : "./_src/_less/doc.less"
                }
            ]
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['shell', 'connect', 'watch'])
};
