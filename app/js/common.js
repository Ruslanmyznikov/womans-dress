$(function() {

    let showPopup = innerId => {
        let inner = document.querySelector(`#${innerId}`);
        let popupWindow = document.createElement("div");
        let popup = document.createElement("div");
        let closePopup = document.createElement("div");

        popupWindow.className = "popup-wrapper";
        popup.className = "popup";
        closePopup.className = "close-popup";

        popup.innerHTML = inner.innerHTML
        closePopup.innerHTML = '&times;'

        popupWindow.onclick = e => {
            if (e.target === popupWindow) hidePopup();
        };
        closePopup.onclick = () => hidePopup();

        popup.appendChild(closePopup)
        popupWindow.appendChild(popup)
        document.querySelector("body").appendChild(popupWindow);
        document.querySelector("body").style.overflow = "hidden";
    };

    let hidePopup = () => {
        let popupWindow = document.querySelector(".popup-wrapper");
        popupWindow.parentNode.removeChild(popupWindow)
        document.querySelector("body").style.overflow = "auto";
    };

    window.onload = () => {
        document.querySelectorAll(".popup-button").forEach(
            button => button.onclick = () => {
                showPopup(button.dataset.for);

            }
        );
    };


});
window.addEventListener('DOMContentLoaded', function() {
    var burgers = document.querySelectorAll(".burger-container");
    for (var i = 0; i < burgers.length; i++) {
        toggle.apply(burgers[i]);
    }

    var control = document.getElementById("chk-control"), child;
    control.indeterminate = true;
    control.addEventListener('click', function() {
        if (this.checked) {
            for (let i = 0; i < burgers.length; i++) {
                child = burgers[i].children[0];
                child.classList.add(child.id + "-open");
            }
        }
        else {
            for (let i = 0; i < burgers.length; i++) {
                child = burgers[i].children[0];
                child.classList.remove(child.id + "-open");
            }
        }
    })
});

function toggle() {
    var menu = this.children[0];
    this.addEventListener('click', function() {
        menu.classList.toggle(menu.id + "-open");
    });
}
