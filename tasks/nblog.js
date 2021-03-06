/*
 * grunt-nblog
 * https://github.com/jmzavala/grunt-nblog
 *
 * Copyright (c) 2015 Juan Manuel Zavala
 * Licensed under the MIT license.
 */


'use strict';

var slugify = require('slugify');

/*TODO:
  -Crear HOME
  -Crear clasificación estandar, /tags y otros
  -Crear Ordenar home por fecha de publicación u otro.
  -Paginar no más de 100 items.
*/

module.exports = function(grunt) {
  grunt.registerMultiTask('nblog', 'Create categories files.', function() {
    var options = this.options({
      categoriesPath : 'categories',
      homePath: 'index'

    });
    var categoriesTmp={},
        posts = [];
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var content, file_dest, url;
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
            content = grunt.file.readJSON(filepath);
            var description = content.description;
            
            url = slugify(description.title.toLowerCase());
            file_dest = f.dest+url+'.json';
            var cat = description.categories,c;
            
            description['url'] = url;
            
            
            grunt.file.write(file_dest, JSON.stringify(content));    
            grunt.log.writeln('File "' + file_dest+ '" created.');

            posts.push(description);
            var i =0;
            while (i < cat.length){           
                c = cat[i].toLowerCase();
                categoriesTmp[c]=categoriesTmp[c]||[];
                categoriesTmp[c].push(description);
                i+=1;
            } 
            
            
        }
      });      
    });
    
    for (var key in categoriesTmp) {
      if (categoriesTmp.hasOwnProperty(key)) {
        grunt.file.write(options.categoriesPath+"/"+key+'_category.json',JSON.stringify(categoriesTmp[key]));
      }
    }
        grunt.file.write(options.homePath+"/index.json",JSON.stringify(posts));
  });
};
