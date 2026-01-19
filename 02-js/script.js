// Aplicando un evento para muchos eventos
// delegacion de eventos
const jobsListingSection = document.querySelector(".jobs-listings");
const filterTecnology = document.querySelector("#filter-technology");
const filterUbication = document.querySelector("#filter-location");
const filterExperience = document.querySelector("#filter-experience-level")

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

filterUbication.addEventListener("change", function() {
  console.log(filterUbication.value)
})

filterExperience.addEventListener("change", function() {
  console.log(filterExperience.value);
})