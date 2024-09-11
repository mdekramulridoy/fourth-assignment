function calculateTax(income, expenses) {
  if (income < 0 || expenses > income || expenses < 0) {
    return "Invalid Input";
  }
  let gain = income - expenses;
  let tax = gain * 0.2;
  return tax;
}
// console.log(calculateTax(10000,3000));
// console.log(calculateTax(34000,1753));
// console.log(calculateTax(5000,1500));

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let object = email.split("@");
  if (object[0] === "" || object[1] === "" || object.length !== 2) {
    return "Invalid Email";
  }
  let username = object[0];
  let domainName = object[1];
  let notification = username + " sent you an email from " + domainName;
  return notification;
}

// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com "));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));

function checkDigitsInName(name) {


}

function calculateFinalScore(obj) {}
// 4. Task for Assignment End

// 5. Task for Assignment Start

function waitingTime(waitingTimes, serialNumber) {}
// 5. Task for Assignment End
