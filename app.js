let tsk = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
tsk.addEventListener("click", function () {


        let item = document.createElement("li");
        item.innerText = inp.value;

        let delbtn = document.createElement("button");
        delbtn.innerText = "delete";
        delbtn.classList.add("delete");
        item.appendChild(delbtn);
        ul.appendChild(item);



});
ul.addEventListener("click", function (event) {
        if (event.target.nodeName == "BUTTON") {
                let listItem = event.target.parentElement;
                listItem.remove();
                console.log("dleteted");
        }
})

