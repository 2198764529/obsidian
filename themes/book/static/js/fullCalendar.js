function calendarRender(content) {
  document.addEventListener("DOMContentLoaded", function () {
    // let content = "{{ $page := .Site.GetPage `/posts/日志.md` }}{{ $page.RawContent }}";

    var calendarEl = document.getElementById("calendar");
    const jsonData = parseMarkdownToJSON(content);
    var calendar = new FullCalendar.Calendar(calendarEl, {
        contentHeight: 'auto',

      initialView: "dayGridMonth",
      locale: "zh-cn",
      events: jsonData,
      headerToolbar: {
        right: "prev,next today", // 左侧按钮，包括前一个、后一个和今天
        // center: 'title',        // 中间标题
        left: "title",
        // right: 'dayGridMonth,timeGridWeek,timeGridDay' // 右侧切换视图的按钮

      },
      titleFormat: { month: 'short', day: 'numeric' }
    });
    calendar.render();
  });
}
