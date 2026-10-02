// English content. Keep this in sync with vi.js — same keys, same order.
// Any list left empty ([]) hides its block on the page.

const en = {
  lang: "en",

  profile: {
    name: "Xuan Giang",
    shortName: "Xuan Giang",
    role: "Sixth-year Medical Student",
    school: "Can Tho University of Medicine and Pharmacy",
    graduation: "Expected graduation: 2027",
    interest: "Obstetrics & Gynecology and Surgery",
    city: "Can Tho, Vietnam",
    tagline:
      "I am a sixth-year medical student working to round out my medical knowledge and clinical skills. I am particularly interested in Obstetrics & Gynecology and Surgery, and I hope to continue my training and professional development after graduation.",
    // Put the English CV in public/ (e.g. public/cv-en.pdf) and set "/cv-en.pdf". Leave empty to hide the button.
    cvUrl: "",
  },

  stats: [
    { value: "3.67/4.0", label: "cumulative GPA" },
    { value: "6 years", label: "medical degree programme" },
    { value: "4 hospitals", label: "clinical rotations completed" },
    { value: "VSTEP B1", label: "English (Level 3)" },
  ],

  about: {
    paragraphs: [
      "I am a sixth-year medical student at Can Tho University of Medicine and Pharmacy. Over the course of my studies I have moved from the basic sciences to clinical practice, gradually learning to approach each patient as a whole person.",
      "During my hospital rotations I have practised history taking, physical examination, case write-ups, interpreting investigations, and working through diagnosis and treatment under the supervision of faculty and physicians.",
      "I am working towards a career in Obstetrics & Gynecology and Surgery. My goal is to keep learning, strengthen my clinical skills and find the right path for my development after graduation.",
    ],
    highlights: ["Obstetrics & Gynecology", "Surgery", "Clinical skills", "Continuing professional learning"],
  },

  education: [
    {
      time: "2021 – 2027",
      degree: "Doctor of Medicine (six-year programme)",
      school: "Can Tho University of Medicine and Pharmacy",
      details: ["Current cumulative GPA: 3.67/4.0"],
    },
  ],

  awards: [],

  rotations: [
    {
      department: "Internal Medicine",
      hospital: "Can Tho Central General Hospital",
      time: "",
      description:
        "Practised history taking, physical examination and case write-ups, and worked through the diagnosis and treatment of common internal medicine conditions.",
    },
    {
      department: "Surgery",
      hospital: "Can Tho City General Hospital",
      time: "",
      description:
        "Developed surgical examination skills, followed patients through their care, and became familiar with common surgical conditions and procedures.",
    },
    {
      department: "Obstetrics & Gynecology",
      hospital: "Can Tho Obstetrics and Gynecology Hospital",
      time: "",
      description:
        "Practised history taking, obstetric and gynecological examination and patient follow-up, and encountered common situations in obstetrics and gynecology.",
    },
    {
      department: "Pediatrics",
      hospital: "Can Tho Children's Hospital",
      time: "",
      description:
        "Practised history taking, examination and assessment of sick children, learned about common pediatric conditions and monitored response to treatment.",
    },
  ],

  activities: [
    {
      time: "2026",
      title: "Community health practicum",
      organization: "Can Tho University of Medicine and Pharmacy",
      description:
        "Took part in a community practicum in Cai Von Ward, Vinh Long: surveyed local health status, assessed commune health criteria, and helped deliver health education on preventing hypertension.",
    },
    {
      time: "",
      title: "Group learning and teamwork",
      organization: "Within the medical degree programme",
      description:
        "Took part in group study, case presentations and clinical discussions, and worked with peers across clinical and community placements.",
    },
  ],

  skills: [
    {
      group: "Clinical",
      items: [
        "History taking",
        "Physical examination",
        "Case write-ups",
        "Interpreting investigations",
        "Diagnostic reasoning",
      ],
    },
    { group: "Languages", items: ["Vietnamese — native", "English — VSTEP Level 3 (B1)"] },
    {
      group: "Other",
      items: [
        "Presenting and teamwork",
        "Self-directed study and reviewing medical literature",
        "Time management and a strong sense of responsibility",
      ],
    },
  ],

  certifications: [],

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
    menu: "Menu",
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
        "Hands-on training at teaching hospitals as part of the degree programme, under the supervision of faculty and physicians.",
    },
    activities: { eyebrow: "Activities", title: "Extracurricular and community work" },
    skills: { eyebrow: "Skills", title: "Skills and certificates", certifications: "Certificates" },
    contactSection: {
      eyebrow: "Contact",
      title: "Get in touch",
      heading: "“Learn to understand. Practise to grow. Care deeply to become a better doctor.”",
      body: "I am always open to opportunities to learn, practise and grow professionally in line with my interest in Obstetrics & Gynecology and Surgery.",
      location: "Can Tho, Vietnam",
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
