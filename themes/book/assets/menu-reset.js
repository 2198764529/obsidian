(function() {
  var menu = document.querySelector("aside .book-menu-content");
  addEventListener("beforeunload", function(event) {
      localStorage.setItem("menu.scrollTop", menu.scrollTop);
      console.log("1");
  });
  var lable = document.getElementsByClassName("book-menu-overlay");

  menu.scrollTop = localStorage.getItem("menu.scrollTop");
})();
