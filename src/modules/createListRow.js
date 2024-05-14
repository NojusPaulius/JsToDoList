const createListRow = () =>{

    let dataArray = JSON.parse(localStorage.getItem("dataArray"))
    let tableBody = document.querySelector(".toDoList-body")
    console.log("olwiawegawegae")

    for(let data of dataArray){
        let row = document.createElement("tr")
        row.classList.add("toDoList__row")

        let firstCell = document.createElement("td")
        firstCell.classList.add("toDoList__cell")
        let checkButton = document.createElement("button")
        checkButton.classList.add("toDoList__check-button")
        let checkButtonImage = document.createElement("img")
        checkButtonImage.classList.add("toDoList__button-logo")
        checkButtonImage.src = "images/unchecked.png"
        let firstCellText = document.createElement("span")
        firstCellText.textContent = data.task
        checkButton.appendChild(checkButtonImage)
        firstCell.appendChild(checkButton)
        firstCell.appendChild(firstCellText)
        row.appendChild(firstCell)

        let secondCell = document.createElement("td")
        secondCell.classList.add("toDoList__cell")
        secondCell.textContent = data.priority
        row.appendChild(secondCell)


        let thirdCell = document.createElement("td")
        thirdCell.textContent = data.dueDate       
        thirdCell.classList.add("toDoList__cell")
        row.appendChild(thirdCell)


        let fourthCell = document.createElement("td")
        fourthCell.textContent = "Not completed"
        fourthCell.classList.add("toDoList__cell")
        row.appendChild(fourthCell)

        let fifthCell = document.createElement("td")
        fifthCell.classList.add("toDoList__cell")
        let deleteButton = document.createElement("button")
        let deleteButtonImage = document.createElement("img")
        deleteButtonImage.src = "images/images.png"
        deleteButton.appendChild(deleteButtonImage)
        fifthCell.appendChild(deleteButton)
        row.appendChild(fifthCell)

        tableBody.appendChild(row)
    }
}

export default createListRow