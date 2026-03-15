import { useId } from "react";

export function SearchFormSection() {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit del formulario de busqueda...");
  };
  return (
    <section className="jobs-search">
      <h1>Encuentra tu proximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnologico.</p>

      <form
        onSubmit={handleSubmit}
        id="empleos-search-form"
        role="search"
        className="search"
      >
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search icon_search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input
            name="idText"
            id="empleos-search-input"
            required
            type="text"
            className="search_input"
            placeholder="Buscar ofertas de trabajo, empresas o habilidades...."
          />
          <button type="submit" style={{ position: "absolute", right: "4px" }}>
            Buscar
          </button>
        </div>

        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <optgroup label="Tecnologías Populares">
              <option value="">Tecnologia</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <hr />
            <option value="java">Java</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="csharp">C#</option>
          </select>
          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>
          <select name={idExperienceLevel} id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
      <span id="filter-selected-value"></span>
    </section>
  );
}
