let names = [];
let totalBill= 0;
let display = document.getElementById("display");
let tips =0;

    function bill() {
        names = [];
        let names= document.getElementById('names').value.split(',')
        totalBill= parseFloat(document.getElementById("bill").value)

    }


let calFun = document.getElementById('calculatorBox');
     
    function buttonPushed(cal) {
         
        let pushed = cal.innerHTML;
         
        if (pushed == '=') {
            calFun.innerHTML = eval(calFun.innerHTML);
 // Below clears input field             
        } else if (pushed == 'AC') {
            calFun.innerHTML = '0';
             
        } else {
            if (calFun.innerHTML == '0') {
                calFun.innerHTML = pushed;
                 
            } else {
                calFun.innerHTML += pushed;
                 
            }
        }
    }
