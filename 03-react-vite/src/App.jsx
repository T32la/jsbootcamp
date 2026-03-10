import { Header } from "./components/Header.jsx";
import { SearchFormSection } from "./components/SearchFormSection.jsx";
import { JobListings } from "./components/JobListings.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const handlePageChange = (page) => {
    console.log("Cambiando a la pagina: ", page);
  };
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings />
          <Pagination
            currentPage={3}
            totalPages={5}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
