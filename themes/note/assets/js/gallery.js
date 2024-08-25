function gallery() {
  // 获取所有包含图片列表的元素，这些元素的 class 为 "language-gallery"
  const elements = document.querySelectorAll(".language-gallery");

  // 将 NodeList 转换为数组并遍历每个元素
  Array.from(elements).forEach((el) => {
    // 将元素的文本内容按换行符分割成图片 URL 列表
    const imgList = el.textContent.trim().split("\n");

    // 在图片列表元素之前插入一个新的 div，用于展示图片
    el.parentNode.insertAdjacentHTML(
      "beforebegin",
      `<div class="picGallery"></div>`
    );

    // 获取新插入的 div
    const picGallery = el.parentNode.previousSibling;

    // 遍历图片 URL 列表并生成 img 标签，将其插入到 picGallery 中
    imgList.forEach((img) => {
      if (img) {
        picGallery.insertAdjacentHTML(
          "beforeend",
          `<div><img src="${img.trim()}" data-lazy-src="${img.trim()}"></div>`
        );
      }
    });
  });

  // 初始化 Viewer.js 插件，将整个文章区域作为图片查看器
  const viewer = new Viewer(document.getElementsByTagName('article')[0]);
}

// 执行 gallery 函数
gallery();
