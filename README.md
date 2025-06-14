<p align="center">
  <img src="src/assets/navbar-logo.png" alt="Håvard Logo" height="120" />
</p>

<h1 align="center">🎓 Håvard StudentPortal</h1>

<p align="center">
  En responsiv webbapplikation för kursregistrering och nyhetsvisning.<br>
  <strong>Byggd med React, anpassad design och modern utvecklingsstack.</strong>
</p>

<p align="center">
  <a href="https://github.com/tombenrex/studentPortal"><img src="https://img.shields.io/github/stars/tombenrex/studentPortal?style=social" alt="GitHub stars"></a>
  <a href="https://github.com/tombenrex/studentPortal"><img src="https://img.shields.io/github/license/tombenrex/studentPortal" alt="MIT License"></a>
  <a href="#"><img src="https://img.shields.io/badge/status-in%20progress-yellow" alt="Status"></a>
</p>

---

## 🚀 Funktioner

- 📚 Kurslista med sökfunktion
- 📝 Detaljerad kursvy med förkunskapskrav, poäng och beskrivning
- 📄 Registreringsformulär med validering, bekräftelse och localStorage
- 🗞️ Nyhetssida med API-integration (planerat)
- 🌐 Responsiv design (mobile-first)
- 🎨 Egen design med CSS-variabler, gradients, animationer
- 🧭 Navigering med React Router
- 💾 Lagring av anmälningar i localStorage

## 🎥 Demo

> 💡 Kommer snart! Lägg till en GIF eller länk till en skärminspelningsvideo (t.ex. via Loom eller YouTube).

---

## 🛠️ Tekniker

- ⚛️ React (med `useState`, `useEffect`, `react-router-dom`)
- 💅 CSS med `:root`, `clamp()` och anpassade variabler
- 🧪 Validering med Yup + react-hook-form (om implementerat)
- 📦 Bootstrap (delvis)
- 🌈 UI-komponenter: Material UI (valfritt, för knappar mm)

## 📁 Projektstruktur

```bash
.
├── public/
│   └── images/             # Bakgrundsbilder, logotyper
├── src/
│   ├── components/         # Navbar, knappar, dropdowns
│   ├── pages/              # Home, Courses, CourseDetails, Register, News
│   ├── data/               # courses.js
│   ├── App.jsx             # App-router & layout
│   ├── App.css             # Globala layoutstilar
│   ├── index.css           # Variabler, typografi, reset
│   └── main.jsx            # Root render
```

## 🧑‍💻 Installation & körning

1. **Klona projektet:**

```bash
git clone https://github.com/tombenrex/studentPortal.git
cd studentPortal
```

2. **Installera beroenden:**

```bash
npm install
```

3. **Starta utvecklingsserver:**

```bash
npm run dev
```

4. **Besök i webbläsare:**

```bash
http://localhost:5173/studentPortal/
```

> Bas-URL är inställd via `BrowserRouter basename='/studentPortal/'`.

## 🌟 Att göra / kommande funktioner

- [ ] API-integration för nyheter
- [ ] E-postbekräftelse vid registrering
- [ ] Adminvy för att hantera kurser
- [ ] Mörkt tema
- [ ] Testning med Vitest eller Jest

##