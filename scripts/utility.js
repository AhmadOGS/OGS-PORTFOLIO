import { 
    generalInfos,
    extraInfos,
    favs,
    works,
    learnings,
    contactWindow,
    buttonsList,
    boxesList
} from "./elements.js";

function blurEverything() {
    if(generalInfos) {
        generalInfos.id = 'blur';
    }
    if(extraInfos) {
        extraInfos.id = 'blur';
    }
    if(favs) {
        favs.id = 'blur';
    }
    if(works) {
        works.id = 'blur';
    }
    if(learnings) {
        learnings.id = 'blur';
    }
}


function clearTheBlur() {
    if(generalInfos) {
        generalInfos.id = '';
    }
    if(extraInfos) {
        extraInfos.id = '';
    }
    if(favs) {
        favs.id = '';
    }
    if(works) {
        works.id = '';
    }
    if(learnings) {
        learnings.id = '';
    }
}

export function openContactWindow() {
    contactWindow.style.visibility = 'visible';
    contactWindow.style.top = '25%';
    blurEverything();
  
}

export function closeContactWindow() {
    contactWindow.style.visibility = 'hidden';
    contactWindow.style.top = '20%';
    clearTheBlur();
}


export function activateFavBox(name) {
    for(let btn in buttonsList) {
        if(btn !== name) {
            buttonsList[btn].className = null;
        } else if(btn === name) {
            buttonsList[btn].className = 'activated';
        }
    }
    for(let box in boxesList) {
        if(box !== name) {
            boxesList[box].id = null;
        }else if(name === 'songs') {
            if(box === 'songs') {
                boxesList[box].id = 'active-songs';
            }
        } else if (box === name) {
            boxesList[box].id = 'active';
        }
    }
}
