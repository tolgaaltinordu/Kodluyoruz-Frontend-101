let task = document.getElementById("task")
let liveToastBtn = document.getElementById("liveToastBtn")
let list = document.getElementById("list")
let success = document.querySelector(".toast.success.hide")
let error = document.querySelector(".toast.error.hide")
function newElement() {
    if (task.value && task.value[0] !== " ") {
        let listItem = document.createElement("li")
        listItem.innerHTML = `${task.value} <span onClick="deleteItem()" class ="close-btn" aria-hidden="true">&times;</span>`
        list.appendChild(listItem)
        task.value = ""
        success.classList.replace("hide", "show")
        setTimeout(hideToast, 5000)
    } else {
        error.classList.replace("hide", "show")
        setTimeout(hideToast, 5000)
    }
}

window.addEventListener("click", function () {
    task.value = ""
})

/* Toasts */
function hideToast() {
    success.classList.replace("show", "hide")
    error.classList.replace("show", "hide")
}
/* Toasts - end */

// active effects
let listDOM = document.querySelector("ul")
listDOM.addEventListener("click", function (e) {
    if (!(e.target.classList.contains("checked"))) {
        e.target.classList.add("checked")
    } else {
        e.target.classList.remove("checked")
    }
})
// active effects -end

// Delete From list


function deleteItem() {
    let removeTask = document.getElementsByClassName("close-btn")
    for (const removeTasks of removeTask) {
        removeTasks.addEventListener("click", function (e) {
            // let deleteItem = document.querySelector("li")
            // deleteItem.parentNode.removeChild(deleteItem)
            e.currentTarget.parentElement.remove()
            // console.log(localStorage.getItem("toDoList").split(","))
            // console.log(e.currentTarget.parentElement.textContent.slice(0, e.currentTarget.parentElement.textContent.search("x") - 1).length)
        })
    }
}
//---------------------------------------------------------

// LocalStorage
// if (localStorage.getItem("toDoList") == null) {
//     storageArray = []
// } else {
//     storageArray = localStorage.getItem("toDoList").split(",") // Converts toDoList an array
// }
// function storageItems() {
//     storageArray.push(task.value)
//     localStorage.setItem("toDoList", storageArray)
// }
//------------------------------------------------


// try Catch

// try {
//     // let listItem = document.createElement("li")
//     // listItem.innerHTML = task.value
//     for (let i = 0; i < localStorage.getItem("toDoList").split(",").length; i++) {
//         let listItem = document.createElement("li")
//         listItem.innerHTML = `${localStorage.getItem("toDoList").split(",")[i]} <span onClick="deleteItem()" class ="close-btn"  aria-hidden="true">&times;</span>`
//         list.append(listItem)
//     }
// } catch (error) {
//     console.log("error", error)
// }
//----------------------------------------------




