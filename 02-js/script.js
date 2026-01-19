// Aplicando un evento para muchos eventos
// delegacion de eventos
const jobsListingSection = document.querySelector(".jobs-listings");
const filterTecnology = document.querySelector("#filter-technology");
const filterUbication = document.querySelector("#filter-location");
const filterExperience = document.querySelector("#filter-experience-level");

jobsListingSection?.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");

filter.addEventListener("change", function () {
  const selectedValue = filter.value;
  if (selectedValue) {
    mensaje.textContent = `Filtro seleccionado: ${selectedValue}`;
  } else {
    mensaje.trextContent = "";
  }
});

const searchInput = document.querySelector("#empleos-search-input");

searchInput.addEventListener("input", function () {
  // const inputValue = searchInput.value;
  console.log(searchInput.value);
});

searchInput.addEventListener("blur", function () {
  console.log("Se dispara cuando el campo pierde el foco.");
});

