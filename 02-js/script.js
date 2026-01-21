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
const jobs = document.querySelectorAll(".job-listing-card");

filter.addEventListener("change", function () {
  const selectedValue = filter.value;

  if (selectedValue) {
    mensaje.textContent = `Filtro seleccionado: ${selectedValue}`;
  } else {
    mensaje.trextContent = "";
  }


  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad;
    const modalidad = job.getAttribute("data-modalidad");

    // console.log(modalidad);

    if (selectedValue === "" || selectedValue === modalidad) {
      job.style.display = "flex";
      // job.classList.remove('is-hidden');
    } else {
      job.style.display = 'none';
      // job.classList.add('is-hidden');
    }
  })
});
