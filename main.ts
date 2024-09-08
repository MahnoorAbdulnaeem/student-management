import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)

let myBalance: number = 0

let answer = await inquirer.prompt(

    [
        {
            name: "students",
            type: "input",
            message: "Enter student name:",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "please Enter a non-empty value.";
            },

        },
        {
            name: "courses",
            type: "list",
            message: "Select the cousre to enrolled",
            choices: ["Ms.office", "Html", "javascript", "Typescript", "Python", "css"]
        },
    ]
);

const tutionFee: { [key: string]: number } = {
    "Ms.office": 1000,
    "css": 2000,
    "Html": 2500,
    "javascript": 5000,
    "Typescript": 6000,
    "Python": 10000,


};

console.log(`\nTution fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);


let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "Select payment method",
            choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money:",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "Please Enter a non-empty value.";
            },

        }
    ]
);

console.log(`\nYou Select payment method ${paymentType.payment}\n`);


const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount) {
    console.log(`congratulations, you have succesfully enrolled in ${answer.courses}.\n`);

    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["View Status", "Exit"],
        }
    ]);
     if (ans.Select == "View Status"){
        console.log("\n*********Status*********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    } else  {
        console.log("\nExiting Student Management System\n");
    }

} else {
    console.log("Invalid amount due to course\n ");
}

