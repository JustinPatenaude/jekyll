$(function() {

var userName = "JustinPatenaude";

var github = new Github({
  username: "JustinPatenaude",
  password: "",
  auth: "basic"
});

var repo = github.getRepo(userName, 'jekyll');

repo.read('gh-pages', 'index.html', function(err, data) {
  $('.show_page').html(data);
});

$('.save_page').click(function(){
  var newContents = $('.show_page').val();
  repo.write('gh-pages', 'index.html', newContents, 'Updated from website', function(err) {});
});

$()

});
