let input = prompt("What would like to do?").toLowerCase();

const todos = ["My First Todo List Item", "My Second Todo List Item"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("******");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
  } else if (input === "new") {
    const newTodo = prompt("Okay, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Okay, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice[(index, 1)];
      console.log(`${deleted[0]} was removed.`);
    } else {
      console.log("Unknown index.");
    }
  }
  input = prompt("What would like to do?").toLowerCase();
}

console.log("Okay! You quit the app.");
