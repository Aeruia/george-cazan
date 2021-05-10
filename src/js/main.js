import data from './hobbies.js';

let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

let career = document.getElementsByClassName("career");
for (let i = 2; i < career.length; i++) {
    career[i].style.display = "none";
}
let formation = document.getElementsByClassName("formation");
for (let i = 2; i < formation.length; i++) {
    formation[i].style.display = "none";
}

let readMore = document.getElementsByClassName("read-more");

for (let i = 0; i < readMore.length; i++) {
    if ((readMore[i].value === "career" & career.length > 2) || (readMore[i].value === "formation" & formation.length > 2)) {
        readMore[i].addEventListener("click", handleReadMoreButton);
    } else {
        readMore[i].style.display = "none";
    }

}

function handleReadMoreButton(e) {
    if (e.target.value === "career") {
        for (let i = 2; i < career.length; i++) {
            if (career[i].style.display === "block") {
                career[i].style.display = "none";
                e.target.textContent = "...";
            } else {
                career[i].style.display = "block";
                e.target.textContent = "---";
            }
        }
    }
    if (e.target.value === "formation") {
        for (let i = 2; i < formation.length; i++) {
            if (formation[i].style.display === "block") {
                formation[i].style.display = "none"
                e.target.textContent = "...";
            } else {
                formation[i].style.display = "block"
                e.target.textContent = "---";
            }
        }
    }

}

//slider

const sliderContainer = document.querySelector('.hobbies-container');
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if (data.length === 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
}

let hobbies = [...data];

if (data.length === 2) {
    hobbies = [...data, ...data];
}

sliderContainer.innerHTML = hobbies.map((hobby, slideIndex) => {
    const { img, name, label } = hobby;
    let position = "next";
    if (slideIndex === 0) {
        position = "active";
    }
    if (slideIndex === hobbies.length - 1) {
        position = "last";
    }
    if (data.length <= 1) {
        position = "active";
    }
    return `<article class="slide ${position}">
  <img src=${img} class="img" alt="${name}"/>
  <h4>${label}</h4>
  
 </article>`;
}).join("");

const startSlider = (type) => {
    // get all three slides active,last next
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    let next = active.nextElementSibling;
    if (!next) {
        next = sliderContainer.firstElementChild;
    }
    active.classList.remove(["active"]);
    last.classList.remove(["last"]);
    next.classList.remove(["next"]);

    if (type === "prev") {
        active.classList.add("next");
        last.classList.add("active");
        next = last.previousElementSibling;
        if (!next) {
            next = sliderContainer.lastElementChild;
        }
        next.classList.remove(["next"]);
        next.classList.add("last");
        return;
    }
    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
    startSlider();
});
prevBtn.addEventListener("click", () => {
    startSlider("prev");
});


/*
const pictures = {
    biking: 2,
    cooking: 4,
    hiking: 4,
    history: 4
}

for (key in pictures) {
    let pictureIndex = Math.ceil(Math.random() * pictures[key]);
    let imgElement = document.getElementById(key);
    let indexToBeReplaced = imgElement.src.lastIndexOf('1')
    imgElement.src = imgElement.src.substr(0, indexToBeReplaced) + pictureIndex + imgElement.src.substr(indexToBeReplaced + 1);
}
*/

