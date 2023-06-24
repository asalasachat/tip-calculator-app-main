
const textInputs=document.querySelectorAll("input[type='text']");
const regintegers=new RegExp(/^\d*$/);
const regdecimals=new RegExp(/^\d+(\.\d*)?$/);

let tip=parseInt(document.querySelector(".input-group ul li.active input").dataset.value);
let bill=0;
let personsNumber=1;

textInputs.forEach((textinput)=>{
    let prevval=textinput.value;
    textinput.addEventListener('beforeinput', function(e){
        this.dataset.prevVale=this.value;
    });

    textinput.addEventListener('input', function(ev){
        if(this.dataset.name=="number-people"){
            myval=Number.parseInt(this.value);
            if(regintegers.test(this.value) && myval==this.value){
                this.value=this.value;
            }
            else if(this.value==""){
                this.value="1";
            }
            else{
                this.value=this.dataset.prevVale;
            }
            personsNumber=this.value;
        }
        else{
            myval=Number.parseFloat(this.value);
            if(regdecimals.test(this.value) && myval==this.value){
                this.value=this.value;
            }
            else if(this.value==""){
                this.value="0";
            }
            else{
                this.value=this.dataset.prevVale;
            } 
            bill=this.value;
          
        }
        document.querySelector("#tipAmoutValue").innerText=("$ "+(bill/100*tip).toFixed(2));
        document.querySelector("#totalValue").innerText=("$ "+((bill/100*tip)/parseInt(personsNumber)).toFixed(2));

    })
})

document.querySelectorAll(".input-group ul li").forEach((element)=>{
    element.addEventListener("click", function(){
        this.parentNode.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        if(this.querySelector("input").dataset.value){
            tip=parseInt(this.querySelector("input").dataset.value);
        }
        else{
             tip=parseInt(this.querySelector("input").value);
        }
        document.querySelector("#tipAmoutValue").innerText=("$ "+(bill/100*tip).toFixed(2));
        document.querySelector("#totalValue").innerText=("$ "+((bill/100*tip)/parseInt(personsNumber)).toFixed(2));
    });
});