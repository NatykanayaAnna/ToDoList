let input = document.querySelector(".input");
let btn = document.querySelector(".input_btn");
let list = document.querySelector(".to_do_list");

btn.addEventListener("click", function() {
    let task = document.createElement("li");
    task.textContent = input.value;
    input.value = ""
    task.className = "list__have_to_do";
    list.append(task);

    task.addEventListener("click", function() {
        task.classList.add("list__done");
    })
    task.addEventListener("dblclick", function() {
        task.remove();
    })
})

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btn.click();
    }
});