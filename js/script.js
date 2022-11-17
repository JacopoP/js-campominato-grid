const container=document.getElementById("container");

document.getElementById("generate").addEventListener("click",
    function(){
        container.classList.remove("hide");
        container.innerHTML="";
        console.clear();
        const n=parseInt(document.getElementById("difficulty").value);
        for(let i=1; i<=n*n; i++){
            const newElement = createBox(i);
            newElement.style.width = 100/n + "%";
            newElement.style.height = 100/n + "%";
            newElement.innerHTML=i;
            container.appendChild(newElement);
        }
    }
);

function createBox(n){
    element=document.createElement("div");
    element.classList="box";
    element.addEventListener("click",
        function(){
            this.classList.toggle("selected");
            if(this.innerHTML!=""){
                console.log(this.innerHTML);
            }
            if(!this.classList.contains("selected")){
                this.innerHTML=n;
            }
            else{
                this.innerHTML=""
            }
        }
    );
    return element;
}