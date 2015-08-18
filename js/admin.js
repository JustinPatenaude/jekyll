$(function() {

var github = new Github({
  username: "JustinPatenaude",
  password: "froggy951753",
  auth: "basic"
});

var repo = github.getRepo(github, 'jekyll');

console.log(repo);

repo.read('gh-pages', 'about.md', function(err, data) {
  $('.show_page').html(data);
});

});
