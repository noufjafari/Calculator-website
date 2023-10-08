let Screen1 = document.querySelector('.Screen1');
 

 function input(y){
    Screen1.value=Screen1.value+y;
 }
function RESETAll(){
    Screen1.value=' ';

}
function DEL(){
Screen1.value=Screen1.value.slice(0,-1);
}
function calculate(){
    Screen1.value = eval(Screen1.value);
}







