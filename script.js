const form = document.querySelector("form");
const input = document.querySelectorAll(".form-control input");
const btn = document.querySelector(".btn");
const successful = document.querySelector(".successful");

input.forEach(element => {
    const label = element.nextElementSibling;
    element.addEventListener("focus", () => {
        label.style.top = "0"
    });

    element.addEventListener("blur", () => {
        if (element.value !== "") {
            label.style.top = "0"
        } else {
            label.style.top = "50%"
        }

        if (element.checkValidity()) {
            element.style.borderColor = "seagreen"
        } else {
            element.style.borderColor = "brown"
        }
    });
});

btn.addEventListener("click", (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        input.forEach(element => {
            element.blur();
        });
        successful.style.visibility = "visible"
        successful.style.opacity = "1"

    }
});
