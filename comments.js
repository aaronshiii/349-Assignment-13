(function (window) {
  'use strict';

  /*
const getPosts = () =>
{
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts=> console.log(posts))
}
*/
fetch('http://jsonplaceholder.typicode.com/posts').then(function(result) {
  return result.json();
}).then(function(json){
  for(var i=0; i < json.length; i++){
    var postText =
      '<article>' +
          '<h2 data-posts="title">' + post.title + '</h2>' +
          '<p data-posts="body">' + post.body.replace('\n', '<br>') + '</p>' +
          '<button data-posts="id" value="' + post.id + '" type="button">Show comments</button>' +
      '</article>';
    $('body').append(postText);
}
});

const BUTTON_SELECTOR = '[data-posts="id"]';

let buttons = document.querySelectorAll(BUTTON_SELECTOR);

buttons.forEach(function (button) {
  'use strict';

  let sectionSelector = `#comments-${button.value}`;
  let commentSection = document.querySelector(sectionSelector);

  button.addEventListener('click', function (event) {
    if (commentSection.hidden) {
      commentSection.hidden = false;
      button.textContent = 'Hide comments';
    } else {
      commentSection.hidden = true;
      button.textContent = 'Show comments';
    }

    event.preventDefault();
  });

});

})(window);
