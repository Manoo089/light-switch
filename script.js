function buttonClicked() {
    button.classList.toggle("shadow");
    body.classList.toggle("dark");

    switch (document.body.className) {
        case "":
            title.innerHTML = "Good Morning";
            break;
        case "dark":
            title.innerHTML = "Good Night";
    }
}

const button = document.body.querySelector("button");
button.addEventListener("click", buttonClicked);

const body = document.querySelector("body");

let title = document.head.querySelector("title");