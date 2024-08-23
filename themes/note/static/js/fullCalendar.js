function calendarRender() {
  // 文档完全加载后执行
  document.addEventListener("DOMContentLoaded", function () {
    getMyData();
  });
  // 通过 fetch 函数获取数据文件,并调用初始化日历组件
  function getMyData() {
    const config = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function (results) {
        results.data.forEach((row, row_index) => {
          if (row.date == null) {
            row.date = "w";
          }
          if (typeof row.events === "string") {
            row.events = row.events.split(",");
          }
        });
      },
    };
    // 获取明天的日期
    const today = new Date();
    const tomorrow = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate() + 1).padStart(2, "0")}`;
    const lastdayOfThisyear = `${today.getFullYear()}-12-31`;
    fetch("/data/myData.csv")
      .then((response) => response.text())
      .then((v) => Papa.parse(v, config).data)
      .then((data) => {
        console.log(data);
        // 创建日历组件并渲染
        getCalendar(
          // 构造事件数据
          data.flatMap((item) =>
            item.events
              ? item.events.map((event) => ({
                  title: event,
                  start: item.date === lastdayOfThisyear ? tomorrow : item.date,
                }))
              : []
          )
        ).render();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  // 创建日历组件
  function getCalendar(events) {
    return new FullCalendar.Calendar(document.getElementById("calendar"), {
      events: events,
      locale: "zh-cn",
      dayHeaderContent: function (info) {
        return info.text.replace("周", "");
      },
      dayCellContent: function (info) {
        // 添加农历(阴历)
        var d = Lunar.fromDate(info.date);
        // 添加阳历
        var d2 = Solar.fromDate(info.date);
        // 连接 24节气、阴历节日、阳历节日
        var text = d.getJieQi() + d.getFestivals() + d2.getFestivals();

        text =
          text.length === 0
            ? `<small>${d.getDayInChinese()}</small>`
            : `<small class="festivals">${text}</small>`;
        return {
          html: `<span>${info.dayNumberText}</span> ${text}`,
        };
      },
    });
  }
}

calendarRender();
