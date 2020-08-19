function insert(num){
    document.form.textview.value = document.form.textview.value + num
    
}
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
}
function clean(){
    document.form.textview.value = "";
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.lengeth-1);
}

const cientific = document.querySelector('a');
cientific.forEach(btn => {
    btn.addEventListener('click', function (e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clienty - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
    })
});
    