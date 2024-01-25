function fucNumber(Number){
    var show_input = document.getElementById("show_input")
    switch (Number) {
        case 1:
            show_input.innerHTML += 1;
            break;
        case 2:
            show_input.innerHTML += 2;
            break;
        case 3:
            show_input.innerHTML += 3;
            break;
        case 4:
            show_input.innerHTML += 4;
            break;
        case 5:
            show_input.innerHTML += 5;
            break;
        case 6:
            show_input.innerHTML += 6;
            break;
        case 7:
            show_input.innerHTML += 7;
            break;
        case 8:
            show_input.innerHTML += 8;
            break;
        case 9:
            show_input.innerHTML += 9;
            break;
        case 0:
            show_input.innerHTML += 0;
            break;
        default:
            break;
    }
}
function fucC() {
    var show_input = document.getElementById("show_input");
    show_input.innerHTML = '';
    show_number.innerHTML = '';
}
function fucDelete(){
    var show_input = document.getElementById("show_input");
    if(show_input.innerHTML != ''){
        show_input.innerHTML = show_input.innerHTML.length - 1
        if(show_input.innerHTML == 0){
            show_input.innerHTML = ''
        }
    }
}
function fucOperator(Operator) {
    var show_input = document.getElementById("show_input");
    var S = 0;
    switch (Operator) {
        case '+':
           if(show_input.innerHTML != ''){
              show_input.innerHTML += '+'
           }
            break;
        case '-':
            if(show_input.innerHTML != ''){
                show_input.innerHTML += '-'
             }
            break;
        case 'x':
            if(show_input.innerHTML != ''){
                show_input.innerHTML += '*'
             }
            break;
        case '÷':
            if(show_input.innerHTML != ''){
                show_input.innerHTML += '/'
             }
            break;
         case '=':
            if(show_input.innerHTML != ''){
                show_input.innerHTML = eval(show_input.innerHTML);
            }
            break;
    }
}
