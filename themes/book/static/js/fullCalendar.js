function calendarRender(content) {
  document.addEventListener("DOMContentLoaded", function () {
    // let content = "{{ $page := .Site.GetPage `/posts/日志.md` }}{{ $page.RawContent }}";
    const specificDateTime = new Date(2012, 11, 2, 18, 23); // 月份是从 0 开始的，所以 11 表示12月
    const year = specificDateTime.getFullYear();
    const month = String(specificDateTime.getMonth() + 1).padStart(2, '0'); // 月份加1
    const day = String(specificDateTime.getDate()).padStart(2, '0');
    const hours = String(specificDateTime.getHours()).padStart(2, '0');
    const minutes = String(specificDateTime.getMinutes()).padStart(2, '0');
    
    const dateTimeString = `⏰${year}年${month}月${day}日 ${hours}时${minutes}分`;
    
    var calendarEl = document.getElementById("calendar");
    const jsonData = parseMarkdownToJSON(content);
    var calendar = new FullCalendar.Calendar(calendarEl, {
        contentHeight: 'auto',

      initialView: "dayGridMonth",
      locale: "zh-cn",
      events: jsonData,
      headerToolbar: {
        right: "", // 左侧按钮，包括前一个、后一个和今天
        // center: 'title',        // 中间标题
        left: "today",
        // right: 'dayGridMonth,timeGridWeek,timeGridDay' // 右侧切换视图的按钮
       

      },
      buttonText: {
        today: dateTimeString, // 更改 "today" 按钮的标题
        month: '月视图', // 更改 "month" 按钮的标题
        week: '周视图', // 更改 "week" 按钮的标题
        day: '日视图' // 更改 "day" 按钮的标题
      },
      titleFormat: { month: 'short', day: 'numeric' },
      dayCellContent: function (arg) {
        // 自定义日期格式
        return arg.dayNumberText.replace("日","");

      },
      dateClick: function(info) {
        alert('Clicked on: ' + info.dateStr);
        const nextMonth = info.view.currentDate.add(1, 'month');

        $('#calendar').fullCalendar('gotoDate', nextMonth);
      }
    });
    calendar.render();
  });
}

