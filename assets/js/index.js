
const textInputs=document.querySelectorAll("input[type='text']");
textInputs.forEach((textinput)=>{
    let prevval=textinput.value;
    textinput.addEventListener('beforeinput', function(e){
        this.dataset.prevVale=this.value;
    });

    textinput.addEventListener('input', function(ev){
        console.log(this.dataset.prevVale);
        console.log('afterInput.....'+this.value);
    })
})