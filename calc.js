var screen = document.getElementById('screen');
function buttonclick(value){
    screen.value +=value;
    findresult()
}
function  clearscreen(){
    screen.value = "";
}
function findresult(){
    var result = eval(screen.value)
    screen.value = result;
}