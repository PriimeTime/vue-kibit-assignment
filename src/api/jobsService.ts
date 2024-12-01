export function fetchJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    const jobs = JSON.parse(localStorage.getItem("jobs") || "") || [];
    resolve(jobs);
  });
}
