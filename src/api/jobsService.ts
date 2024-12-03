import { useAuthStore } from "@/stores/auth";

export function fetchJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    const jobs = JSON.parse(localStorage.getItem("jobs") || "") || [];
    resolve(jobs);
  });
}

export function bindJobToUser(jobId: string): void {
  const authStore = useAuthStore();

  if (!authStore.user) {
    throw new Error("User not found");
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u: User) => u.id === authStore.user?.id);

  if (!user) {
    throw new Error("User not found in back end");
  }

  user.jobs = [...(user.jobs || []), jobId];
  localStorage.setItem("users", JSON.stringify(users));

  authStore.user.jobs = user.jobs;
}

export async function createJobAndBindToUser(job: Job): Promise<Job> {
  const authStore = useAuthStore();

  if (!authStore.user) {
    throw new Error("User not found");
  }

  const jobs = JSON.parse(localStorage.getItem("jobs") || "[]");
  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));

  bindJobToUser(job.id);

  return job;
}

export async function deleteJobAndUnbindFromUser(jobId: string): Promise<void> {
  const authStore = useAuthStore();

  const jobs = JSON.parse(localStorage.getItem("jobs") || "");
  const updatedJobs = jobs.filter((j: Job) => j.id !== jobId);
  localStorage.setItem("jobs", JSON.stringify(updatedJobs));

  const users = JSON.parse(localStorage.getItem("users") || "");
  const user = users.find((u: User) => u.id === authStore.user?.id);

  if (!user) {
    throw new Error("User not found in back end");
  }

  user.jobs = (user.jobs || []).filter((id: string) => id !== jobId);
  localStorage.setItem("users", JSON.stringify(users));

  if (authStore.user) {
    authStore.user.jobs = user.jobs;
  }
}
