import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, ChevronRight, Code2,
  ExternalLink, Github, Layers3, Mail, Phone, Menu, Moon, Rocket,
  Search, Send, Sparkles, Sun, X, Zap
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    id: "task",
    title: "Cloud Task API",
    category: "Backend",
    year: "Featured",
    description: "Production-style REST API with authentication, CRUD workflows, validation, centralized errors and cloud deployment.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Azure"],
    color: "cyan",
    details: [
      "RESTful API architecture with structured routes and controllers.",
      "JWT-based authentication and authorization for protected endpoints.",
      "Validation, error handling and logging designed for reliable support.",
      "Cloud deployment experience using Azure."
    ]
  },
  {
    id: "health",
    title: "Healthcare Booking",
    category: "Frontend",
    year: "React",
    description: "Responsive appointment-booking experience built around reusable React components and testable UI workflows.",
    stack: ["React.js", "JavaScript", "Mocha", "Enzyme", "CSS3"],
    color: "green",
    details: [
      "Reusable component architecture for consistent UI behavior.",
      "Responsive appointment scheduling flows.",
      "Component testing with Mocha and Enzyme.",
      "Performance and responsive-design considerations."
    ]
  },
  {
    id: "parking",
    title: "Smart Parking Finder",
    category: "Frontend",
    year: "Redux",
    description: "Responsive parking availability interface using React and centralized Redux state management.",
    stack: ["React.js", "Redux", "JavaScript", "Responsive UI"],
    color: "purple",
    details: [
      "Centralized state management using Redux.",
      "Reusable React components for availability views.",
      "Responsive interface for different screen sizes.",
      "Focused on clean interaction and maintainable UI."
    ]
  }
];

const skillData = {
  Frontend: ["React.js", "JavaScript ES6+", "Redux.js", "HTML5", "CSS3", "Responsive Design", "React Hooks"],
  Backend: ["Node.js", "Express.js", "REST APIs", "API Integration", "JSON", "Async JavaScript"],
  Database: ["MongoDB", "Mongoose"],
  Cloud: ["Microsoft Azure", "Deployment", "Git", "GitHub"],
  Testing: ["Mocha", "Enzyme"],
  Security: ["JWT", "Authentication", "Authorization"]
};

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [typed, setTyped] = useState("");
  const [backTop, setBackTop] = useState(false);

  const roles = useMemo(() => ["MERN Stack Developer", "React.js Developer", "Full Stack Developer"], []);
  useEffect(() => {
    let role = 0, pos = 0, deleting = false, timer;
    const tick = () => {
      const word = roles[role];
      if (!deleting) {
        setTyped(word.slice(0, pos + 1));
        pos++;
        if (pos === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1300);
          return;
        }
      } else {
        setTyped(word.slice(0, pos - 1));
        pos--;
        if (pos === 0) {
          deleting = false;
          role = (role + 1) % roles.length;
        }
      }
      timer = setTimeout(tick, deleting ? 55 : 85);
    };
    tick();
    return () => clearTimeout(timer);
  }, [roles]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const onScroll = () => setBackTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dark]);

  const visibleProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="app">
      <div className="noise"></div>
      <header className="topbar">
        <div className="container nav">
          <a className="logo" href="#home">
            <span>SS</span>
            <b>SAI<span>.</span></b>
          </a>
          <button className="mobile-toggle" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
          <div className={`links ${menu ? "show" : ""}`}>
            {["about","experience","projects","skills","contact"].map(x =>
              <a key={x} href={`#${x}`} onClick={() => setMenu(false)}>{x}</a>
            )}
            <button className="icon-btn" onClick={() => setDark(!dark)}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-code code-one">
            <span>const</span> developer = {"{"}<br/>
            &nbsp;&nbsp;role: <i>"MERN"</i>,<br/>
            &nbsp;&nbsp;focus: <i>"impact"</i><br/>
            {"}"};
          </div>
          <div className="hero-code code-two">
            <span>GET</span> /api/profile<br/>
            <span>200</span> OK<br/>
            {"{ \"stack\": [\"React\", \"Node\"] }"}
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="status"><span></span> OPEN TO OPPORTUNITIES</div>
              <p className="kicker">4.5+ YEARS · INFOSYS · INDIA</p>
              <h1>Build products.<br/><em>Solve problems.</em></h1>
              <div className="typed"><span>I'm a </span><strong>{typed}</strong><b className="cursor">|</b></div>
              <p className="lead">
                I build and support modern web applications across the frontend and backend,
                with a strong focus on React.js, Node.js, Express.js and MongoDB.
              </p>
              <a className="phone-link" href="tel:+919100889453"><Phone size={15}/> +91-9100889453</a>
              <div className="hero-buttons">
                <a className="btn main" href="#projects">Explore my work <ArrowDown size={16}/></a>
                <a className="btn ghost" href="#contact">Let's connect <ArrowUpRight size={16}/></a>
                <a className="btn phone-btn" href="tel:+91910088943"><Phone size={16}/> Call Me</a>
              </div>
              <div className="quick-stats">
                <div><b>4.5+</b><span>Years</span></div>
                <div><b>MERN</b><span>Stack</span></div>
                <div><b>E2E</b><span>Problem Solving</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="orb"></div>
              <div className="terminal">
                <div className="terminal-head"><span></span><span></span><span></span><label>~/sai-portfolio</label></div>
                <div className="terminal-body">
                  <div className="line"><small>01</small><span><i>const</i> stack = [</span></div>
                  <div className="line"><small>02</small><span>&nbsp;&nbsp;<b>"React.js"</b>,</span></div>
                  <div className="line"><small>03</small><span>&nbsp;&nbsp;<b>"Node.js"</b>,</span></div>
                  <div className="line"><small>04</small><span>&nbsp;&nbsp;<b>"Express.js"</b>,</span></div>
                  <div className="line"><small>05</small><span>&nbsp;&nbsp;<b>"MongoDB"</b></span></div>
                  <div className="line"><small>06</small><span>];</span></div>
                  <div className="line gap"><small>07</small><span><i>function</i> <strong>solve</strong>(problem) {"{"}</span></div>
                  <div className="line"><small>08</small><span>&nbsp;&nbsp;<strong>build</strong>(problem);</span></div>
                  <div className="line"><small>09</small><span>&nbsp;&nbsp;<strong>test</strong>();</span></div>
                  <div className="line"><small>10</small><span>&nbsp;&nbsp;<strong>ship</strong>();</span></div>
                  <div className="line"><small>11</small><span>{"}"}</span></div>
                  <div className="prompt"><span>➜</span> ready_to_build<span className="blink">_</span></div>
                </div>
              </div>
              <div className="floating-card one"><Zap size={15}/> React + Node</div>
              <div className="floating-card two"><Rocket size={15}/> Build · Deploy · Grow</div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-label">01 — ABOUT</div>
          <div className="split">
            <div>
              <h2>Engineering with a<br/><span>problem-solving mindset.</span></h2>
            </div>
            <div className="section-text">
              <p>
                I’m a MERN Stack Developer with 4.5+ years of experience in software development
                and production support. I work across React.js, JavaScript, Node.js, Express.js,
                MongoDB and REST APIs.
              </p>
              <p>
                My strength is taking an issue from user report or requirement through investigation,
                implementation, testing and a reliable solution.
              </p>
              <div className="signature">Sai Sunder <span>— MERN Stack Developer</span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="container">
            <div className="section-label">02 — EXPERIENCE</div>
            <div className="experience-card">
              <div className="exp-side">
                <span className="exp-number">01</span>
                <div className="exp-icon"><BriefcaseBusiness size={25}/></div>
              </div>
              <div className="exp-main">
                <div className="exp-title">
                  <div><p>INFOSYS</p><h3>MERN Stack Developer / Software Engineer</h3></div>
                  <span>Current · India</span>
                </div>
                <p className="exp-intro">Development, application support and end-to-end production problem solving.</p>
                <div className="exp-grid">
                  {[
                    "Develop and maintain web applications using React.js, JavaScript, Node.js and Express.js.",
                    "Build reusable React components and integrate frontend applications with RESTful APIs.",
                    "Investigate production issues using application behavior, logs and API responses.",
                    "Collaborate with cross-functional teams to identify root causes and implement fixes.",
                    "Support releases, defect fixes and production incidents while maintaining stability."
                  ].map((x,i) => <div className="bullet" key={i}><span>0{i+1}</span><p>{x}</p></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head">
            <div><div className="section-label">03 — SELECTED WORK</div><h2>Things I’ve <span>built.</span></h2></div>
            <div className="filters">
              {["All","Backend","Frontend"].map(x => <button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}
            </div>
          </div>
          <div className="projects-grid">
            {visibleProjects.map((p, i) =>
              <article className={`project-card ${p.color}`} key={p.id} onClick={() => setActiveProject(p)}>
                <div className="project-number">0{i+1}</div>
                <div className="project-icon"><Layers3 size={21}/></div>
                <div className="project-category">{p.category} · {p.year}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
                <button className="view">View case study <ChevronRight size={15}/></button>
              </article>
            )}
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <div className="section-label">04 — TECH STACK</div>
            <div className="skills-intro">
              <h2>Tools I use to<br/><span>turn ideas into software.</span></h2>
              <p>Focused on the technologies that align with modern full-stack JavaScript development.</p>
            </div>
            <div className="skill-grid">
              {Object.entries(skillData).map(([group, items]) =>
                <div className="skill-box" key={group}>
                  <div className="skill-head"><Code2 size={17}/><h3>{group}</h3></div>
                  {items.map((s, i) => <div className="skill-row" key={s}><span>{String(i+1).padStart(2,"0")}</span><b>{s}</b><i>↗</i></div>)}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div className="section-label">05 — CONTACT</div>
            <h2>Have a role that<br/><em>fits the stack?</em></h2>
            <p>Let’s talk about the problems your team is solving and how I can contribute.</p>
            <div className="contact-buttons">
              <a className="btn main" href="mailto:saisunder453@gmail.com"><Mail size={17}/> Email me</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/saidevarapalli1/" target="_blank" rel="noreferrer"><ExternalLink size={17}/> LinkedIn</a>
              <a className="btn ghost" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a className="btn ghost" href="tel:+919100889453"><Phone size={17}/> +91-9100889453</a>
            </div>
            <div className="contact-note"><Send size={15}/> GitHub URL is still a placeholder; replace it with your actual profile before publishing.</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sai Sunder</span>
          <span>React · Node · Express · MongoDB</span>
        </div>
      </footer>

      {backTop && <button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>↑</button>}

      {activeProject && <div className="modal-backdrop" onClick={()=>setActiveProject(null)}>
        <div className="modal" onClick={e=>e.stopPropagation()}>
          <button className="modal-close" onClick={()=>setActiveProject(null)}><X size={18}/></button>
          <div className="section-label">CASE STUDY</div>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.description}</p>
          <div className="tags">{activeProject.stack.map(s=><span key={s}>{s}</span>)}</div>
          <div className="case-list">
            {activeProject.details.map((d,i)=><div key={i}><span>0{i+1}</span><p>{d}</p></div>)}
          </div>
          <a href="#contact" onClick={()=>setActiveProject(null)} className="btn main">Discuss this project <ArrowUpRight size={16}/></a>
        </div>
      </div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
