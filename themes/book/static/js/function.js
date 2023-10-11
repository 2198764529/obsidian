function updateTimestampEveryMinute(elementId) {
    // 定义更新函数
    function updateTimestamp() {
      const element = document.getElementById(elementId);
      if (element) {
        const targetTimestamp = parseInt(element.dataset.unix); // 从元素中获取时间戳
        const currentTimestamp = Math.floor(Date.now() / 1000); // 当前时间戳，单位为秒
        const timestampDifference = currentTimestamp - targetTimestamp;
        console.log(element,targetTimestamp,timestampDifference);
  
        if (timestampDifference < 3600) {
          // 不到1小时，显示分钟数
          const minutes = Math.floor(timestampDifference / 60);
          element.textContent = `${minutes} 分钟前`;
        } else if (timestampDifference < 86400) {
          // 不到24小时，显示小时数
          const hours = Math.floor(timestampDifference / 3600);
          element.textContent = `${hours} 小时前`;
        } else if (timestampDifference < 31536000) {
          // 不到1年，显示month-day
          const date = new Date(targetTimestamp * 1000); // 将时间戳转换为毫秒
          const month = date.getMonth() + 1; // 月份从0开始
          const day = date.getDate();
          element.textContent = `${month}-${day}`;
        } else {
          // 大于1年，显示year-month-day
          const date = new Date(targetTimestamp * 1000);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          element.textContent = `${year}-${month}-${day}`;
        }
      } else {
        console.log(`元素 ID 为 ${elementId} 不存在`);
      }
    }
  
    // 初始页面加载时调用一次
    updateTimestamp();
  
    // 设置每分钟刷新一次时间
    setInterval(updateTimestamp, 60000); // 60000 毫秒等于 1 分钟
  }