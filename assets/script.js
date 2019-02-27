function insert(num){
    document.form.textview.value = document.form.textview.value+num
}

function equal(){
    var hasil = document.form.textview.value;
    if(hasil){
        document.form.textview.value = eval(hasil);
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}