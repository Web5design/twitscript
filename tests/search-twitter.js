var twitscript = require('../src/twitscript'),
	sys = require('sys'),
	assert = require('assert');

var twitter = new twitscript.init();
assert.equal(typeof twitter, 'object', 'Twitscript successfully loaded.');

twitter.searchTwitter({"q": "ryanmcgrath"}, function(data) {
	assert.equal(typeof data, 'object', 'Got search data back and Twitscript works fine.');
});
