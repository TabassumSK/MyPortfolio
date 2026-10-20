import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { C } from "./config.js";
import { IC, ICONS } from "./icons.js";

const NAV = ["about", "skills", "projects", "contact"];
const Icon = ({ n }) => <span style={{ display: "inline-flex" }} dangerouslySetInnerHTML={{ __html: IC[n] }} />;
const Ext = ({ href, icon, children, className }) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    {icon && <Icon n={icon} />}
    {children}
  </a>
);

function Reveal({ as: T = "div", className = "", children, ...p }) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return <T ref={r} className={"rv " + (v ? "v " : "") + className} {...p}>{children}</T>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [act, setAct] = useState("");
  const [pos, setPos] = useState({ l: 0, w: 0, o: 0 });
  const box = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setAct(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => { const el = document.getElementById(n); el && o.observe(el); });
    return () => o.disconnect();
  }, []);
  useLayoutEffect(() => {
    const el = box.current && box.current.querySelector(`[data-n="${act}"]`);
    if (el) setPos({ l: el.offsetLeft, w: el.offsetWidth, o: 1 });
  }, [act]);
  return (
    <header><div className="wrap"><nav aria-label="Primary">
      <a className="logo" href="#top" aria-label={C.name}>
        <span className="av">
          {C.photo ? <img src={C.photo} alt="" /> : (
            <svg className="i" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
          )}
        </span>
        <span className="nm">{C.name}</span>
      </a>
      <button className="burger" aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}>Menu</button>
      <div className={"links" + (open ? " open" : "")} id="links" ref={box}>
        <span className="ind" style={{ left: pos.l, width: pos.w, opacity: pos.o }} />
        {NAV.map((n) => (
          <a key={n} href={"#" + n} data-n={n} className={act === n ? "on" : ""} onClick={() => setOpen(false)}>
            {n[0].toUpperCase() + n.slice(1)}
          </a>
        ))}
      </div>
    </nav></div></header>
  );
}

function Rotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % C.interests.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rot in" style={{ animationDelay: ".36s" }} aria-hidden="true">
      <span style={{ transition: "transform .5s", transform: `translateY(-${i * 1.7}em)` }}>
        {C.interests.map((x) => <span key={x}>{x}</span>)}
      </span>
    </div>
  );
}

const CODE = [['c','// developer.config'],['k','const dev = {'],['','  role: "Full Stack Developer",'],['','  stack: ["React", "Node", "MongoDB"],'],['','  learning: ["Generative AI", "LLMs", "RAG"],'],['','  strengths: ["Quick learner", "Problem solver"],'],['','  openToWork: true'],['k','};']];

function Hero() {
  const d = (t) => ({ animationDelay: t + "s" });
  return (
    <section className="hero"><div className="wrap hgrid">
      <div>
        <span className="avail in" style={d(0.05)}><span className="dot" />{C.availability}</span>
        <h1 className="in" style={d(0.15)}>{C.headline}</h1>
        <p className="lead in" style={d(0.28)}>{C.intro}</p>
        <Rotator />
        <div className="btns in" style={d(0.44)}>
          {C.resume && <Ext className="btn" href={C.resume} icon="dl">Download resume</Ext>}
          <div className="soc in btn" style={d(0.52)}>
              <Ext href={C.github} icon="gh">GitHub</Ext>
          </div>
        </div>
      </div>
      <div className="code" aria-hidden="true">
        {CODE.map((l, i) => <div key={i} className="l" style={d(0.7 + i * 0.18)}><span className={l[0]}>{l[1]}</span></div>)}
      </div>
    </div></section>
  );
}

const SI = (t) => ICONS[t]
  ? `<svg viewBox="0 0 24 24"><path d="${ICONS[t]}"/></svg>`
  : `<svg class="s" viewBox="0 0 24 24"><path d="m8 6-5 6 5 6M16 6l5 6-5 6"/></svg>`;

const Tags = ({ items, icons }) => (
  <div className="tags">
    {items.map((t) => icons
      ? <span key={t} className="tag ic"><b className="ti" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SI(t) }} />{t}</span>
      : <span key={t} className="tag">{t}</span>)}
  </div>
);

// const About = () => (
//   <section id="about"><div className="wrap">
//     <Reveal as="h2">About</Reveal>
//     <Reveal className="card ab"><p>{C.about}</p></Reveal>
//   </div></section>
// );

// const Skills = () => (
//   <section id="skills"><div className="wrap">
//     <Reveal as="h2">Skills</Reveal>
//     <div className="sk">
//       {Object.entries(C.skills).map(([k, v]) => (
//         <Reveal key={k} className="skc"><h3>{k}</h3><Tags items={v} icons /></Reveal>
//       ))}
//     </div>
//   </div></section>
// );

// const About = () => (
//   <section id="about"><div className="wrap">
//     <Reveal as="h2" className="lbl">About</Reveal>
//     <div className="ab2">
//       <Reveal className="about2"><p>{C.about}</p></Reveal>
//       <Reveal className="str">
//         <span className="mono">Strengths</span>
//         <ul>
//           {C.strengths.map((s) => <li key={s}>{s}</li>)}
//         </ul>
//       </Reveal>
//     </div>
//   </div></section>
// );

const About = () => (
  <section id="about"><div className="wrap">
    {/* <Reveal as="h2" className="lbl">About</Reveal> */}
    <div className="ab2">
      <Reveal className="about2">
        <span id="about-id" as="h2" className="mono">About</span>
        <p>{C.about}</p>
      </Reveal>
      <Reveal className="str">
        <span className="mono">Strengths</span>
        <ul>
          {C.strengths.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </Reveal>
    </div>
  </div></section>
);

const Skills = () => (
  <section id="skills"><div className="wrap">
    <Reveal as="h2" className="lbl nol">Skills</Reveal>
    <div className="sk2">
      {Object.entries(C.skills).map(([k, v]) => (
        <Reveal key={k} className="skr"><h3>{k}</h3><Tags items={v} icons /></Reveal>
      ))}
    </div>
  </div></section>
);

const MK = [
  null,
  <div className="mk m1"><div className="bx" /><div className="bx" /><div className="bx" /><div className="bx" /></div>,
  <div className="mk m2">{[45, 80, 30, 95, 60, 25].map((h, i) => <i key={i} style={{ height: h + "%" }} />)}</div>,
  <div className="mk m3">
    <div className="bar" style={{ width: "70%", height: 20, background: "var(--bar)" }} />
    <div className="bar" style={{ width: "90%" }} /><div className="bar" style={{ width: "75%" }} />
    <span className="chip">AI summary</span><div className="bar" style={{ width: "60%" }} />
  </div>,
];

const Projects = () => (
  <section id="projects"><div className="wrap">
    <Reveal as="h2">Featured projects</Reveal>
    {C.projects.map((p) => (
      <Reveal as="article" key={p.title} className="proj">
        <div className="pv">{p.cover ? <img className="cv" src={p.cover} alt={p.title + " screenshot"} /> : MK[p.m]}</div>
        <div className="pb">
          <span className="mono">{p.cat}</span><h3>{p.title}</h3><p>{p.desc}</p>
          <ul>{p.pts.map((x) => <li key={x}>{x}</li>)}</ul>
          <Tags items={p.tags} />
          <div className="pl">
            <Ext href={p.github} icon="gh">Code</Ext>
            {p.demo && <Ext href={p.demo} icon="ext">Live demo</Ext>}
          </div>
        </div>
      </Reveal>
    ))}
    <Reveal style={{ textAlign: "right" }}><Ext className="pl" href={C.allProjects}>View all projects on GitHub &nbsp; ➜</Ext></Reveal>
  </div></section>
);

// const ExpEdu = () => (
//   <section id="experience"><div className="wrap two">
//     <div>
//       <Reveal as="h2">Experience</Reveal>
//       {C.experience.map((i) => (
//         <Reveal key={i.t} className="card" style={{ marginBottom: "1rem" }}>
//           <div className="xh"><div><h4>{i.t}</h4><div className="mono">{i.o}</div></div><span className="pill">{i.d}</span></div>
//           <ul className="xl">{i.pts.map((x) => <li key={x}>{x}</li>)}</ul>
//         </Reveal>
//       ))}
//     </div>
//     <div id="education">
//       <Reveal as="h2">Education</Reveal>
//       {C.education.map((i) => (
//         <Reveal key={i.t} className="card" style={{ marginBottom: "1rem" }}>
//           <div className="xh"><div><h4>{i.t}</h4><div className="mono">{i.o}</div></div>{i.d && <span className="pill">{i.d}</span>}</div>
//           {i.pts.length > 0 && <ul className="xl">{i.pts.map((x) => <li key={x}>{x}</li>)}</ul>}
//         </Reveal>
//       ))}
//     </div>
//   </div></section>
// );

// const Experience = () => (
//   <section id="experience"><div className="wrap">
//     <Reveal as="h2">Experience</Reveal>
//     {C.experience.map((i) => (
//       <Reveal key={i.t} className="card">
//         <div className="xh"><div><h4>{i.t}</h4><div className="mono">{i.o}</div></div><span className="pill">{i.d}</span></div>
//         <ul className="xl">{i.pts.map((x) => <li key={x}>{x}</li>)}</ul>
//       </Reveal>
//     ))}
//   </div></section>
// );

// const Education = () => (
//   <section id="education"><div className="wrap">
//     <Reveal as="h2">Education</Reveal>
//     {C.education.map((i) => (
//       <Reveal key={i.t} className="card" style={{ marginBottom: "1rem" }}>
//         <div className="xh"><div><h4>{i.t}</h4><div className="mono">{i.o}</div></div>{i.d && <span className="pill">{i.d}</span>}</div>
//         {i.pts.length > 0 && <ul className="xl">{i.pts.map((x) => <li key={x}>{x}</li>)}</ul>}
//       </Reveal>
//     ))}
//   </div></section>
// );

// function ContactForm() {
//   const [f, setF] = useState({ name: "", email: "", message: "", site: "" });
//   const [st, setSt] = useState({ k: "", t: "" });
//   const [busy, setBusy] = useState(false);
//   const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
//   const mailto = () => {
//     location.href = `mailto:${C.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(f.message + "\n\n" + f.name + " (" + f.email + ")")}`;
//     setSt({ k: "ok", t: "Opening your email app with the message ready to send." });
//   };
//   async function submit(e) {
//     e.preventDefault();
//     if (f.site) return;
//     if (!C.formEndpoint) { mailto(); return; }
//     setBusy(true);
//     try {
//       const r = await fetch(C.formEndpoint, {
//         method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({ name: f.name, email: f.email, message: f.message }),
//       });
//       if (!r.ok) throw new Error();
//       setSt({ k: "ok", t: "Message sent. Thank you, I will reply soon." });
//       setF({ name: "", email: "", message: "", site: "" });
//     } catch {
//       setSt({ k: "bad", t: "Could not send directly, so your email app is opening instead." });
//       mailto();
//     }
//     setBusy(false);
//   }
//   return (
//     <form className="fm" onSubmit={submit}>
//       <label>Name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
//       <label>Email<input required type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
//       <label>Message<textarea required rows="3" value={f.message} onChange={set("message")} /></label>
//       <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" value={f.site} onChange={set("site")} />
//       <div><button className="btn p" type="submit" disabled={busy}>{busy ? "Sending..." : "Send message"}</button></div>
//       <p className={"st " + st.k} role="status">{st.t}</p>
//     </form>
//   );
// }

// const Contact = () => (
//   <section className="ct" id="contact">
//     <Reveal className="wrap">
//       <div className="btns">
//         <a className="btn" target="_blank" rel="noopener noreferrer"
//            href={"https://mail.google.com/mail/?view=cm&to=" + C.email}>
//           <Icon n="mail" />Email
//         </a>
//         {C.whatsapp && (
//           <Ext className="btn p" href={"https://wa.me/" + C.whatsapp} icon="wa">WhatsApp</Ext>
//         )}
//       </div>
//     </Reveal>
//   </section>
// );


const Contact = () => {
  // 1. logic goes here, before the return
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(C.email);
    } catch {
      const t = document.createElement("textarea");
      t.value = C.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 2. your existing return, with only the Email <a> replaced by the <button>
  return (
    <section className="ct" id="contact">
      <Reveal className="wrap">
        <h2>Contact Me</h2>
        <p className="lead" style={{ margin: "0 auto 2rem" }}>
  Have a project or role in mind? Get in touch.
</p>
        <div className="btns">
          <button className="btn" type="button" onClick={copyEmail}>
            <Icon n="mail" />{copied ? "Copied!" : "Email"}
          </button>
          {C.whatsapp && (
            <Ext className="btn p" href={"https://wa.me/" + C.whatsapp} icon="wa">WhatsApp</Ext>
          )}
        </div>
      </Reveal>
    </section>
  );
};

export default function App() {
  useEffect(() => { document.title = C.name + " | Full Stack Developer"; }, []);
  return (
    <>
      <Header />
      <main id="top"><Hero /><About /><Skills /><Projects /><Contact /></main>
      <footer><div className="wrap">© {new Date().getFullYear()} {C.name}</div></footer>
    </>
  );
}
