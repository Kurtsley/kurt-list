// Kurtsley 2024

const listSection = document.querySelector(".list-section");

for (let i = 0; i < 25; i++) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "box" + i;

    const listItem = document.createElement("li");
    listItem.id = "item" + i;
    listItem.classList.add("listItem");

    listItem.appendChild(checkBox);
    listSection.appendChild(listItem);
}