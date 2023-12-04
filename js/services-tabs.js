window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const list = this.document.querySelector(".list");
    const listItem = this.document.querySelectorAll(".list__item");
    const contentItem = this.document.querySelectorAll(".content__item");

    function hideTabContent(a) {
        for (let i = a; i < contentItem.length; i++) {
            contentItem[i].classList.remove("active");
            contentItem[i].classList.add("hide");
        }
    }

    function hideTabList(a) {
        for (let i = a; i < listItem.length; i++) {
            listItem[i].classList.remove("active-item");
        }
    }

    hideTabContent(1);
    hideTabList(1);

    function showTabContent(b) {
        if (contentItem[b].classList.contains("hide")) {
            contentItem[b].classList.remove("hide");
            contentItem[b].classList.add("active");
        }
    }

    function showTabList(b) {
        listItem[b].classList.add("active-item");
    }

    list.addEventListener("click", function (event) {
        const target = event.target;
        if (target && target.classList.contains("list__item")) {
            for (let i = 0; i < listItem.length; i++) {
                if (target == listItem[i]) {
                    hideTabContent(0);
                    hideTabList(0);
                    showTabContent(i);
                    showTabList(i);
                    break;
                }
            }
        }
    });
});
