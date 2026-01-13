const botones = document.querySelectorAll(".button-apply-job");
console.log(botones);

botones.forEach((boton) => {
  if (boton != null) {
    boton.addEventListener("click", function responseClick() {
      boton.textContent = "Aplicado!";
      boton.classList.add("is-applied");
      boton.disabled = true;
    });
  }
});

console.log("Esto se muestra inmediatamente");
console.log("Hola soy un console log");
