export function initializeMockedDb() {
  const users = [
    {
      id: "u1",
      username: "user_company",
      type: "employer",
      password: "Abc123",
    },
    {
      id: "u2",
      username: "user_applicant",
      type: "applicant",
      password: "Test1234",
    },
    {
      id: "u3",
      username: "user_company2",
      type: "employer",
      password: "Abc123",
    },
  ];

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      description: "We are looking for a frontend developer to join our team.",
      tags: ["frontend", "developer", "javascript"],
      created: Date.now(),
      salary: {
        amount: 50000,
        currency: "USD",
      },
    },
    {
      id: "2",
      title: "Backend Developer",
      description: "We are looking for a backend developer to join our team.",
      tags: ["backend", "developer", "nodejs"],
      created: Date.now(),
      salary: {
        amount: 60000,
        currency: "USD",
      },
    },
    {
      id: "3",
      title: "Fullstack Developer",
      description: "We are looking for a fullstack developer to join our team.",
      tags: ["fullstack", "developer", "javascript"],
      created: Date.now(),
      salary: {
        amount: 70000,
        currency: "USD",
      },
    },
  ];

  if (!localStorage.getItem("jobs")) {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
}
