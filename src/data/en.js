// English content. Keep this in sync with vi.js — same keys, same order.
// Anything still in square brackets [...] is placeholder text to be replaced with real information.

const en = {
  lang: "en",

  profile: {
    name: "Giang",
    shortName: "Giang",
    role: "Sixth-year Medical Student",
    school: "Can Tho University of Medicine and Pharmacy",
    graduation: "[Expected graduation: month/20..]",
    interest: "Obstetrics & Gynecology and Surgery",
    city: "Can Tho, Vietnam",
    tagline:
      "I am a sixth-year medical student at Can Tho University of Medicine and Pharmacy. Through my studies and clinical training, I have developed a particular interest in Obstetrics & Gynecology and Surgery. I hope to keep building my knowledge, clinical skills and hands-on experience to prepare for my chosen specialty after graduation.",
    // Put the English CV in public/ (e.g. public/cv-en.pdf) and set "/cv-en.pdf". Leave empty to hide the button.
    cvUrl: "",
  },

  stats: [
    { value: "3.65/4.0", label: "cumulative GPA" },
    { value: "6 years", label: "medical degree programme" },
    { value: "4 hospitals", label: "clinical rotations completed" },
    { value: "VSTEP Level 3", label: "English proficiency" },
  ],

  about: {
    paragraphs: [
      "[Paragraph 1 — Who you are, where you study, why you chose medicine.]",
      "[Paragraph 2 — A memorable experience from your studies or rotations, and what you learned from it.]",
      "[Paragraph 3 — Plans after graduation: specialty, residency, where you would like to work.]",
    ],
    highlights: [
      "Obstetrics & Gynecology",
      "Surgery",
      "[Near-term goal: residency exam / specialty training / position at ...]",
    ],
  },

  education: [
    {
      time: "[2021] – [2027]",
      degree: "Doctor of Medicine (six-year programme)",
      school: "Can Tho University of Medicine and Pharmacy",
      details: ["Cumulative GPA: 3.65/4.0", "[Classification / scholarships / honours]"],
    },
    {
      time: "[2018] – [2021]",
      degree: "[High school — specialised class ...]",
      school: "[High school]",
      details: ["[Academic awards, if any]"],
    },
  ],

  awards: ["[Scholarship / award 1 — year]", "[Scholarship / award 2 — year]"],

  rotations: [
    {
      department: "[Internal Medicine]",
      hospital: "[Hospital]",
      time: "[Period]",
      description:
        "[What you took part in: history taking, examination, case write-ups, on-call shifts, procedures observed or performed.]",
    },
    { department: "[Surgery]", hospital: "[Hospital]", time: "[Period]", description: "[Short description.]" },
    {
      department: "[Obstetrics & Gynecology]",
      hospital: "[Hospital]",
      time: "[Period]",
      description: "[Short description.]",
    },
    { department: "[Pediatrics]", hospital: "[Hospital]", time: "[Period]", description: "[Short description.]" },
  ],

  activities: [
    {
      time: "[2023] – [2025]",
      title: "[Position / role]",
      organization: "[Club, student union, organisation]",
      description: "[What you did and what came of it.]",
    },
    {
      time: "[2024]",
      title: "[Volunteer]",
      organization: "[Community health check-up programme]",
      description: "[Short description.]",
    },
  ],

  skills: [
    { group: "Clinical", items: ["[History taking, physical examination]", "[Case write-ups]", "[Basic procedures]"] },
    { group: "Languages", items: ["Vietnamese — native", "English — VSTEP Level 3", "[Other language]"] },
    { group: "Other", items: ["[Presenting]", "[Teamwork]", "[Office software]"] },
  ],

  certifications: ["[Certificate 1 — e.g. Basic Life Support (BLS)]", "[Certificate 2]"],

  nav: [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "rotations", label: "Clinical" },
    { id: "activities", label: "Activities" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],

  ui: {
    language: "Language",
    downloadCv: "Download CV",
    contact: "Contact",
    viewJourney: "See my training →",
    interestLabel: "Interests",
    portraitAlt: "Portrait of",
    portraitPlaceholder: "Portrait photo",
    portraitRatio: "(4:5 ratio)",
    backToTop: "Back to top",
    about: { eyebrow: "About", title: "About me", highlights: "Interests and direction" },
    education: { eyebrow: "Education", title: "Education", awards: "Scholarships and awards" },
    rotations: {
      eyebrow: "Clinical",
      title: "Clinical rotations",
      intro:
        "Departments I rotated through as part of the degree programme, under the supervision of faculty and hospital physicians.",
    },
    activities: { eyebrow: "Activities", title: "Extracurricular and volunteer work" },
    skills: { eyebrow: "Skills", title: "Skills and certificates", certifications: "Certificates" },
    contactSection: {
      eyebrow: "Contact",
      title: "Get in touch",
      heading: "A study or work opportunity?",
      body: "[One or two sentences: what you are looking for — a post-graduation position, a mentor — and the best way to reach you.]",
      sendEmail: "Send an email",
      channels: {
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        linkedinValue: "LinkedIn profile",
        facebook: "Facebook",
        facebookValue: "Facebook page",
        zalo: "Zalo",
        zaloValue: "Message on Zalo",
      },
    },
    footer: { disclaimer: "This is a personal profile and does not provide medical advice." },
  },
};

export default en;
