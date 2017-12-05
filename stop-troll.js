function main() {
  if (isPixel()) {
    stopTroll();
  }
}

function isPixel() {
  return document.title.indexOf("pixel.ee") != -1;
}

function stopTroll() {
  var posts = findPosts();
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    if (post.belongsToTroll()) {
      post.hide();
    }
  }
}

function findPosts() {
  var rawPosts = document.getElementsByClassName('post');
  var posts = [];
  for (var i = 0; i < rawPosts.length; i++) {
    var post = new Post(rawPosts[i]);
    posts.push(post);
  }
  console.log('posts', posts);
  return posts;
}

var Post = function(rawPost) {
  this.rawPost = rawPost;
};

Post.prototype.belongsToTroll = function() {
  return this.rawPost.children[0].innerText.indexOf("Tann") != -1;
};

Post.prototype.hide = function() {
  this.rawPost.style.display = 'none';
};


main();
