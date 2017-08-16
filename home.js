$( document ).ready(function() {
  var elem = $('.div')
  var classes = ['red', 'green', 'yellow', 'magenta', 'blue'];
  var currentIndex = 0;
  
  elem.addClass(classes[0]);
  
  setInterval(function() {
    ChangeClass();
  }, 1000);
  
  function ChangeClass() {
    elem.removeClass(classes[currentIndex]);
    currentIndex++; 
    if (currentIndex > classes.length - 1) {
      currentIndex = 0;
    }
    elem.addClass(classes[currentIndex]);
  }
});