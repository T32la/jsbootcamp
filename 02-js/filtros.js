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
