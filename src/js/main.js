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

let readMore = document.getElementsByClassName("read_more");

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

const pictures = {
    biking: 2,
    cooking: 4,
    hiking: 5,
    history: 4
}

for (key in pictures) {
    let pictureIndex = Math.ceil(Math.random() * pictures[key]);
    let imgElement = document.getElementById(key);
    let indexToBeReplaced = imgElement.src.lastIndexOf('1')
    imgElement.src = imgElement.src.substr(0, indexToBeReplaced) + pictureIndex + imgElement.src.substr(indexToBeReplaced + 1);
}

