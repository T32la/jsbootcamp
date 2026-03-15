import jobsData from "./data.json";
import { JobCard } from "./JobCard";
export function JobListings() {
  return (
    <>
      <div className="resultado-info" id="resultadoInfo"></div>
      <h2>Resultados de Busqueda</h2>
      <div className="jobs-listings">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
