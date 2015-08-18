$(function() {

var github = new Github({
  username: "JustinPatenaude",
  password: "froggy951753",
  auth: "basic"
});

var repo = github.getRepo(github, 'jekyll');

console.log(repo);

});
