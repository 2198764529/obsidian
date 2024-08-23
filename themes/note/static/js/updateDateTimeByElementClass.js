function updateDateTimeByElementClass(elementClass) {
  // 定义更新函数
  function updateTimestamp(element) {
    if (!element) {
      console.log("元素不存在");
      return;
    }

    const targetTimestamp = parseInt(element.dataset.unix); // 从元素中获取时间字符串,转时间戳
    const currentTimestamp = Math.floor(Date.now() / 1000); // 当前时间戳，单位为秒
    const timestampDifference = currentTimestamp - targetTimestamp;
    const t_date = new Date(targetTimestamp * 1000); // 将时间戳转换为毫秒
    const c_date = new Date(currentTimestamp * 1000); // 将时间戳转换为毫秒
    const year = t_date.getFullYear();
    const month = t_date.getMonth() + 1; // 月份从0开始
    const day = t_date.getDate();
    const hour = t_date.getHours();
    const minutes = t_date.getMinutes();
    const period = getTimePeriod(hour);
    const timeDict = {
      "1_min": 60,
      "1_hour": 3600,
      "24_hour": 86400,
      "1_year": 31536000,
    };
    if (c_date.getFullYear() - t_date.getFullYear() == 0) {
      //本年内判断
      if (timestampDifference < 0) {
        element.textContent = `待办`;
        if (timestampDifference > -timeDict["24_hour"]) {
          element.textContent = `明天`;
        } else if (timestampDifference > -timeDict["24_hour"] * 2) {
          element.textContent = `后天`;
        }
      } else if (timestampDifference < timeDict["1_min"]) {
        // 不到1分钟，timestampDifference 秒前
        element.textContent = `${timestampDifference} 秒前`;
      } else if (timestampDifference < timeDict["1_hour"]) {
        // 不到1小时， minutes 小时前
        const minutes = Math.floor(timestampDifference / timeDict["1_min"]);
        element.textContent = `${minutes} 分钟前`;
      } else if (timestampDifference < timeDict["24_hour"]) {
        // 不到24小时，显示 hours 小时前
        element.textContent = `${hour} 小时前`;
        if (hour == 0) element.textContent = `今天`;
      } else if (timestampDifference < timeDict["1_year"]) {
        element.textContent = `${month}月${day}日`;
        if (timestampDifference < timeDict["24_hour"] * 2) {
          element.textContent = `昨天`;
        }
        if (hour != 0) element.textContent += `${period}`;
      }
    } else {
      element.textContent = `${year}年${month}月${day}日`;
    }
  }

  function getTimePeriod(hour) {
    if (hour >= 0 && hour < 5) {
      return "凌晨";
    } else if (hour >= 5 && hour < 9) {
      return "早晨";
    } else if (hour >= 9 && hour < 12) {
      return "上午";
    } else if (hour === 12) {
      return "中午";
    } else if (hour > 12 && hour < 18) {
      return "下午";
    } else if (hour >= 18 && hour < 22) {
      return "晚上";
    } else {
      return "深夜";
    }
  }

  function main() {

    const elements = Array.from(document.getElementsByClassName(elementClass));
    elements.forEach(updateTimestamp);
  }

  // 初始页面加载时调用一次
  main();
}
