function calculateTax(income, expenses) {
  if (income < 0 || expenses > income || expenses < 0) {
    return "Invalid Input";
  }
  let gain = income - expenses;
  let tax = gain * 0.2;
  return tax;
}
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));

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
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    const character = name[i];
    if (character >= "0" && character <= "9") {
      return true;
    }
  }
  return false;
}
// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("n9ayeem"));
// console.log(checkDigitsInName("e1mu3"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return "Invalid Input";
  }
  const { name, testScore, schoolGrade, isFFamily } = obj;
  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean" ||
    testScore > 50 ||
    schoolGrade > 30
  ) {
    return "Invalid Input";
  }
  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore = finalScore + 20;
  }
  return finalScore >= 80;
}

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// );
// console.log(calculateFinalScore("hello"));
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input" ;
  }

  if (serialNumber <= waitingTimes.length) {
    return "Invalid Input" ;
  }

  let sum = 0 ;
  for (let i = 0 ; i < waitingTimes.length ; i++) {
    sum += waitingTimes[i] ;
  }

  const average = Math.round(sum / waitingTimes.length) ;

  const remainingPerson = serialNumber - waitingTimes.length - 1 ;

  return remainingPerson * average;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(23, "a"));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
