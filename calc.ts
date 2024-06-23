import inquirer from "inquirer"

//user input
let answers = await inquirer.prompt([
    {
    name: "num1",
    type: "number",
    message: "please enter your first number:"
    },
    {
    name: "num2",
    type: "number",
    message: "please enter your second number:"
    },
    {
    name : "operator",
    type: "list",
    mesaage: "please select an operator:",
    choices:["+","-","*","/"]
    }
])
//variable declration
let number1:number =answers.num1
let number2:number =answers.num2 
let opt:string =answers.operator 

console.log(number1)
console.log(number2)
console.log(opt)

//conditional statements
 
if (opt === "+"){
    console.log(`${number1}  ${opt} ${number2} = ${number1+number2}`)
}

else if (opt === "-"){
    console.log(`${number1}  ${opt} ${number2} = ${number1-number2}`)
}

else if (opt === "*"){
    console.log(`${number1}  ${opt} ${number2} = ${number1*number2}`)
}

else if (opt === "/"){
    console.log(`${number1}  ${opt} ${number2} = ${number1/number2}`)
}


