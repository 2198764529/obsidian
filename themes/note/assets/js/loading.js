window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loading");
    loader.style.display = "none"; // 页面加载完后隐藏加载动画
  }, 250); // 延迟 1 秒 (1000 毫秒)
});
