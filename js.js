

//  Завдання 1

let age = prompt("How old are you?")
if (age<=2){
    console.log("You`re child")
}
else if (age < 18 && age >= 12){
    console.log("You`re teenager")
}
else if (age>=18 && age<60){
    console.log("You`re adult")
}
else if (age>=60){
    console.log("You`re pensioner")
}





// Завдання 2

let number = prompt("Enter a number between 0 and 9")
if (number === "1"){
    console.log("Your simbol is !")
}
else if (number==="2"){
    console.log("Your simbol is @")
}
else if (number==="3"){
    console.log("Your simbol is #")
}
else if (number==="4"){
    console.log("Your simbol is $")
}
else if (number==="5"){
    console.log("Your simbol is %")
}
else if (number==="6"){
    console.log("Your simbol is ^")
}
else if (number==="7"){
    console.log("Your simbol is &")
}
else if (number==="8"){
    console.log("Your simbol is *")
}
else if (number==="9"){
    console.log("Your simbol is (")
}
else if (number==="0"){
    console.log("Your simbol is )")
}





// Завдання 3

let number_3 = prompt("Enter a tree-digit number");
let unit = number_3%10;
let ten = (number_3%100-unit)/10;
let hundret = (number_3%1000-ten*10-unit)/100;
if (unit==ten || unit==hundret || ten==hundret){
    console.log("true")
};





// Завдання 4

let year = prompt("Enter a year");
if (Number(year)%4 == 0){
    console.log("It`s leap year")
}
else{
    console.log("It isn`t leap year")
}





// Завдання 5

let number_5 = prompt("Enter five-digit number");
// console.log(number_5)
let fifthNumber = Number(number_5)%10;
// console.log(fifthNumber);
let forthNumber = (Number(number_5)%100-fifthNumber)/10;
// console.log(forthNumber);
let thirdNumber = (Number(number_5)%1000-fifthNumber -forthNumber*10)/100;
// console.log(thirdNumber);
let secondNumber = (Number(number_5)%10000-fifthNumber-forthNumber*10-thirdNumber*100)/1000;
// console.log(secondNumber);
let firstNumber = (Number(number_5)%100000-fifthNumber-forthNumber*10-thirdNumber*100-secondNumber*1000)/10000;
// console.log(firstNumber);
if (fifthNumber==firstNumber&&forthNumber==secondNumber){
    console.log("Yeah, it`s the palindrome number")
}
else{
    console.log("No, it isn`t palindrome number")
}





// Завдання 6

let amountUSD = prompt("Enter amount USD")
let currency = prompt("Choose currency you need (eur, uah, azn)")
const exchangeRateEUR=0.94;
const exchangeRateUAH=27.83;
const exchangeRateAZN=1.7;
if(currency==="eur" || currency==="EUR"){
    let amountCurrency= Number(amountUSD)*exchangeRateEUR;
    console.log("You`d get", amountCurrency+" "+"EUR")
}
else if(currency==="uah" || currency==="UAH"){
    let amountCurrency= Number(amountUSD)*exchangeRateUAH;
    console.log("You`d get", amountCurrency+" "+"UAH")
}
else if (currency==="azn" || currency==="AZN"){
    let amountCurrency= Number(amountUSD)*exchangeRateAZN;
    console.log("You`d get", amountCurrency+" "+"AZN")
}





// Завдання 7

let purchaseAmount = prompt("Enter purchase amount, please");
const discountFirst=0.03;
const discountSecond=0.05;
const discountThird=0.07;
if (Number(purchaseAmount)<200){
    let discountedAmount=purchaseAmount
    console.log("Your discounted amount is", discountedAmount)
}
else if (Number(purchaseAmount)>=200 && Number(purchaseAmount)<300){
    let discountedAmount=Math.floor(purchaseAmount*(1-discountFirst)*100)/100;
    console.log("Your discounted amount is", discountedAmount)
}
else if (Number(purchaseAmount)>=300 && Number(purchaseAmount)<500){
    let discountedAmount= Math.floor(purchaseAmount*(1-discountSecond)*100)/100;
    console.log("Your discounted amount is", discountedAmount)
}
else if (Number(purchaseAmount)>=500){
    let discountedAmount=Math.floor(purchaseAmount*(1-discountThird)*100)/100;
    console.log("Your discounted amount is", discountedAmount)
}





// Завдання 8

let perimetreOfSquare = prompt("Enter perimetre of the square, please");
let lenthOfCircle = prompt("Enter lenth of circle, please");
let oneSideOfSqure = Number(perimetreOfSquare)/4;
let diametrOfCircle = Number(lenthOfCircle)/Math.PI;
if (diametrOfCircle <= oneSideOfSqure){
    console.log("Yes, we can place this circle in this square")
}
else{
    console.log("No, we can`t place this circle in this square, you should try smaller one")
}





// Завдання 9

let summ=null;
let firstQuestion = prompt ("Одиниця виміру сили струму: ватт, вольт, ампер?")
if (firstQuestion == "ампер"){
    alert("Вітаю! Відповідь вірна!");
    summ++
}
else{
    alert ("Нажаль, відповідь не вірна(((");
}


let secondQuestion = prompt ("Який елемент періодичної системи хімічних елементів позначений як Ag: золото, срібло чи аргентум? ")
if (secondQuestion == "срібло"){
    alert("Вітаю! Відповідь вірна!");
    summ++
}
else{
    alert ("Нажаль, відповідь не вірна(((");
}


let thirdQuestion = prompt ("Зелений пігмент, що зафарбовує листки рослин в зелений: хлорофіл, хлоропласт, хлорофіліпт")
if (thirdQuestion == "хлорофіл"){
    alert("Вітаю! Відповідь вірна!");
    summ++
}
else{
    alert ("Нажаль, відповідь не вірна(((");
}

alert("Вітаю! Ти набрав " +Number(summ)*2 +" "+"балів!");





// Завдання 10

alert("Hi enter the date, please!");

let day_10 = prompt("Enter the day here ");
let month_10 = prompt("Enter the month here");
let year_10 = prompt("Enter the year here");
let nextMonth=0;

if (Number(day_10)<28){
    nextDay = Number(day_10)+1;
    nextMonth= Number(month_10)
}
else if(Number(day_10)==28 && Number(month_10)==02){
    nextDay = "01";
    nextMonth= Number(month_10)+1
}
else if(Number(day_10)==29 && Number(month_10)==02 && (Number(year_10)%4 == 0)){
    nextDay = "01";
    nextMonth= Number(month_10)+1
}
else if (Number(day_10)==30 && Number(month_10)==04||06||09||11){
    nextDay="01";
    nextMonth= Number(month_10)+1
}
else if (Number(day_10)==31 && Number(month_10)==01||03||05||07||08||10||12){
    nextDay="01";
    nextMonth= Number(month_10)+1
}


if (Number(month_10)==12){
    nextMonth = "01";
    nextYear = Number(year_10)+1
}

if (Number(month_10)<11){
    nextYear = year_10
}

alert("Next day date is  "+nextDay+"."+nextMonth+"."+nextYear)