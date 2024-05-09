function calendarRender() {
  document.addEventListener("DOMContentLoaded", function () {
    var events = [];
    fetch("/data/myData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (var i in data) {
          var item = data[i];
          for (var i2 in item["events"]) {
            events.push({
              title: item["events"][i2],
              start: item["date"],
            });
          }
        }
        var calendarEl = document.getElementById("calendar");
        var calendar = new FullCalendar.Calendar(calendarEl, {
          contentHeight: "auto",

          initialView: "dayGridMonth",
          locale: "zh-cn",
          headerToolbar: {
            right: "prev,today,next", // 左侧按钮，包括前一个、后一个和今天
            left: "title",
            // right: 'dayGridMonth,timeGridWeek,timeGridDay' // 右侧切换视图的按钮
          },
          buttonText: {
            month: "月视图", // 更改 "month" 按钮的标题
            week: "周视图", // 更改 "week" 按钮的标题
            day: "日视图", // 更改 "day" 按钮的标题
          },
          // titleFormat: function (info) {
          //   return `${info.date.year}年${info.date.month + 1}月`;
          // },
          dayHeaderContent: function (info) {
            return info.text.replace("周", "");
          },
          dayCellContent: function (info) {
            // 添加节假日
            var d = Lunar.fromDate(info.date);
            var d2 = Solar.fromDate(info.date);

            var text = d.getFestivals() + d2.getFestivals();
            if (text.length == 0) {
              text = `<small>${d.getDayInChinese()}</small>`;
            } else {
              text = `<small class="festivals">${text}</small>`;
            }
            return {
              html: `<span>${info.dayNumberText.replace(
                "日",
                ""
              )}</span> ${text}`,
            };
          },
          events: events
          // dateClick: function(info) {
          //   calendar.gotoDate( info.dateStr );

          // },
        });
        calendar.render();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
}

calendarRender();
