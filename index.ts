import inquirer from "inquirer"

let myBalance = 10000;       //Dollar
let myPin =3344;
let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "entsr your pin code", type: "number" },
]);
if(pinAnswer.pin === myPin) {console.log("correct pin code");
}else{
    console.log("please enter a valid pin code and try again");
    
}

  let operationAns =await inquirer.prompt([
        {
            name : "operation",
            message: "please select option",
            type: "list",
            choices:[
                "withdraw",
                 "check balance",
                 "fast cash"
                ]

        }
    ])
  if(operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
               name: "amount",
               message: "enter amount to withdraw",
               type: "number"
           }
        ]
)
if(amountAns.amount > myBalance){
    console.log("insufficient balance");
}else {
        myBalance-=amountAns.amount;
        console.log(`${amountAns.amount} withdraw sucessful plesae come again!!!`);
        console.log(`your remaining balance is: ${myBalance}`);
    
    
    }
}else if(operationAns.operation === "check balance"){
    console.log(`your account balance is : ${myBalance}`)
}else if(operationAns.operation==="fast cash"){
    let fastCashAns =await inquirer.prompt(
        [
            {
                name : "fastAmount",
                message: "please select  amount ",
                type: "list",
                choices:["500","1000","2000","5000","10000","15000","20000","25000"]
            }
        ]
    )
    if(fastCashAns.fastAmount > myBalance){
        console.log("insufficient balance");
    }else {
            myBalance-=fastCashAns.fastAmount;
            console.log(`${fastCashAns.fastAmount} withdraw sucessful plesae come again!!!`);
        console.log(`your remaining balance is: ${myBalance}`);
    
}
}
