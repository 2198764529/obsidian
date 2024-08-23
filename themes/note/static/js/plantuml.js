function plantuml() {
  let elements = document.querySelectorAll(".language-mindmap,.language-uml");
  if (elements) {
    setPlantuml()
    // 发送 plantuml 请求处理
    function setPlantuml(){
  
      Array.from(elements).forEach((el) => {
        let el_innerText = el.innerText;
        if (el.dataset.lang == "mindmap") {
          el_innerText = el_innerText
            .trim()
            .replace(/^\t*/gm, function (match) {
              // 使用 repeat 方法生成相同数量的星号
              return "*".repeat(match.length + 1) + "  ";
            })
            .replace(/\* (\[|_)/gm, function (x) {
              return x.replace(" ", "");
            });
        }
        let iframe = document.createElement("embed");
        el_innerText =
          `@start${el.dataset.lang} \n<style>${getCssPlantuml()}</style>\n` +
          `${el_innerText}\n@end${el.dataset.lang}`;
        let url =
          "https://www.plantuml.com/plantuml/svg/~1" +
          plantumlEncoder.encode(el_innerText);
        iframe.src = url;
        iframe.style.display = "inline";
        el.innerHTML = iframe.outerHTML;
      });
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
      mindmapDiagram {
          node {
            BackgroundColor _dBackgroundColor
            FontColor _FontColor
            LineColor _LineColor
            LineStyle 4
            LineThickness 0.5
          }
          arrow  {
            LineColor _LineColor
            LineStyle 4
            LineThickness 0.3
          }
        }
        componentDiagram {
          node {
            FontColor _FontColor
            LineColor _LineColor
          }
          arrow {
            LineColor _LineColor
          }
        }
        document {
          width 100%
          BackgroundColor _dBackgroundColor
          node {
            FontColor _FontColor
            LineColor _LineColor
          }
          arrow {
            LineColor _LineColor
          }
      }
      `.replace(/_LineColor/g, bodyFontColor)
      .replace(/_FontColor/g, bodyFontColor)
      .replace(/_dBackgroundColor/g, bodyBGColor);
    }
  }
}
plantuml();
