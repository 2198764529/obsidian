function showSubPagesContainer(el_id){

    // document.get(el_id).style.display = 'none';

}
const navSections = document.getElementsByClassName("nav-section");
// 遍历这些元素
for (let section of navSections) {
    // 添加 onmouseover 事件
    section.onmouseover = function () {
        Array.from(navSections).forEach(element => {
            document.getElementById(`sub-pages-container-${element.id}`).style.display = "none"
        });
        let el = document.getElementById(`sub-pages-container-${this.id}`)
        el.style.display = "block";
        el.classList.add('animate__animated', 'animate__fadeIn');
        document.getElementById("gb-main").classList.add("blurPage")
    };

}

const subPagesContainer = document.getElementsByClassName("sub-pages-container");
// 遍历这些元素
for (let div of subPagesContainer) {

    // 添加 onmouseover 事件
    div.onmouseover = function () {
        document.getElementById(this.id).style.display = "block" 
        document.getElementById("gb-main").classList.add("blurPage")

    };

    // 添加 onmouseout 事件
    div.onmouseout = function () {
        let el = document.getElementById(this.id)
        // document.getElementById(this.id).classList.add('animate__animated', 'animate__backOutUp');
        document.getElementById(this.id).style.display = "none" 
        document.getElementById("gb-main").classList.remove("blurPage")



    };
}
