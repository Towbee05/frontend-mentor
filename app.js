const getElement = (element) => document.querySelector(element);
const getMultipleElement = (elements) => [...document.querySelectorAll(elements)];

const container = getElement("#container");
const openBtns = getMultipleElement(".open-btn");
const closeBtns = getMultipleElement(".close-btn");

openBtns.map((openBtn) => {
    openBtn.addEventListener("click", (e) => {
        button = e.target;
        const paragraph = button.parentElement.nextElementSibling;
        const innerClose = button.nextElementSibling;
        paragraph.classList.remove("hidden");
        paragraph.classList.add("block");
        openBtn.classList.add("hidden");
        innerClose.classList.remove("hidden");
    });
});

closeBtns.map((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
        button = e.target;
        const paragraph = button.parentElement.nextElementSibling;
        const innerOpen = button.previousElementSibling;
        paragraph.classList.add("hidden");
        paragraph.classList.remove("block");
        closeBtn.classList.add("hidden");
        innerOpen.classList.remove("hidden");
    })
})
