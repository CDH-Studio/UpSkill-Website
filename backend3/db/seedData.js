const getId = obj => obj.id;

const keyIdByName = (acc, obj) => {
  acc[obj.name] = obj.id;
  return acc;
};

const USERS = [
  {
    id: "e5dbf562-fc03-11e9-8f0b-362b9e155667",
    first_name: "Test",
    last_name: "Bro",
    email: "test@test.com",
    job_title: "Developer",
    phone: "123-456-7890",
    mobile: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    first_language: "English",
    second_language: "French",
    year_service: "5",
    linkedin: "testbro@linkedin.com",
    github: "testbro@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3b05e172-fc06-11e9-8f0b-362b9e155667",
    first_name: "Trevor",
    last_name: "Bivi",
    email: "TrevorBivi@test.com",
    job_title: "Developer",
    phone: "123-456-7890",
    mobile: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    first_language: "English",
    second_language: "French",
    year_service: "5",
    linkedin: "TrevorBivi@linkedin.com",
    github: "TrevorBivi@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5251b52c-fc06-11e9-8f0b-362b9e155667",
    first_name: "Rizvi",
    last_name: "Rab",
    email: "RizviRab@test.com",
    job_title: "Developer",
    phone: "123-456-7890",
    mobile: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    first_language: "English",
    second_language: "French",
    year_service: "3",
    linkedin: "RizviRab@linkedin.com",
    github: "RizviRab@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5251b52c-fc06-11e9-8f0b-362b9e155667",
    first_name: "Mamadou",
    last_name: "Bah",
    email: "MamadouBah@test.com",
    job_title: "Developer",
    phone: "123-456-7890",
    mobile: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    first_language: "English",
    second_language: "French",
    year_service: "3",
    linkedin: "MamadouBah@linkedin.com",
    github: "MamadouBah@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const USER_IDS = USERS.map(user => user.id);

const SKILLS = [
  {
    id: "6ce13d22-bd51-46ef-8026-9612350ac55a",
    description_en: "React",
    description_fr: "React",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "ba01fac6-e234-47d6-918f-6994aaf0f791",
    description_en: "Docker",
    description_fr: "Docker",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "83f35ea1-febf-4615-a68e-4e82d7600bee",
    description_en: "Kubernetes",
    description_fr: "Kubernetes",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "43fbe123-1974-4588-a94f-b2967e4326a8",
    description_en: "Google Cloud Platform",
    description_fr: "Google Cloud Platform",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "da251d9c-4f4e-42a0-9d4e-0879f4a47147",
    description_en: "JavaScript",
    description_fr: "JavaScript",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "1be1c6e4-9b68-4a9f-a2d4-8b56c38d611c",
    description_en: "Feathers.js",
    description_fr: "Feathers.js",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "6efac7d0-398b-4ecc-9609-c1357dfe0309",
    description_en: "AWS",
    description_fr: "AWS",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5ad9c360-987b-4fb2-bde5-f098067dbaa7",
    description_en: "Python",
    description_fr: "Python",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "cc2b59ec-7022-481c-8f57-55007df5e000",
    description_en: "Django",
    description_fr: "Django",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const SKILL_IDS = SKILLS.map(getId);
