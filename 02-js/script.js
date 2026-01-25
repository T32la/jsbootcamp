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
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filter.value;

  if (selectedValue) {
    mensaje.textContent = `Filtro seleccionado: ${selectedValue}`;
  } else {
    mensaje.trextContent = "";
  }

  jobs.forEach((job) => {
    // const modalidad = job.dataset.modalidad;
    const modalidad = job.getAttribute("data-modalidad");
    const isShown = selectedValue === "" || selectedValue === modalidad;

    // La mejor forma de utilizar las para las clases en javascript.
    job.classList.toggle("is-hidden", !isShown);
    // console.log(modalidad);

    /* 
    * @ Opcion recomendable para trabajar con opciones
    * se utiliza las clases.

    // if (selectedValue === "" || selectedValue === modalidad) {
      // job.style.display = "flex";
      job.classList.remove('is-hidden');
    } else {
      // job.style.display = 'none';
    job.classList.add('is-hidden');
  }
  */
  });
});

const container = document.querySelector(".jobs-listings");

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    // console.log(jobs);
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";

      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>
      `;
      container.appendChild(article);
    });
  });
