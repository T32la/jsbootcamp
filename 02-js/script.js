// Aplicando un evento para muchos eventos
// delegacion de eventos
const jobsListingSection = document.querySelector(".jobs-listings");
const filterTecnology = document.querySelector("#filter-technology");

jobsListingSection?.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

filterTecnology.addEventListener("change", function () {
  console.log(filterTecnology.value);
});
