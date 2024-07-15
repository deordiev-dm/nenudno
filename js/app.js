(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (e => {
        document.querySelector(".intro__cta");
        const thoughts = document.querySelectorAll(".thoughts__item");
        document.addEventListener("mousemove", (e => {
            if (e.target.closest(".intro__cta")) {
                let ms = 0;
                thoughts.forEach((thought => {
                    setTimeout(hideElement, ms, thought);
                    ms += 150;
                }));
            } else {
                let ms = 0;
                thoughts.forEach((thought => {
                    setTimeout(showElement, ms, thought);
                    ms += 150;
                }));
            }
        }));
        function hideElement(elem) {
            elem.classList.add("hidden");
        }
        function showElement(elem) {
            elem.classList.remove("hidden");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();