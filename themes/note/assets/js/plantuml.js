function plantuml() {
  let elements = document.querySelectorAll(".language-mindmap,.language-uml");

  if (elements) {
    Array.from(elements).forEach((el) => {
      setPlantuml(el);
    });
  }
  // 发送 plantuml 请求处理
  function setPlantuml(el) {
    let lang = el.dataset.lang;
    let el_innerText = el.innerText;
    // 思维导图
    if (lang == "mindmap") {
      el_innerText = el_innerText.trim();
      // 如果 开头为 +或-
      if (el_innerText.match(/^[+-]/gm)) {
        el_innerText = el_innerText.replace(/^\+\d/gm, function (match) {
          // 使用 repeat 方法生成相同数量的星号
          return `${"*".repeat(match.length + 1)} `;
        });
      }
      // 如果 开头为 任意个\t
      else if (el_innerText.match(/^\t*/)) {
        el_innerText = el_innerText.replace(/^\t*/gm, function (match) {
          // 使用 repeat 方法生成相同数量的星号
          return `${"*".repeat(match.length + 1)} `;
        });
      } else {
        // 异常情况
        console.log(`el_innerText: ${el_innerText}`);
      }

      // 消除`[+-*]`号和`]_|:`之间的空格, 并在后面加上空格
      el_innerText = el_innerText.replace(/^\** [\]\|_:]/gm, function (x) {
        return `${x.replace(" ", "")} `;
      });
    }

    let iframe = document.createElement("embed");
    el_innerText = `@start${lang} \n${getCssPlantuml()}\n${el_innerText}\n@end${lang}`;
    el_innerText = plantumlEncoder.encode(el_innerText);
    iframe.src = `https://www.plantuml.com/plantuml/svg/~1${el_innerText}`;
    iframe.style.display = "inline";
    el.innerHTML = iframe.outerHTML;
  }

  // 返回 CssPlantuml 样式
  function getCssPlantuml() {
    const bodyStyles = getComputedStyle(document.body);
    const bodyFontColor = bodyStyles
      .getPropertyValue("--body-font-color")
      .trim();
    const bodyBGColor = bodyStyles.getPropertyValue("--body-background").trim();
    const cardBG = bodyStyles.getPropertyValue("--card-bg").trim();
    return `
        <style>
        mindmapDiagram {
            node {
              BackgroundColor ${bodyBGColor}
              FontColor ${bodyFontColor}
              LineColor ${bodyFontColor}
              LineThickness 0.5
            }
            arrow  {
              LineColor ${bodyFontColor}
              LineThickness 0.3
            }
          }
          componentDiagram {
            node {
              FontColor ${cardBG}
              // BackgroundColor ${bodyBGColor}
              LineColor ${cardBG}
            }
            arrow {
              LineColor ${cardBG}
              FontColor ${bodyFontColor}
              LineThickness 5
            }
          }
          document {
            width 100%
            BackgroundColor ${bodyBGColor}
            node {
              FontColor ${bodyFontColor}
              LineColor ${bodyFontColor}
            }
            arrow {
              LineColor ${bodyFontColor}
            }
          }
        </style>`;
  }
}
plantuml();
