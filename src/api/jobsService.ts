export function fetchJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    const jobs = JSON.parse(localStorage.getItem("jobs") || "") || [];
    resolve(jobs);
  });
}

export function createJob(job: Job): Promise<Job> {
  return new Promise((resolve) => {
    const jobs = JSON.parse(localStorage.getItem("jobs") || "") || [];
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    resolve(job);
  });
}

export function deleteJob(jobId: string): Promise<void> {
  return new Promise((resolve) => {
    const jobs = JSON.parse(localStorage.getItem("jobs") || "") || [];
    const updatedJobs = jobs.filter((j: Job) => j.id !== jobId);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    resolve();
  });
}
