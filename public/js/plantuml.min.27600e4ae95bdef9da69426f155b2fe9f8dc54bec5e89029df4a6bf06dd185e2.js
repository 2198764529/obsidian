function plantuml(){let e=document.querySelectorAll(".language-mindmap,.language-uml");e&&Array.from(e).forEach(e=>{t(e)});function t(e){let s=e.dataset.lang,t=e.innerText;s=="mindmap"&&(t=t.trim(),t.match(/^[+-]/gm)?t=t.replace(/^\+\d/gm,function(e){return`${"*".repeat(e.length+1)} `}):t.match(/^\t*/)?t=t.replace(/^\t*/gm,function(e){return`${"*".repeat(e.length+1)} `}):console.log(`el_innerText: ${t}`),t=t.replace(/^\** [\]|_:]/gm,function(e){return`${e.replace(" ","")} `}));let o=document.createElement("embed");t=`@start${s} 
${n()}
${t}
@end${s}`,t=plantumlEncoder.encode(t),o.src=`https://www.plantuml.com/plantuml/png/~1${t}`,o.style.display="inline",e.innerHTML=o.outerHTML}function n(){const t=getComputedStyle(document.body),e=t.getPropertyValue("--body-font-color").trim(),n=t.getPropertyValue("--body-background").trim(),s=t.getPropertyValue("--card-bg").trim();return`
        <style>
        mindmapDiagram {
            node {
              BackgroundColor ${n}
              FontColor ${e}
              LineColor ${e}
              LineThickness 0.5
            }
            arrow  {
              LineColor ${e}
              LineThickness 0.3
            }
          }
          componentDiagram {
            node {
              FontColor ${s}
              // BackgroundColor ${n}
              LineColor ${s}
            }
            arrow {
              LineColor ${s}
              FontColor ${e}
              LineThickness 5
            }
          }
          document {
            width 100%
            BackgroundColor ${n}
            node {
              FontColor ${e}
              LineColor ${e}
            }
            arrow {
              LineColor ${e}
            }
          }
        </style>`}}plantuml()