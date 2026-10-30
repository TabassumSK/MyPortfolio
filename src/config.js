/* ============ EDIT YOUR DETAILS HERE ============ */
export const C = {
  name: "Tabassum Shaikh",
  photo: "/astro_profile.jpg",  // put your image in the public folder, e.g. "/photo.jpg"                             // your photo: a file path like "photo.jpg" next to this file, or a full image link. Leave empty to show the icon
  email: "tabassumsk720@gmail.com",
  github: "https://github.com/TabassumSK",
  resume: "https://drive.google.com/file/d/1HI8p5aV-aS1Kx7ZL8R3Ha3yJFsOwbuxw/view?usp=sharing",
  whatsapp: "9579848887",  // your number with country code, digits only, e.g. "919876543210"; the WhatsApp button appears when set
  formEndpoint: "", // optional: paste a Formspree or Web3Forms URL to receive messages straight to your inbox (works on your own hosting)
  headline: "Turning ideas into working software.", // main hero heading, change it here
  intro: "Software developer focused on building modern web applications, solving problems, and turning ideas into reliable products.",
  availability: "Open to Full Stack Developer roles",
  interests: ["Full Stack Development", "React & Node.js", "Software Engineering"],
  about: "Hello, I am Full-stack developer who turns Ideas into products people actually use. I’ve gone from a college idea to an industry-sponsored platform with a published research paper, and I build every product to work reliably, scale, and make sense to the person using it. I’m looking for a team that moves fast and expects ownership.",
  strengths: ["Quick learner", "Adaptable", "Problem solver", "Team player"],
  skills: { "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"], "Backend": ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Passport.js"], "Databases": ["MongoDB", "MySQL", "PostgreSQL"], "Languages and tools": ["Java", "Python", "TypeScript", "Git", "GitHub", "Postman", "Docker", "Pytest"] },
  projects: [
    {
      title: "StayHub", cat: "Property rental and booking platform", m: 1,
      cover: "/StayHub.png",
      desc: "A full-stack MERN platform to discover, list and book rental properties, with secure sign-in, online Razorpay payments, booking receipts and map-based browsing.",
      pts: [
        "React.js frontend with Express.js REST APIs and CRUD for listings and reviews",
        "Booking flow with Razorpay payment integration and booking receipts",
        "Authentication with Passport.js and Joi validation",
        "Cloudinary image uploads and Mapbox maps"
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap", "Passport.js", "Razorpay", "Cloudinary", "Mapbox"],
      github: "https://github.com/TabassumSK/StayHub", demo: "https://stayhub-h65g.onrender.com"
    },
    {
      title: "PulseAI", cat: "Social media sentiment analysis platform", m: 2,
      cover: "/PulseAi.png",
      desc: "A web app that classifies sentiment from social media and news data and shows the results on interactive dashboards.",
      pts: ["FastAPI backend using Hugging Face Transformers", "React dashboard with trends and PDF reports", "Analysis history stored in PostgreSQL"],
      tags: ["React.js", "Python", "FastAPI", "PostgreSQL", "Hugging Face", "PyTorch", "Docker", "Pytest"],
      github: "https://github.com/TabassumSK/social-media-sentiment-analysis", demo: ""
    },
    {
      title: "Wind Forecast Dashboard", cat: "Full-stack data analytics app", m: 1,
      cover: "/Wind_Forecast.png",
      desc: "A dashboard for a UK energy utility's day-ahead buying team. It shows the wind forecast that was actually available at decision time and quantifies its error, built on Elexon data.",
      pts: ["Python and pandas logic that picks the latest forecast published before the decision deadline, with London time zone handling", "FastAPI backend with MAE, RMSE, bias and P90/P95 buffer metrics, and a React and Recharts dashboard"],
      tags: ["Python", "FastAPI", "pandas", "React", "Recharts", "Docker", "pytest"],
      github: "https://github.com/TabassumSK/zxcvbnm", demo: "https://zxcvbnm-179y.onrender.com/"
    },
    {
      title: "Parental Legacy & Life Factors Calculator", cat: "Personalized Analysis Tool", m: 3,
      cover: "/Legacy.png",
      desc: "A responsive React app for date-based parental legacy analysis with interactive charts and report exports.",
      pts: ["Real-time birth date calculations with date validation", "Seven-factor comparison with interactive radar and donut charts", "Save readings locally and export reports as PDF or CSV"],
      tags: ["React 18", "vite", "Tailwind CSS", "Recharts", "jsPDF", "localStorage"],
      github: "https://github.com/TabassumSK/parental-legacy-calculator", demo: "https://parental-legacy-calculator-kappa.vercel.app/"
    },
    {
      title: "NexWrite", cat: "AI-powered publishing platform", m: 1,
      cover: "/BlogWeb.png",
      desc: "A publishing platform with AI-assisted summaries and search, built to practise backend work and API integration.",
      pts: ["Gemini API for article summaries", "Express and MongoDB backend with server-rendered EJS views"],
      tags: ["Node.js", "Express.js", "MongoDB", "Gemini API", "EJS", "CSS"],
      github: "https://github.com/TabassumSK/Blog-Web", demo: "https://blog-web-1-iee6.onrender.com"
    },],
  allProjects: "https://github.com/TabassumSK?tab=repositories",
  experience: [{ t: "Web Developer Intern", o: "ADM Welfare Society, Remote", d: "Jan 2025 - Jun 2025", pts: ["Developed responsive web pages using React.js, HTML5, CSS3, and JavaScript, ensuring consistent layouts across desktop and mobile devices.", "Built reusable UI components that reduced duplicate code and simplify development of new features across the team.", "Debugged and tested frontend features, resolving issues, and supported deployment using Git-based collaboration workflows."] }],
  education: [{ t: "B.E. in Computer Science", o: "Savitribai Phule Pune University", d: "2022 - 2026", pts: ["CGPA: 8.0 / 10.0", "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering"] }]
};
