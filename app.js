const userInput = document.querySelector("#userInput");
const numOfPrints = document.querySelector("#numberOfPrints");
const btn = document.querySelector("button");
const resultList = document.querySelector("#resultPrints");

btn.addEventListener("click", () => {
    resultList.innerHTML = "";
    const userInputText = userInput.value;
    const n = numOfPrints.value;

    for(let i = 0; i < n; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = userInputText;
        resultList.appendChild(newLi);
    };
});