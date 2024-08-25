function TableOfContents() {
  // 获取所有导航链接
  let navLinks = document.querySelectorAll("#TableOfContents a");

  // 监听页面滚动事件
  window.addEventListener("scroll", () => {
    // 获取当前滚动位置
    const scrollPosition = window.scrollY;

    // 遍历所有锚点位置，判断当前滚动位置处于哪个区域
    for (const link of navLinks) {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (section.offsetTop <= scrollPosition) {
        // 当滚动位置处于某个区域时，为对应的导航链接添加样式
        link.classList.add("active");
      } else {
        // 移除其他导航链接的样式
        link.classList.remove("active");
      }
    }
  });
}
TableOfContents()