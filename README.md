---
title: README
id: 9c03e105ac
datetimeCreate: 2023-09-25 20:47:24
datetimeUpdate: 2024-08-22 17:55:00
---
### 介绍

这是一个用于记录技术文档、个人心得、个人收藏的笔记本，创立于 23 年 7 月。
笔记本的名字叫做 流笔， 意为流动不止的笔，即希望多动笔不要让笔停下来。



### 安装hugo
```
winget install Hugo.Hugo
```


### 运行hugo
```
hugo server -p 80
```


### 项目结构

```mindmap
obsidian
	.gitmodules
	.hugo_build.lock
	config.yml【项目配置文件】
	README.md
	tree.md 
	.github/ 【github 提交文件】
		workflows/
			build.yml
	.obsidian/. 【 obsidian 软件配置目录】
		app.json
		appearance.json
		canvas.json
		community-plugins.json
		core-plugins-migration.json
		core-plugins.json
		graph.json
		hotkeys.json
		templates.json
		text-generator.json
		workspace-mobile.json
		workspace.json
		plugins/
			auto-front-matter/
				data.json
				main.js
				manifest.json
			markdown-table-editor/
				main.js
				manifest.json
				styles.css
			obsidian-git/
				data.json
				main.js
				manifest.json
				styles.css
			obsidian-textgenerator-plugin/
				data.json
				main.js
				manifest.json
				styles.css
			table-editor-obsidian/
				data.json
				main.js
				manifest.json
				styles.css
			templater-obsidian/
				data.json
				main.js
				manifest.json
				styles.css
	archetypes/
		default.md
	content/【用户文档目录】
		_index.md
		images/【图片存放目录】
			img/
				china.png
			personal/
				bg/
					Shenzhen_Observatory2021.jpg
				other/
					Pasted image 20240401181601.png
				study/
					bubbleSort.png
					d862cee765be33d0327662b8f8169dd.png
					insertSort.png
					insertSort2.png
					selectionSort.png
		moments/【moments 类型 md 目录】
			lfeng.md
			中国.md
		notes/【md 文件目录】
			_index.md
			个人/
				_index.md
				修身.md
				关于我.md
				关于篮球.md
				兴起.md
				清单.md
			工具技术/
				git操作.md
				Hugo 参考.md
				markDown 语法.md
				Python 方法参考.md
				_index.md
				技术记录.md
				正则表达式.md
				维基百科.md
				网站收藏.md
				设计语言.md
			理论知识/
				_index.md
				五笔输入法.md
				应用层-Q&A.md
				数学知识.md
				数据结构和算法.md
				考公.md
				计算机网络.md
				运输层-Q&A.md
	data/【json数据目录】
		colors.json
		myData.json
		myMuiscs.json
	resources/
		_gen/
			assets/
				book.scss_e129fe35b8d0a70789c8a08429469073.content
				book.scss_e129fe35b8d0a70789c8a08429469073.json
				scss/
					book.scss_e129fe35b8d0a70789c8a08429469073.content
					book.scss_e129fe35b8d0a70789c8a08429469073.json
	themes/【博客主题目录】
		book/
			go.mod
			README.md
			theme.toml
			archetypes/
				docs.md
				notes.md
			assets/
				book.scss
				clipboard.js
				manifest.json
				menu-reset.js
				mermaid.json
				normalize.css
				search-data.json
				search.js
				sw-register.js
				sw.js
				_custom.scss
				_defaults.scss
				_fonts.scss
				_main.scss
				_markdown.scss
				_print.scss
				_shortcodes.scss
				_utils.scss
				_variables.scss
				plugins/
					highcharts.js
					mermaid.min.js
					plantuml-encoder.min.js
					_numbered.scss
					_scrollbars.scss
				themes/
					_auto.scss
					_dark.scss
					_light.scss
			exampleSite/
				config.toml
				config.yaml
				assets/
					_custom.scss
					_variables.scss
				content.bn/
					_index.md
				content.en/
					_index.md
					docs/
						example/
							hidden.md
							_index.md
							collapsed/
								_index.md
								3rd-level/
									4th-level.md
									_index.md
							table-of-contents/
								with-toc.md
								without-toc.md
								_index.md
						shortcodes/
							buttons.md
							columns.md
							details.md
							expand.md
							hints.md
							katex.md
							mermaid.md
							tabs.md
							_index.md
							section/
								first-page.md
								second-page.md
								_index.md
					menu/
						index.md
					notes/
						creating-a-new-theme.md
						goisforlovers.md
						hugoisforlovers.md
						migrate-from-jekyll.md
						_index.md
				content.ru/
					_index.md
				content.zh/
					_index.md
				resources/
					_gen/
						assets/
							scss/
								book.scss_e129fe35b8d0a70789c8a08429469073.content
								book.scss_e129fe35b8d0a70789c8a08429469073.json
			i18n/
				am.yaml
				bn.yaml
				cn.yaml
				cs.yaml
				de.yaml
				en.yaml
				es.yaml
				fa.yaml
				fr.yaml
				it.yaml
				ja.yaml
				jp.yaml
				ko.yaml
				nb.yaml
				pt.yaml
				ru.yaml
				sv.yaml
				tr.yaml
				uk.yaml
				zh-TW.yaml
				zh.yaml
			images/
				screenshot.png
				tn.png
			layouts/
				404.html
				moments/
					single.html
				partials/ 【积木目录】
					docs/ 【文档】
						logo.html 【Logo】
						comments.html 【】
						footer.html 【】
						header.html 【】
						html-head-title.html 【】
						html-head.html 【】
						languages.html 【】
						menu-bundle.html 【】
						menu-filetree.html 【】
						menu-hugo.html 【】
						menu.html 【】
						note-header.html 【】
						search.html 【】
						taxonomy.html 【】
						title.html 【】
						toc.html 【】
						custom/ 【】
							calendar.html 【】
							myData.html
							params.html
							timeline.html
						inject/ 【】
							body.html 【】
							content-after.html 【】
							content-before.html 【】
							footer.html 【】
							head.html 【】
							menu-after.html 【】
							menu-before.html 【】
							toc-after.html 【】
							toc-before.html 【】
				notes/【note类 目录】
					list.html 【多文件】
					single.html 【单文件】
				shortcodes/ 【自定义模块目录】
					button.html
					columns.html
					data.html
					dataColors.html
					details.html
					expand.html
					hint.html
					katex.html
					section.html
					tab.html
					tabs.html
					totalwordcount.html 
				taxonomy/ 【标签类 htm 目录】
					list.html
					taxonomy.html
				_default/ 【默认类 htm 目录】
					baseof.html
					index.html
					list.html
					single.html
					_markup/
						render-heading.html
						render-image.html
						render-link.html
			static/
				favicon.ico 【博客图标.ico】
				favicon.png 【博客图标.png】
				flexsearch.min.js 【搜索插件】
				assert/【】
					img/
						IMG_20230128_162005 1.jpg
						MinimalistScenery04 1.jpg
						Pasted image 20231226174334.png
						Pasted image 20231226174344.png
						Pasted image 20231226174348.png
						Pasted image 20231226174436.png
						Pasted image 20231226174440.png
						Pasted image 20231226174510.png
						testImg.jpg
				data/【部分数据目录】
					m.json
					myData.json
				fonts/【】
					PingFang-SC-Regular.ttf
					roboto-mono-v13-latin-regular.woff
					roboto-mono-v13-latin-regular.woff2
					roboto-v27-latin-700.woff
					roboto-v27-latin-700.woff2
					roboto-v27-latin-regular.woff
					roboto-v27-latin-regular.woff2
				js/【JS 脚本文件目录】
					fullCalendar.js
					function.js
				katex/ 【公式字体目录】
					auto-render.min.js
					katex.min.css
					katex.min.js
					fonts/
						KaTeX_AMS-Regular.ttf
						KaTeX_AMS-Regular.woff
						KaTeX_AMS-Regular.woff2
						KaTeX_Caligraphic-Bold.ttf
						KaTeX_Caligraphic-Bold.woff
						KaTeX_Caligraphic-Bold.woff2
						KaTeX_Caligraphic-Regular.ttf
						KaTeX_Caligraphic-Regular.woff
						KaTeX_Caligraphic-Regular.woff2
						KaTeX_Fraktur-Bold.ttf
						KaTeX_Fraktur-Bold.woff
						KaTeX_Fraktur-Bold.woff2
						KaTeX_Fraktur-Regular.ttf
						KaTeX_Fraktur-Regular.woff
						KaTeX_Fraktur-Regular.woff2
						KaTeX_Main-Bold.ttf
						KaTeX_Main-Bold.woff
						KaTeX_Main-Bold.woff2
						KaTeX_Main-BoldItalic.ttf
						KaTeX_Main-BoldItalic.woff
						KaTeX_Main-BoldItalic.woff2
						KaTeX_Main-Italic.ttf
						KaTeX_Main-Italic.woff
						KaTeX_Main-Italic.woff2
						KaTeX_Main-Regular.ttf
						KaTeX_Main-Regular.woff
						KaTeX_Main-Regular.woff2
						KaTeX_Math-BoldItalic.ttf
						KaTeX_Math-BoldItalic.woff
						KaTeX_Math-BoldItalic.woff2
						KaTeX_Math-Italic.ttf
						KaTeX_Math-Italic.woff
						KaTeX_Math-Italic.woff2
						KaTeX_SansSerif-Bold.ttf
						KaTeX_SansSerif-Bold.woff
						KaTeX_SansSerif-Bold.woff2
						KaTeX_SansSerif-Italic.ttf
						KaTeX_SansSerif-Italic.woff
						KaTeX_SansSerif-Italic.woff2
						KaTeX_SansSerif-Regular.ttf
						KaTeX_SansSerif-Regular.woff
						KaTeX_SansSerif-Regular.woff2
						KaTeX_Script-Regular.ttf
						KaTeX_Script-Regular.woff
						KaTeX_Script-Regular.woff2
						KaTeX_Size1-Regular.ttf
						KaTeX_Size1-Regular.woff
						KaTeX_Size1-Regular.woff2
						KaTeX_Size2-Regular.ttf
						KaTeX_Size2-Regular.woff
						KaTeX_Size2-Regular.woff2
						KaTeX_Size3-Regular.ttf
						KaTeX_Size3-Regular.woff
						KaTeX_Size3-Regular.woff2
						KaTeX_Size4-Regular.ttf
						KaTeX_Size4-Regular.woff
						KaTeX_Size4-Regular.woff2
						KaTeX_Typewriter-Regular.ttf
						KaTeX_Typewriter-Regular.woff
						KaTeX_Typewriter-Regular.woff2
				plugs/【下载的插件目录，包括JS插件、css插件】
					element-ui.css
					element-ui.js
					fullcalendar-zh-cn.js
					fullcalendar.js
					highcharts.js
					highlight.min.js
					lunar.min.js
					mermaid.js
					mermaid.min.js
					plantuml-encoder.min.js
					viewer.css
					viewer.min.js
					vue.js
				svg/ 【svg 目录】
					calendar.svg
					edit.svg
					menu.svg
					toc.svg
					translate.svg
```