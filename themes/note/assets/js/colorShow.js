function drawColorWheels() {
  let colorWheelElements = Array.from(
    document.getElementsByClassName("colorWheel")
  );

  colorWheelElements.forEach((el) => drawColorWheel(el));
  // 绘制色轮函数
  function drawColorWheel(el) {
    // 从 data-colors 属性中获取颜色数据
    const colors = eval(el.getAttribute("data-colors"));

    const svg = document.getElementById("colorWheel");
    const radius = 200; // 色轮的半径
    const centerX = 200;
    const centerY = 200;
    const numberOfColors = colors.length;
    const angleStep = (2 * Math.PI) / numberOfColors; // 每个扇形的角度
    colors.forEach((color, i) => {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      const middleAngle = (startAngle + endAngle) / 2;

      // 创建扇形路径
      const largeArcFlag = angleStep > Math.PI ? 1 : 0;
      const startX = centerX + radius * Math.cos(startAngle);
      const startY = centerY + radius * Math.sin(startAngle);
      const endX = centerX + radius * Math.cos(endAngle);
      const endY = centerY + radius * Math.sin(endAngle);

      const pathData = `
            M ${centerX} ${centerY}
            L ${startX} ${startY}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
            Z
        `;

      // 创建扇形元素
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", pathData);
      path.setAttribute("fill", color);
      el.appendChild(path);

      // 创建文本元素
      const textX = centerX + (radius / 1.3) * Math.cos(middleAngle);
      const textY = centerY + (radius / 1.3) * Math.sin(middleAngle);

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", textX);
      text.setAttribute("y", textY);
      text.setAttribute("fill", "white");
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("font-size", "22");
      text.textContent = color;
      el.appendChild(text);

      // 在所有扇形和文本的上方添加中心的大白色圆圈
      const centerCircle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      centerCircle.setAttribute("cx", centerX);
      centerCircle.setAttribute("cy", centerY);
      centerCircle.setAttribute("r", "100"); // 白色圆圈的半径
      centerCircle.setAttribute("fill", "white");
      el.appendChild(centerCircle);
    });
  }
}
drawColorWheels();

function colorsList() {
  let colorListElements = Array.from(
    document.getElementsByClassName("colorList")
  );

  colorListElements.forEach((el) => setColorList(el));

  function insertHtm(el, groupedData) {
    // 遍历分组数据
    for (let group in groupedData) {
      // 创建一个组的标题
      const groupTitle = document.createElement("h3");
      groupTitle.textContent = group;
      el.appendChild(groupTitle);

      // 创建一个表格
      const tb = document.createElement("table");

      // 遍历组内的数据项
      groupedData[group].forEach((item, index) => {
        // 如果当前是新的一行，创建一个新的 `tr`
        if (index % 7 === 0) {
          let tr = document.createElement("tr");
          tb.appendChild(tr);
        }
        const td = document.createElement("td");
        td.textContent = `${item.name}-${item.hex}-${item.hex}`;
        td.style.width = "180px";  // 设置宽度
        td.style.height = "50px";  // 设置高度
        td.style.backgroundColor = item.hex;  // 设置高度
        tb.appendChild(td);
      });

      // 将列表添加到容器
      el.appendChild(tb);
    }
  }

  function setColorList(el) {
    let groupedData = [];
    const url = el.getAttribute("data-filePath");
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        data = eval(data);
        // 调用分组函数
        groupedData = groupByLastCharacter(data);
        insertHtm(el, groupedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // 按 name 字段的最后一个字分组
  function groupByLastCharacter(data) {
    return data.reduce((acc, item) => {
      // 提取 name 的最后一个字
      const lastChar = item.name.slice(-1);

      // 如果该字尚未作为键存在于结果中，则创建一个新数组
      if (!acc[lastChar]) {
        acc[lastChar] = [];
      }

      // 将当前项添加到相应的分组中
      acc[lastChar].push(item);
      return acc;
    }, {});
  }
}
colorsList();
