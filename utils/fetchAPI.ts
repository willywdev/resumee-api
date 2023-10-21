interface Skills {
  frontend: string[];
}

async function fetchSkills(url: string): Promise<Skills> {
  const response = await fetch(url);

  if (!response.ok) throw new Error("Something went wrong! " + response.status);

  const skillsData: Skills = await response.json();
  return skillsData;
}

fetchSkills("https://resumee-api-production.up.railway.app/skills")
  .then((skills) => {
    console.log("Skills:", skills);
  })
  .catch((error) => {
    console.error("Error fetching skills:", error);
  });
