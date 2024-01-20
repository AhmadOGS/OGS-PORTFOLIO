

// HTML Elements:
const clicksList = {
    'first': document.getElementById('one'),
    'second': document.getElementById('two'),
    'third': document.getElementById('three'),
    'fourth': document.getElementById('four')
};

const slidesList = {
    'first': document.querySelector('.slide1'),
    'second': document.querySelector('.slide2'),
    'third': document.querySelector('.slide3'),
    'fourth': document.querySelector('.slide4')
};

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');



// Variables:
const s1 = 'first';
const s2 = 'second';
const s3 = 'third';
const s4 = 'fourth';


// Setting Properties:
clicksList[s1].style.backgroundColor = '#3b4661';
slidesList[s1].style.display = 'block';


// Prev and Next Buttons:
function showPrev() {
    let previous = " ";
    for(let slide in slidesList) {
        if(slidesList[s1].style.display === 'block') {
            slidesList[s1].style.display = 'none';
            slidesList[s4].style.display = 'block';
            for(let dot in clicksList) {
                clicksList[dot].style.backgroundColor = '#536c7f';
            }
            clicksList[s4].style.backgroundColor = '#3b4661';
            break;
        }
        if(slidesList[slide].style.display === 'block') {
            slidesList[slide].style.display = 'none';
            slidesList[previous].style.display = 'block';
            for(let dot in clicksList) {
                clicksList[dot].style.backgroundColor = '#536c7f';
            }
            clicksList[previous].style.backgroundColor = '#3b4661';
            break;
        }
        previous = slide;
    }
}

function showNext() {
    let next = 0;
    for(let slide in slidesList) {
        if(next === 1) {
            for(let dot in clicksList) {
                clicksList[dot].style.backgroundColor = '#536c7f';
            }
            clicksList[slide].style.backgroundColor = '#3b4661';
            slidesList[slide].style.display = 'block';
            break;
        }
        if(slidesList[s4].style.display === 'block') {
            slidesList[s4].style.display = 'none';
            slidesList[s1].style.display = 'block';
            for(let dot in clicksList) {
                clicksList[dot].style.backgroundColor = '#536c7f';
            }
            clicksList[s1].style.backgroundColor = '#3b4661';
            break;
        } else if(slidesList[slide].style.display === 'block') {
            next = 1;
            slidesList[slide].style.display = 'none';
        }
    }
}


// Slide Functions:
function slideShow(slideNum) {
    for(let slide in slidesList) {
        if (slide === slideNum) {
            slidesList[slide].style.display = 'block';
        } else {
            slidesList[slide].style.display = 'none';
        }
    }
    for(let dot in clicksList) {
        if(dot === slideNum) {
            clicksList[dot].style.backgroundColor = '#3b4661';
        } else {
            clicksList[dot].style.backgroundColor = '#536c7f';
        }
    }
}

function slide1() {
    slideShow(s1);
}
function slide2() {
    slideShow(s2);
}
function slide3() {
    slideShow(s3);
}
function slide4() {
    slideShow(s4);
}



// Setting up the Buttons:
prev.addEventListener('click', showPrev);
next.addEventListener('click', showNext);
clicksList[s1].addEventListener('click', slide1);
clicksList[s2].addEventListener('click', slide2);
clicksList[s3].addEventListener('click', slide3);
clicksList[s4].addEventListener('click', slide4);