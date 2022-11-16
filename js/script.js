const container=document.getElementById("container");

document.getElementById("generate").addEventListener("click",
    function(){
        container.classList.remove("hide");
        const n=parseInt(document.getElementById("difficulty").value);
        for(let i=0; i<n*n; i++){
            const newElement = createBox();
            newElement.style.width = 100/n + "%";
            newElement.style.height = 100/n + "%";
            newElement.innerHTML=i+1;
            container.appendChild(newElement);
        }
    }
);

function createBox(){
    element=document.createElement("div");
    element.classList="box";
    element.addEventListener("click",
        function(){
            this.classList.add("selected");
            console.log(this.innerHTML);
            this.innerHTML=""
        }
    );
    return element;
}