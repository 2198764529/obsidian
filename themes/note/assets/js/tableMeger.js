function tableMeger() {
    // 获取所有行
    const rows = document.querySelectorAll('table tr');
    
    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td');
        
        cells.forEach((cell, cellIndex) => {
            const text = cell.textContent.trim();
            
            // 如果内容以 ^ 开头
            if (text.startsWith('^')) {
                let rowspanCount = 1; // 初始化 rowspan 计数器
                
                // 检查下一行是否为空
                for (let i = rowIndex + 1; i < rows.length; i++) {

                    const nextRowCell = rows[i].querySelectorAll('td')[cellIndex];
                    
                    if (nextRowCell==undefined || nextRowCell.textContent.trim() === '') {
                        rowspanCount++;
                    } else {
                        break; // 如果下一行不为空，停止检查
                    }
                }
                // 如果找到匹配项，设置 rowspan
                if (rowspanCount > 1) {
                    cell.rowSpan = rowspanCount;
                    cell.textContent = cell.textContent.slice(1);
                }
            }
        });
    });
    // 获取所有表格中的 <td> 元素
    const tdElements = document.querySelectorAll('td');

    // 遍历所有 <td> 元素
    tdElements.forEach(td => {
        // 检查 <td> 的内容是否为空
        if (td.textContent.trim() === '') {
            td.remove(); // 删除空白 <td> 元素
        }
    });
}
tableMeger();
