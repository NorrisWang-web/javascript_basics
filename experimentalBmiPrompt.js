// *** English Version ***
// let weight = prompt("Please enter your weight in kilograms:");
// let height = prompt("Please enter your height meters:");

// function bmiCalculator(weight, height) {
//     let estimate = Math.round(weight / (height * height));
//     return estimate;
// }

// let report = alert("According to your numbers, your bmi is " + bmiCalculator(weight, height));

let weight = prompt("あなたの体重を入力してください(kg):");
let height = prompt("あなたの身長を入力してください(m):");

function bmiCalculator(weight, height) {
    let estimate = Math.round(weight / (height * height));
    return estimate;
}

let report = alert("入力された数値によると、あなたのBMIは" + bmiCalculator(weight, height) + "です。");