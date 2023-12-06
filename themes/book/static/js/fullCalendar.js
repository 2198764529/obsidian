function calendarRender(content) {
  document.addEventListener("DOMContentLoaded", function () {
    // let content = "{{ $page := .Site.GetPage `/posts/日志.md` }}{{ $page.RawContent }}";
    const specificDateTime = new Date(); // 月份是从 0 开始的，所以 11 表示12月
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
        left: "prev,today,next",
        // right: 'dayGridMonth,timeGridWeek,timeGridDay' // 右侧切换视图的按钮
       

      },
      buttonText: {
        today: dateTimeString, // 更改 "today" 按钮的标题
        month: '月视图', // 更改 "month" 按钮的标题
        week: '周视图', // 更改 "week" 按钮的标题
        day: '日视图' // 更改 "day" 按钮的标题
      },
      titleFormat:function (info) {
        return `${info.date.year}年${info.date.month+1}月`;
      },
      dayHeaderContent:function (info) {
        return info.text.replace("周",'')
      },
      dayCellContent: function (info) {
        // 自定义日期格式
        var d = Lunar.fromDate(info.date);
        var d2 = Solar.fromDate(info.date);

        var text=d.getFestivals()+d2.getFestivals();
        if (text.length==0){
          text = `<small>${d.getDayInChinese()}</small>`
        }else{
          text = `<small class="festivals">${text}</small>`
        }
        return {html:`<span>${info.dayNumberText.replace("日","")}</span> ${text}`}
      },
      // dateClick: function(info) {
      //   calendar.gotoDate( info.dateStr );

      // },
     
    });
    console.log(HolidayUtil.getHoliday(2020, 5, 2) + '');

    calendar.render();
  });
  
}

