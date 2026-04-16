import { useEffect, useState } from "react";

import { SearchFormSection } from "./../components/SearchFormSection.jsx";
import { JobListings } from "./../components/JobListings.jsx";
import { Pagination } from "./../components/Pagination.jsx";
import jobsData from "../components/data.json";

const RESULTS_PER_PAGE = 4;

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" ||
        job.data.technology === filters.technology) &&
      (filters.location === "" || job.data.modalidad === filters.location) &&
      (filters.experienceLevel === "" ||
        job.data.nivel === filters.experienceLevel)
    );
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  // TODO: aplicar los otros filtros (location y experienceLevel)
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    // console.log("Cambiando a la pagina: ", page);
    setCurrentPage(page);
  };

  /**
   * Función que se encarga de establecer los filtros de búsqueda.
   * Se le pasa un objeto con los filtros de búsqueda, se establecen
   * los valores de los filtros y se vuelve a la página 1.
   * @param {Object} filters - Objeto con los filtros de búsqueda
   */
  const handleSearch = (filters) => {
    // filtors de busqueda
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextFilter) => {
    setTextToFilter(newTextFilter);
    setCurrentPage(1);
  };

  useEffect(() => {
    document.title = `Resultados: ${jobsWithTextFilter.length}, Pagina ${currentPage} - DevJobs`;
  }, [jobsWithTextFilter, currentPage]);

  useEffect(() => {
    // suscripcion a un evento
    const handleResize = () => {
      console.log("Ventana redimensionada");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <SearchFormSection
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />

      <section>
        <JobListings jobs={pagedResults} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
