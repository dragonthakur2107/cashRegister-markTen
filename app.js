const billInput = document.querySelector("#bill-Amount");
const btnNext = document.querySelector("#btn-Bill");
const cashSec = document.querySelector("#cash-Sec");
const errMsgBill = document.querySelector(".error-Message-Bill");

const cashInput = document.querySelector("#cash-Amount");
const btnCheck = document.querySelector("#btn-Cash");
const tableSec = document.querySelector("#table-Sec");
const errMsgCash = document.querySelector(".error-Message-Cash");
const noOfNotes = document.querySelectorAll(".no-Of-Notes")

const availableNotes =[2000,500,100,20,10,5,1]

cashSec.style.display="none";
tableSec.style.display="none";
errMsgBill.style.display="none";
errMsgCash.style.display="none";

btnNext.addEventListener("click",function checkBill()
{
    if(billInput.value>0){
        cashSec.style.display="block";
        btnNext.style.display="none";
        btnCheck.addEventListener("click",function checkCash()
        {
        if(cashInput.value >= billInput.value){ 
           returnAmount = cashInput.value-billInput.value;
           tableSec.style.display="block";
           clcChange(returnAmount);
           
        }
        else{
             errMsgCash.style.display="block";
             errMsgCash.innerText="Enter Amount greater than Bill amount.";
             tableSec.style.display="none";
            }
        });
    }
    else{
        errMsgBill.style.display="block";
        errMsgBill.innerText="Enter Amount greater than 0."
    }
});


function clcChange(returnAmount){
                 for(let i=0;i<availableNotes.length;i++)
                 {
                     const numOfNotes=Math.trunc(returnAmount / availableNotes[i]);
                     returnAmount %= availableNotes[i];
                     noOfNotes[i].innerText = numOfNotes;
                 }
}