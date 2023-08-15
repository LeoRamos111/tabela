const btnMasculino = document.getElementById("male-button");
const btnFeminino = document.getElementById("female-button");
const btnCalcular = document.getElementById("calcular");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const idadeInput = document.getElementById("idade");

btnMasculino.addEventListener("click", () => {
  btnMasculino.classList.add("selected");
  btnFeminino.classList.remove("selected");
  pesoInput.value = "";
  alturaInput.value = "";
  idadeInput.value = "";
  btnCalcular.textContent = "Calcular";
  enableCalcButton();
});

btnFeminino.addEventListener("click", () => {
  btnFeminino.classList.add("selected");
  btnMasculino.classList.remove("selected");
  pesoInput.value = "";
  alturaInput.value = "";
  idadeInput.value = "";
  btnCalcular.textContent = "Calcular";
  enableCalcButton();
});

function enableCalcButton() {

  if (
    (btnMasculino.classList.contains("selected") || btnFeminino.classList.contains("selected")) &&
    pesoInput.value !== "" && alturaInput.value !== "" && idadeInput.value !== ""
    
  ) {
    btnCalcular.disabled = false;
  } else {
    btnCalcular.disabled = true;
  }
}

btnCalcular.addEventListener("click", () => {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);
  const idade = parseFloat(idadeInput.value);

  let resultado;
  if (btnMasculino.classList.contains("selected")) {
    resultado = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
  } else {
    resultado = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
  }

  btnCalcular.textContent = "Resultado: " + parseInt(resultado) + "kcal";
});

pesoInput.addEventListener("input", enableCalcButton);
alturaInput.addEventListener("input", enableCalcButton);
idadeInput.addEventListener("input", enableCalcButton);
