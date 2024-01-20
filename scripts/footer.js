import { openContactWindow, closeContactWindow } from "./utility.js";


window.addEventListener("DOMContentLoaded", (event) => {

    const contact = document.querySelector('.contact');
    const contactWindow = document.querySelector('.contact-window');
    const checkBox = document.querySelector('.checkbox');
    const menus = document.querySelector('.menus');
    let menusVisibility = true;


    function popUpMenus() {
        if(menusVisibility === true) {
            menus.id = 'active-menu';
        } else {
            menus.id = '';
        }
        menusVisibility = !menusVisibility;
    }


    function ContactPopUp() {
        openContactWindow();
        const okBtn = contactWindow.querySelector('button');
        okBtn.addEventListener('click', closeContactWindow);
    }


    if (contact) {
        contact.addEventListener('click', ContactPopUp, false);
    }
    if (checkBox) {
        checkBox.addEventListener('click', popUpMenus, false);
    }
});