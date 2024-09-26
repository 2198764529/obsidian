
// 添加事件函数
function addScollMenuVisibility() {
  const bookMenu = document.getElementsByClassName("book-menu")[0];
  const computedStyle = window.getComputedStyle(bookMenu);  
  let lastScrollPosition = 0;
  let isMenuVisible = true;
  function scollMenuVisibility() {
    // 向下滚动的时候隐藏，向上滚动的时候显示
  
    const bookMenu = document.querySelector(".book-menu");
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 90 * 16) {
      // 假设rem是以16px为基准
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        // 向下滚动
        if (isMenuVisible) {
          bookMenu.classList.add("hidden");
          isMenuVisible = false;
        }
      } else {
        // 向上滚动
        if (!isMenuVisible) {
          bookMenu.classList.remove("hidden");
          isMenuVisible = true;
        }
      }
      lastScrollPosition = currentScrollPosition;
    }
  }

  if (computedStyle.display == "block"){
    window.addEventListener("scroll", scollMenuVisibility);
  }
}
addScollMenuVisibility();
