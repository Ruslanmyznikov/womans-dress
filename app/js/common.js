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
var child_0 = $(".span1");
var child_1 = $(".span2");
var child_2 = $(".span3");
function returnAnimate(){
    $(".span1 , .span2 , .span3").css({
        "transform": "translate3D(0%, 0, 0) rotate(0)",
        "opacity":"1"
    });
};
function goAnimate_0(){
    $(child_0).css({
        "transform": "translate3D(0%, .6em, 0) rotate(0)"
    });

    $(child_1).css({
        "transform": "translate3D(50%, 0, 0)",
        "opacity":".5"
    });

    $(child_2).css({
        "transform": "translate3D(0%, -.6em, 0)"
    });

    setTimeout(function(){
        $(child_0).css({
            "transform": "translate3D(0%, .6em, 0) rotate(45deg)"
        });

        $(child_1).css({
            "transform": "translate3D(-100%, 0, 0)",
            "opacity":"0"
        });

        $(child_2).css({
            "transform": "translate3D(0%, -.6em, 0) rotate(135deg)"
        });
    }, 600)
};

$(".toogle_menu").on("click", function(){
    $(this).toggleClass("active");
    $(".hero__nav-mobile__pop").toggleClass("open_toggle");

    if($(this).hasClass("active")){
        goAnimate_0();
    }

    else{
        returnAnimate();
        return false;
    }
});