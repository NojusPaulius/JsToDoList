const checkButton = ()=>{
    let checkButton = document.querySelector(".toDoList__check-button")
    let task = document.querySelector(".toDoList__row-text")
    let status = document.querySelector("#task-status")
    checkButton.addEventListener("click", ()=>{
        console.log(checkButton.getAttribute("src"))
        if (checkButton.getAttribute("src") === "images/unchecked.png") {
            // If the button is unchecked, mark it as checked
            checkButton.setAttribute("src", "images/checked.png")
            task.style.textDecoration = "line-through"
            status.textContent = "Completed"
        } else {
            // If the button is already checked, mark it as unchecked
            checkButton.setAttribute("src", "images/unchecked.png")
            task.style.textDecoration = "none"
            status.textContent = "Not Completed"
        }

    })
}

export default checkButton