import { JobCard } from "./JobCard";
export function JobListings({ jobs }) {
  return (
    <>
      <div className="resultado-info" id="resultadoInfo"></div>
      <h2>Resultados de Busqueda</h2>
      <div className="jobs-listings">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
