function predict() {

  let cement = Number(document.getElementById("cement").value || 540);
  let water = Number(document.getElementById("water").value || 162);
  let slag = Number(document.getElementById("slag").value || 0);
  let flyash = Number(document.getElementById("flyash").value || 0);
  let sp = Number(document.getElementById("sp").value || 2.5);
  let coarse = Number(document.getElementById("coarse").value || 1040);
  let fine = Number(document.getElementById("fine").value || 676);
  let age = Number(document.getElementById("age").value || 28);

  let binder = cement + slag + flyash;
  let wc = water / binder;

  let strength =
    70 - (wc * 50) + (sp * 0.8) + (Math.log(age + 1) * 5);

  document.getElementById("result").innerHTML =
    `Predicted Strength: <b>${strength.toFixed(2)} MPa</b>`;
}
