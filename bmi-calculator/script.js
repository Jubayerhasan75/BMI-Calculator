const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");

function calculateBMI() {
  const height = parseFloat(heightInput.value) / 100;
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Please enter valid height and weight!";
    resultDiv.style.backgroundColor = "#ffcccc";
    resultDiv.classList.remove("hidden");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let message = "";
  let bgColor = "";

  if (bmi < 18.5) {
    message = `Your BMI is ${bmi} (Underweight). You should eat more nutritious food.`;
    bgColor = "#ffedcc";
  } else if (bmi < 25) {
    message = `Your BMI is ${bmi} (Normal). Great job! Keep maintaining a healthy lifestyle.`;
    bgColor = "#d4ffcc";
  } else if (bmi < 30) {
    message = `Your BMI is ${bmi} (Overweight). Try to exercise more and watch your diet.`;
    bgColor = "#fff4cc";
  } else {
    message = `Your BMI is ${bmi} (Obese). Consult with a doctor and consider regular workouts.`;
    bgColor = "#ffd6d6";
  }

  resultDiv.textContent = message;
  resultDiv.style.backgroundColor = bgColor;
  resultDiv.classList.remove("hidden");
}

calcBtn.addEventListener("click", calculateBMI);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateBMI();
  }
});
