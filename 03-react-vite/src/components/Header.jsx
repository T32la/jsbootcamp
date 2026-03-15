export function Header() {
  return (
    <header className="busqueda">
      <nav className="nav-busqueda">
        <div className="right">
          <h1>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
          </h1>
          <a href="index.html" target="_self">
            Inicio
          </a>
          <a href="busqueda.html" rel="noopener noreferrer">
            Empleos
          </a>
          <a href="#">Empresas</a>
          <a href="#">Salarios</a>
        </div>

        <div className="left">
          <div></div>
          <img src="./images/cat.webp" alt="foto de perfil" />
        </div>
      </nav>
    </header>
  );
}

