const courses = [
  {
    id: 1,
    title: 'Introduktion till programmering',
    description: 'Lär dig grunderna i programmering med JavaScript.',
    details:
      'Den här kursen vänder sig till dig som är ny inom programmering. Du får en stabil grund inom logiskt tänkande, variabler, funktioner, loopar och villkorssatser. Vi arbetar praktiskt med JavaScript i webbläsaren och introducerar moderna verktyg som Visual Studio Code. Kursen innehåller även grunder i felsökning och versionshantering med Git.',
    credits: 7.5,
    requirements: 'Godkänt betyg i matematik 1 eller motsvarande.',
  },
  {
    id: 2,
    title: 'Frontend-utveckling',
    description: 'Bygg snygga gränssnitt med HTML, CSS och React.',
    details:
      'Kursen fokuserar på att skapa interaktiva och responsiva webbgränssnitt. Du lär dig strukturera HTML korrekt, styla med modern CSS (inklusive Flexbox och Grid), samt bygga komponentbaserade gränssnitt med React. Vi går igenom tillståndshantering, routing, props och hooks. Du får även grundläggande kunskaper i tillgänglighet och designsystem.',
    credits: 10,
    requirements: 'Genomförd kurs: Introduktion till programmering.',
  },
  {
    id: 3,
    title: 'Backend-grunder',
    description: 'Förstå serverlogik med Node.js och Express.',
    details:
      'I denna kurs bygger du egna API:er med Node.js och Express. Du lär dig arbeta med routing, middleware, REST-principer, autentisering och JSON-data. Du skapar projekt med MongoDB eller PostgreSQL och övar på praktisk felsökning, dokumentation och versionshantering. Kursen inkluderar även säkerhet och deployment till molntjänster.',
    credits: 10,
    requirements: 'Godkänt i Frontend-utveckling samt grundläggande engelska.',
  },
  {
    id: 4,
    title: 'Databaser och SQL',
    description: 'Lär dig strukturera, hämta och hantera data i relationsdatabaser.',
    details:
      'Kursen går igenom databasdesign, normalisering, tabeller och relationer. Du lär dig skriva SELECT-, INSERT-, UPDATE- och DELETE-frågor i SQL, samt arbeta med index och vyer. Vi använder PostgreSQL i projekt där backend kopplas mot databasen. Kursen avslutas med ett miniprojekt där du strukturerar och hanterar verkliga datamängder.',
    credits: 7.5,
    requirements: 'Grundläggande programmering och förståelse för API:er.',
  },
  {
    id: 5,
    title: 'Cybersäkerhet',
    description: 'Få insikt i hur man skyddar system och användare från hot.',
    details:
      'Denna kurs ger en introduktion till cybersäkerhet. Du lär dig om OWASP Top 10, vanliga attacker som XSS och SQL-injektion samt verktyg för penetrationstester. Du får en förståelse för autentisering, sessionshantering och säker datalagring. Kursen är praktiskt inriktad med övningar i att identifiera sårbarheter och implementera skydd.',
    credits: 5,
    requirements: 'Avklarad backendkurs samt god förståelse för HTTP.',
  },
  {
    id: 6,
    title: 'UX-design',
    description: 'Utforska grunderna i användarupplevelse och designprinciper.',
    details:
      'Du får förståelse för UX-processen: research, prototyping och användartester. Vi går igenom färgteori, typografi, wireframing (Figma), heuristiska principer och tillgänglighetsanpassning. Kursen innehåller gruppövningar där du itererar på design baserat på feedback och data. Du skapar ett portföljprojekt i slutet av kursen.',
    credits: 7.5,
    requirements: 'Inga formella krav, men grundläggande IT-vana rekommenderas.',
  },
  {
    id: 7,
    title: 'Agil projektledning',
    description: 'Lär dig arbeta med Scrum och agila metoder i utvecklingsprojekt.',
    details:
      'Kursen introducerar agila ramverk med fokus på Scrum. Du lär dig planera sprintar, skriva user stories, hålla standups och retrospektiv. Vi går igenom teamroller, verktyg som Jira/Trello, och vikten av kontinuerlig förbättring. Kursen inkluderar ett grupprojekt där du leder eller deltar i en agil utvecklingsprocess.',
    credits: 5,
    requirements: 'Inga formella krav, men tidigare kurs i webbutveckling rekommenderas.',
  },
  {
    id: 8,
    title: 'Webbanalys',
    description: 'Förstå hur du använder data för att förbättra digitala tjänster.',
    details:
      'Lär dig analysera användarbeteende med Google Analytics, heatmaps och A/B-testning. Kursen går igenom KPI:er, målspårning, konverteringsoptimering och användartester. Du får praktisk erfarenhet av att tolka data och föreslå förbättringar utifrån riktiga case. Avslutande projekt handlar om att analysera en vald webbtjänst.',
    credits: 5,
    requirements: 'Grundläggande kunskaper i UX eller frontendutveckling.',
  },
]

export default courses
