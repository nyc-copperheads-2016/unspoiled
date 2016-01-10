function Controller(view) {
  this.view = view;
  view.controller = this;
}






// Controller.prototype.index = function() {
//   Media.loadMedia().then(function(media){
//     this.view.showFiftyTweets(media);
//   }.bind(this));
// }
