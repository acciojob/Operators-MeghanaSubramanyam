// Calculator logic
document.getElementById("calculate").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid";
  }

  document.getElementById("result").textContent = result;
});

// Text changer logic
document.getElementById("change_text").addEventListener("click", function () {
  const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];
  const divs = document.querySelectorAll(".division");
  divs.forEach((div, index) => {
    div.textContent = newTexts[index];
  });
});

