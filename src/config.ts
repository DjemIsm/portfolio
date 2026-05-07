export const siteConfig = {
  name: "Djemil Ismaili",
  title: "Fachinformatiker Anwendungsentwicklung",
  description:
    "Portfolio website of Djemil Ismaili, Fachinformatiker Anwendungsentwicklung aus Hamburg",
  accentColor: "#1d4ed8",
  social: {
    email: "djemilismaili@web.de",
    linkedin: "",
    twitter: "",
    github: "https://github.com/DjemIsm",
  },
  aboutMe:
    "Softwareentwickler C#/.NET mit Erfahrung in Wartung, Weiterentwicklung und Qualitätssicherung von Geschäftsanwendungen. Erfahrung in der Entwicklung von .NET-Softwaremodulen, der Integration externer Systeme über definierte Schnittstellen sowie in objektorientierter Programmierung, Softwarearchitektur und .NET-Technologien.",
  skills: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "MS SQL Server",
    "WPF",
    "Blazor",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Angular",
  ],
  projects: [
    {
      name: "BorroDesk",
      description:
        "Internes IT-Ticket-Management-System mit Benutzerrollen, Ticketverwaltung, Kommentaren, Datei-Uploads, Suche, Filterung, Pagination, Dashboard und Backend-Integrationstests.",
      link: "https://github.com/DjemIsm/BorroDesk",
      skills: [
        "ASP.NET Core Web API",
        "Angular",
        "TypeScript",
        "SQL Server",
        "JWT",
      ],
    },
    {
      name: "C#-Treiber für industrielle Fernanzeigen",
      description:
        "Entwicklung eines .NET-Moduls zur Steuerung externer Anzeigesysteme über TCP/IP.",
      link: "",
      skills: ["C#", ".NET", "TCP/IP"],
    },
    {
      name: "Remote-Auslöser für Wiegesysteme",
      description:
        "Entwicklung einer Fernsteuerung zur Initiierung von Wiegevorgängen.",
      link: "",
      skills: ["C#", ".NET", "WPF"],
    },
    {
      name: "Tracker",
      description:
        "Tracking-Webanwendung mit CRUD-Funktionen, Dashboard, Filter und CSV-Export auf Basis von ASP.NET Core MVC, Entity Framework Core, SQLite und Identity.",
      link: "",
      skills: [
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "SQLite",
        "Identity",
        "HTML/CSS",
      ],
    },
  ],
  experience: [
    {
      company: "HE Wägetechnik GmbH",
      title: "Praktikum als Softwareentwickler",
      dateRange: "Jan 2025 - Jun 2025",
      bullets: [
        "Entwicklung von C#-Modulen für eine bestehende Hauptanwendung",
        "Anbindung externer Systeme über definierte Schnittstellen",
      ],
    },
    {
      company: "Allgeier CyRis GmbH",
      title: "Praktikum als Softwareentwickler",
      dateRange: "Apr 2024 - Jul 2024",
      bullets: [
        "Mitarbeit an einer Compliance-Management-Software zur Erfüllung gesetzlicher und normbedingter Dokumentationspflichten",
        "Umsetzung von Bugfixes, Features und funktionalen Tests",
      ],
    },
  ],
  education: [
    {
      school: "bfw - Unternehmen für Bildung",
      degree: "Fachinformatiker Anwendungsentwicklung",
      dateRange: "Feb 2023 - Jul 2025",
      achievements: [
        "C#/.NET-Softwareentwicklung",
        "ASP.NET Core, Datenbanken und Git",
        "Praxis in realen Entwicklungsprojekten",
      ],
    },
    {
      school: "TUHH",
      degree: "Maschinenbaustudium",
      dateRange: "Aug 2014 - Mai 2016",
      achievements: [],
    },
    {
      school: "Nelson-Mandela-Schule",
      degree: "Abitur",
      dateRange: "Aug 2007 - Jun 2014",
      achievements: [],
    },
  ],
};