'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.nblog = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
//  custom_options: function(test) {
//    test.expect(1);
//
//    var actual = grunt.file.read('tmp/custom_options');
//    var expected = grunt.file.read('test/expected/custom_options');
//    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
//
//    test.done();
//  },
  one : function(test){
    test.expect(1);
    var output = grunt.file.read('tmp/posts/first-post.json');
    var expected = grunt.file.read('test/expected/one.json');
    test.equal(output, expected, 'First post test');
    test.done();
  },
  dos : function(test){
    test.expect(1);
    var output = grunt.file.read('tmp/posts/second-post.json');
    var expected = grunt.file.read('test/expected/two.json');
    test.equal(output, expected, 'Second post test');
    test.done();
  },
  computer_categories : function(test){
    test.expect(1);
    var output = grunt.file.read('tmp/categories/computer_category.json');
    var expected = grunt.file.read('test/expected/computer.json');
    test.equal(output, expected, 'Computer Category');

    test.done();
  },
  guitar_categories : function(test){
    test.expect(1);
    var output = grunt.file.read('tmp/categories/guitar_category.json');
    var expected = grunt.file.read('test/expected/guitar.json');
    test.equal(output, expected, 'Guitar Category');
    
    test.done();
  },
  categories : function(test){
    test.expect(1);
 
    var output = grunt.file.read('tmp/categories/home_category.json');
    var expected = grunt.file.read('test/expected/home.json');
    test.equal(output, expected, 'Home Category');

    test.done();
  }

};
