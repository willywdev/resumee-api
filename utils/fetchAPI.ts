interface Skills {
  frontend: string[];
}

async function fetchSkills(): Promise<Skills> {
  const response = await fetch(
    "https://resumee-api-production.up.railway.app/skills"
  );

  if (!response.ok) throw new Error("Something went wrong! " + response.status);

  const skillsData: Skills = await response.json();
  return skillsData;
}

fetchSkills()
  .then((skills) => {
    console.log("Skills:", skills);
  })
  .catch((error) => {
    console.error("Error fetching skills:", error);
  });
