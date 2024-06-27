const toDoList = [
  {
    id: 1,
    completed: false,
    text: "Tarea N° 1",
  },
  {
    id: 2,
    completed: false,
    text: "Tarea N° 2",
  },
  {
    id: 3,
    completed: false,
    text: "Tarea N° 3",
  },
]

const updateListContainer = () => {
  const listContainer = document.querySelector("#list-container")
  listContainer.innerHTML = ""
  const fragment = document.createDocumentFragment()

  for (const toDoElement of toDoList) {
    const li = document.createElement("li")
    li.id = toDoElement.id
    const p = document.createElement("p")
    p.innerText = toDoElement.text
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = toDoElement.completed
    checkbox.addEventListener("click", () => {
      toDoElement.completed = !toDoElement.completed
      // Forma alternativa
      // const index = toDoList.findIndex((obj) => obj.id === toDoElement.id)
      // toDoList[index].completed = !toDoList[index].completed
    })
    const button = document.createElement("button")
    button.innerText = "Evento"
    button.addEventListener("click", () => evento(toDoElement.text))
    li.appendChild(p)
    li.appendChild(button)
    li.appendChild(checkbox)
    fragment.appendChild(li)
  }

  listContainer.appendChild(fragment)
}

updateListContainer()

const addTaskButton = document.querySelector("#add-task")

addTaskButton.addEventListener("click", () => {
  const taskNameInput = document.querySelector("#task-name")
  console.log("input value", taskNameInput.value)
  const task = {
    id: Date.now(),
    completed: false,
    text: taskNameInput.value,
  }
  toDoList.push(task)
  console.log("todoList", toDoList)
  updateListContainer()
})
