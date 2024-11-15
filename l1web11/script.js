// Пошук елементів
const tagline = document.getElementById("tagline");
const showDetailsButton = document.querySelector("#show-details");
const detailsParagraph = document.getElementById("details");
const feedbackInput = document.querySelector("#feedback");
const feedbackButton = document.getElementById("submit-feedback");
const responseParagraph = document.getElementById("response");

// Зміна стилю при наведенні
tagline.addEventListener("mouseover", () => {
    tagline.style.color = "gold";
});

tagline.addEventListener("mouseout", () => {
    tagline.style.color = "";
});

// Показ/приховання деталей
showDetailsButton.addEventListener("click", () => {
    detailsParagraph.classList.toggle("hidden");
});

// Обробка введення та надсилання відгуку
feedbackButton.addEventListener("click", () => {
    const feedback = feedbackInput.value.trim();
    if (feedback) {
        responseParagraph.textContent = `Thank you for your feedback: "${feedback}"`;
        responseParagraph.classList.remove("hidden");
        feedbackInput.value = ""; // Очистити поле вводу
    } else {
        responseParagraph.textContent = "Please write some feedback before submitting.";
        responseParagraph.classList.remove("hidden");
    }
});

// Підсвічування поля вводу при зміні тексту
feedbackInput.addEventListener("input", () => {
    feedbackInput.style.borderColor = feedbackInput.value.trim() ? "green" : "red";
});
