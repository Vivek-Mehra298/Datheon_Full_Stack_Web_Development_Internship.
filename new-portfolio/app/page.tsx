"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Layers3,
  Mail,
  Menu,
  MonitorCog,
  Phone,
  Send,
  ServerCog,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Expertise", "#skills"],
  ["Work", "#work"],
  ["Experience", "#experience"]
];

const skills = [
  {
    icon: MonitorCog,
    title: "Frontend Engineering",
    text: "Next.js, React.js, TypeScript, Redux, React Query, Tailwind CSS, Ant Design, PWA & Webpack."
  },
  {
    icon: ServerCog,
    title: "Backend Systems",
    text: "Node.js, Express.js, REST APIs, JWT Authentication and thoughtful microservices architecture."
  },
  {
    icon: Database,
    title: "Data & Cloud",
    text: "MongoDB, Mongoose ODM, Firebase Firestore, Realtime Database, Docker and Vercel."
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    text: "AI workflow design, Llama 3 via Groq, intelligent job matching, research agents and automation pipelines."
  },
  {
    icon: GitBranch,
    title: "Developer Workflow",
    text: "Git, GitHub, Postman, VS Code, npm, Chrome DevTools and an iterative, product-minded process."
  },
  {
    icon: Code2,
    title: "Core Foundations",
    text: "Strong foundations in C, C++, Java, JavaScript, data structures, algorithms, DBMS and system design."
  }
];

const PROJECTS = [
  {
    title: "AutoApply",
    image: "/projects/autoapply.png",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB", "Groq AI", "Llama 3"],
    description:
      "An AI-powered job application platform that scrapes job postings, runs a research agent to profile target companies, scores resume-job compatibility, and generates personalized cold emails and cover letters to maximize response rates.",
    highlights: [
      "Automated job posting scraper using Puppeteer & Cheerio to extract requirements and skills",
      "AI research agent that gathers company news, goals, and products for hyper-personalized outreach",
      "Resume-to-job match analysis with a 0-100 compatibility score and missing-skill detection",
      "AI-generated cold emails and cover letters referencing real company initiatives",
      "Centralized dashboard to track outreach performance"
    ],
    github: "https://github.com/Vivek-Mehra298/AutoApply",
    live: "https://auto-apply-gilt.vercel.app/",
    visual: "from-[#173b5c] to-[#121143]"
  },
  {
    title: "Real-Time Collaborative Code Editor",
    image: "/projects/code-editor.svg",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Socket.io", "Docker", "JWT"],
    description:
      "Multi-user code editor with real-time sync using Operational Transformation. Features Monaco Editor, sandboxed Docker execution, WebSocket presence awareness.",
    highlights: ["Led 3-member team through planning, delegation, sprint coordination", "Conflict-free concurrent edits via OT algorithm"],
    github: "https://github.com/Vivek-Mehra298/code-collaborative-editot",
    live: "https://code-collaborative-editot-rosy.vercel.app/",
    visual: "from-[#371a5b] to-[#101e51]"
  },
  {
    title: "CRM Web Application",
    image: "/projects/crm-app.svg",
    tags: ["React", "TypeScript", "Firebase", "React Query", "Ant Design", "Vercel"],
    description:
      "Production-deployed CRM for end-to-end lead management across a 4-stage pipeline. Real-time Firestore sync with React Query optimistic updates.",
    highlights: ["TypeScript strict-mode end-to-end", "Real-time KPI propagation across concurrent sessions"],
    github: "https://github.com/Vivek-Mehra298/crm-web",
    live: "https://crm-web-ashy.vercel.app/",
    visual: "from-[#143d45] to-[#17234e]"
  },
  {
    title: "ProScript - AI Writing Tool",
    image: "/projects/proscript.svg",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB Atlas"],
    description: "AI-powered writing assistant tool. Built with Next.js frontend and Express backend connected to MongoDB Atlas.",
    highlights: [
      "A person can input a topic and ProScript generates a well-structured article with an introduction, main points, and conclusion. The generated content is stored in MongoDB Atlas for future reference and can be retrieved or edited by the user.",
      "A person can also upload their informational videos and ProScript will generate a well-structured article based on the content of the video. The generated article is stored in MongoDB Atlas for future reference and can be retrieved or edited by the user."
    ],
    github: "https://github.com/Vivek-Mehra298/Pro-Script",
    live: "https://pro-script.vercel.app/",
    visual: "from-[#3b245d] to-[#10274c]"
  },
  {
    title: "Ecole Globale School Website",
    image: "/projects/school-website.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "Full multi-page institutional website for a girls boarding school in Dehradun. Includes dynamic routing for 8+ pages: Home, About, Admission, Academic, Student Life, Pastoral Care, Career, Latest Updates, Contact.",
    highlights: [
      "SEO-optimized metadata per page",
      "Fully responsive with Next.js Image optimization",
      "Blog-style latest updates section with dynamic routing"
    ],
    github: "https://github.com/Vivek-Mehra298/school-web",
    live: "https://school-web-livid-rho.vercel.app/",
    visual: "from-[#1d3b62] to-[#28184f]"
  }
] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }
} as const;

function Eyebrow({ children, centered = false, lime = false }: { children: React.ReactNode; centered?: boolean; lime?: boolean }) {
  return (
    <span
      className={`flex items-center gap-[9px] font-mono text-[.73rem] font-medium uppercase tracking-[.11em] ${
        centered ? "justify-center" : ""
      } ${lime ? "text-lime" : "text-cyan"}`}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="break-words rounded bg-[rgba(132,150,223,.1)] px-[7px] py-[5px] font-mono text-[.62rem] text-[#aebce9]">
          {tag}
        </span>
      ))}
    </div>
  );
}

function MiniWindow() {
  return (
    <div className="relative z-[1] h-[150px] translate-y-2.5 -rotate-3 overflow-hidden rounded-[7px] border border-white/20 bg-[rgba(5,10,31,.69)] shadow-[0_12px_25px_rgba(0,0,0,.25)] max-[420px]:h-[130px]">
      <div className="flex h-6 gap-1 border-b border-white/10 px-2.5 py-2">
        <span className="h-[5px] w-[5px] rounded-full bg-[#6c78a4]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#6c78a4]" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#6c78a4]" />
      </div>
      <div className="grid h-[125px] grid-cols-[70px_1fr] max-[420px]:h-[105px] max-[420px]:grid-cols-[52px_1fr]">
        <div className="border-r border-white/10 px-[7px] py-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="mb-[7px] h-1 rounded bg-[#354576]" />
          ))}
        </div>
        <div className="p-3.5 max-[420px]:p-3">
          <div className="mb-[7px] h-1 w-[65%] rounded bg-[#b27dff]" />
          <div className="mb-[7px] h-1 w-[78%] rounded bg-[#5ce9fa]" />
          <div className="mb-[7px] ml-3 h-1 w-[43%] rounded bg-[#7fe48d]" />
          <div className="mb-[7px] h-1 w-[85%] rounded bg-[#354576]" />
          <div className="ml-3 h-1 w-[54%] rounded bg-[#ffba77]" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const modalProject = selectedProject === null ? null : PROJECTS[selectedProject];

  return (
    <>
      <div className="grid-bg" />
      <motion.div
        className="pointer-events-none fixed -left-[215px] -top-[215px] z-[-1] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(60,221,255,.10),transparent_65%)]"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: "tween", duration: 0.1, ease: "linear" }}
      />

      <header className="mx-auto w-[min(1160px,calc(100%-48px))] max-[760px]:w-[min(100%-34px,1160px)] max-[420px]:w-[calc(100%-24px)]">
        <nav className="relative z-30 flex h-[78px] items-center justify-between max-[760px]:h-[68px]">
          <a href="#home" className="font-mono text-[1.08rem] font-bold tracking-[-.08em] text-white">
            vivek<span className="text-cyan">.</span>dev
          </a>
          <button
            className="hidden cursor-pointer border-0 bg-transparent text-white max-[760px]:block"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <Menu />
          </button>
          <div
            className={`flex items-center gap-[29px] text-[.83rem] font-bold text-[#bec8eb] max-[760px]:absolute max-[760px]:left-0 max-[760px]:right-0 max-[760px]:top-[61px] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-4 max-[760px]:rounded-[9px] max-[760px]:border max-[760px]:border-line max-[760px]:bg-[#101735] max-[760px]:p-[18px] max-[420px]:gap-3 max-[420px]:p-4 ${
              menuOpen ? "max-[760px]:flex" : "max-[760px]:hidden"
            }`}
          >
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="transition-colors hover:text-cyan">
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-[7px] border border-cyan/40 px-[15px] py-[9px] text-cyan max-[760px]:text-center"
            >
              Let's talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-78px)] w-[min(1160px,calc(100%-48px))] grid-cols-[1.2fr_.8fr] items-center gap-9 px-0 pb-20 pt-[55px] max-[760px]:min-h-0 max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:grid-cols-1 max-[760px]:pb-[55px] max-[760px]:pt-[54px] max-[420px]:w-[calc(100%-24px)] max-[420px]:gap-5 max-[420px]:pb-11 max-[420px]:pt-8"
        >
          <motion.div {...reveal} className="relative z-[2]">
            <div className="inline-flex items-center gap-[9px] rounded-[40px] border border-lime/20 bg-[rgba(141,255,94,.08)] px-3 py-[7px] font-mono text-[.7rem] text-[#baf78a]">
              <span className="h-[7px] w-[7px] animate-pingSoft rounded-full bg-lime shadow-[0_0_0_0_rgba(184,255,105,.6)]" />
              Available for opportunities
            </div>
            <h1 className="my-[22px] max-w-[780px] break-words text-[clamp(3rem,7.1vw,6.3rem)] font-extrabold leading-[.94] tracking-[-.085em] max-[760px]:text-[clamp(2.7rem,12vw,4.6rem)] max-[420px]:my-4 max-[420px]:text-[2.55rem]">
              Engineering ideas into <span className="gradient-text">impactful</span> digital products.
            </h1>
            <p className="max-w-[600px] text-[1.08rem] leading-[1.75] text-muted max-[420px]:text-[.98rem] max-[420px]:leading-[1.7]">
              I'm <strong className="text-[#e9edff]">Vivek Dehariya</strong>, a software engineer focused on crafting scalable, intuitive web applications -
              from real-time collaborative tools to AI-powered automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-[13px] max-[420px]:mt-6 max-[420px]:grid max-[420px]:grid-cols-1">
              <motion.a
                href="#work"
                whileHover={{ y: -3 }}
                className="inline-flex cursor-pointer items-center justify-center gap-[9px] rounded-[7px] border border-transparent bg-cyan px-[19px] py-[13px] text-[.84rem] font-extrabold text-[#061021] shadow-[0_8px_28px_rgba(66,221,255,.2)] transition-shadow hover:shadow-[0_12px_35px_rgba(66,221,255,.35)] max-[420px]:w-full"
              >
                Explore my work <ArrowDownRight size={17} />
              </motion.a>
              <motion.a
                href="mailto:vivekdehariya298@gmail.com"
                whileHover={{ y: -3 }}
                className="inline-flex cursor-pointer items-center justify-center gap-[9px] rounded-[7px] border border-line bg-white/[.025] px-[19px] py-[13px] text-[.84rem] font-extrabold text-white transition-colors hover:border-cyan/60 hover:bg-cyan/10 max-[420px]:w-full"
              >
                <Mail size={16} /> Get in touch
              </motion.a>
            </div>
            <div className="mt-[55px] grid grid-cols-3 gap-[29px] max-[760px]:mt-[35px] max-[760px]:gap-[18px] max-[520px]:grid-cols-1 max-[520px]:gap-4">
              {[
                ["BASED IN", "Chhindwara, India"],
                ["FOCUS", "Full-stack & AI"],
                ["STUDYING AT", "JEC, Jabalpur"]
              ].map(([label, value]) => (
                <div key={label} className="min-w-0 font-mono text-[.68rem] text-[#8490bd] max-[760px]:text-[.6rem] max-[520px]:border-l max-[520px]:border-line max-[520px]:pl-3">
                  {label}
                  <strong className="mt-[3px] block break-words font-sans text-[.83rem] font-bold text-[#dce4ff]">{value}</strong>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative flex min-h-[495px] items-center justify-center max-[760px]:order-[-1] max-[760px]:min-h-[360px] max-[420px]:min-h-[315px]"
          >
            <div className="h-[360px] w-[360px] animate-float rounded-full bg-[radial-gradient(circle_at_32%_26%,rgba(86,238,255,.9),rgba(89,79,255,.58)_29%,rgba(42,20,103,.14)_68%,transparent_70%)] opacity-80 blur-[.2px] max-[760px]:h-[275px] max-[760px]:w-[275px] max-[420px]:h-[235px] max-[420px]:w-[235px]" />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              className="absolute w-[min(370px,94%)] overflow-hidden rounded-[11px] border border-[rgba(173,195,255,.22)] bg-[rgba(8,14,40,.76)] shadow-[0_25px_70px_rgba(0,0,0,.38)] backdrop-blur-[15px] max-[760px]:w-[330px] max-[420px]:w-[min(100%,304px)]"
            >
              <div className="flex h-10 items-center gap-1.5 border-b border-line px-3.5 font-mono text-[.65rem] text-[#aeb9e0]">
                <span className="h-2 w-2 rounded-full bg-[#ff6681]" />
                <span className="h-2 w-2 rounded-full bg-[#ffcb6b]" />
                <span className="h-2 w-2 rounded-full bg-[#6fe29b]" />
                <span className="ml-2 text-[#6978a8]">vivek.tsx</span>
              </div>
              <pre className="m-0 overflow-hidden p-5 font-mono text-[.71rem] leading-[1.8] text-[#ccd5fb] max-[420px]:p-4 max-[420px]:text-[.58rem] max-[420px]:leading-[1.75]">
                <span className="text-[#ca9cff]">const</span> <span className="text-[#61e4ff]">engineer</span> = {"{\n"}
                {"  "}name: <span className="text-[#9df2a3]">"Vivek Dehariya"</span>,{"\n"}
                {"  "}role: <span className="text-[#9df2a3]">"Software Engineer"</span>,{"\n"}
                {"  "}stack: [<span className="text-[#9df2a3]">"Next.js"</span>, <span className="text-[#9df2a3]">"Node.js"</span>,{"\n"}
                {"          "}
                <span className="text-[#9df2a3]">"TypeScript"</span>],{"\n"}
                {"  "}passion: <span className="text-[#ffbd7b]">"building the future"</span>
                {"\n};\n\n"}
                <span className="text-[#ca9cff]">export default</span> engineer;
              </pre>
            </motion.div>
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              className="absolute right-[-5px] top-[31px] flex items-center gap-[9px] rounded-lg border border-line bg-[#121a3e] px-3 py-2.5 text-[.7rem] font-extrabold shadow-[0_12px_35px_rgba(0,0,0,.26)] max-[760px]:right-2 max-[760px]:top-6 max-[420px]:right-0 max-[420px]:top-3 max-[420px]:px-2.5 max-[420px]:py-2 max-[420px]:text-[.62rem]"
            >
              <Sparkles className="h-[17px] w-[17px] text-cyan" /> AI & Automation
            </motion.div>
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              className="absolute bottom-[37px] left-[-12px] flex items-center gap-[9px] rounded-lg border border-line bg-[#121a3e] px-3 py-2.5 text-[.7rem] font-extrabold shadow-[0_12px_35px_rgba(0,0,0,.26)] max-[760px]:left-2 max-[420px]:bottom-4 max-[420px]:left-0 max-[420px]:px-2.5 max-[420px]:py-2 max-[420px]:text-[.62rem]"
            >
              <Layers3 className="h-[17px] w-[17px] text-cyan" /> Full-stack Builder
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          {...reveal}
          id="about"
          className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-4 border-y border-line max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:grid-cols-2 max-[420px]:w-[calc(100%-24px)]"
        >
          {[
            ["2+", "Production Projects"],
            ["6+", "Core Technologies"],
            ["1200", "Chess.com Rating"],
            ["2026", "B.Tech Graduate"]
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`min-w-0 border-r border-line px-6 py-[29px] max-[760px]:px-3.5 max-[760px]:py-5 max-[420px]:px-3 ${
                index === 3 ? "border-r-0" : ""
              } ${index === 1 ? "max-[760px]:border-r-0" : ""} ${index < 2 ? "max-[760px]:border-b max-[760px]:border-line" : ""}`}
            >
              <b className="block text-[1.8rem] font-bold tracking-[-.06em] max-[420px]:text-[1.45rem]">{value}</b>
              <span className="break-words font-mono text-[.68rem] uppercase text-muted max-[420px]:text-[.56rem]">{label}</span>
            </div>
          ))}
        </motion.section>

        <section id="skills" className="relative mx-auto w-[min(1160px,calc(100%-48px))] py-[116px] max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:py-[78px] max-[420px]:w-[calc(100%-24px)] max-[420px]:py-16">
          <motion.div {...reveal} className="mb-[52px] max-w-[670px]">
            <Eyebrow>Technical expertise</Eyebrow>
            <h2 className="mb-4 mt-3.5 break-words text-[clamp(2rem,4.2vw,3.45rem)] font-extrabold leading-[1.08] tracking-[-.065em] max-[420px]:text-[2rem]">
              Tools to build the <span className="gradient-text">exceptional.</span>
            </h2>
            <p className="m-0 max-w-[580px] text-muted">
              A modern, end-to-end engineering toolkit shaped by a love for clean architecture, seamless experiences, and robust problem solving.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-3.5 max-[760px]:grid-cols-1">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  key={skill.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: Math.min((index % 4) * 0.07, 0.21) }}
                  whileHover={{ y: -7 }}
                className="min-h-[210px] rounded-[10px] border border-line bg-[linear-gradient(140deg,rgba(32,44,95,.42),rgba(12,18,47,.24))] p-[26px] transition-colors hover:border-cyan/50 hover:bg-[rgba(28,45,95,.5)] max-[420px]:min-h-0 max-[420px]:p-5"
                >
                  <div className="grid h-[39px] w-[39px] place-items-center rounded-lg bg-cyan/10 text-cyan">
                    <Icon className="h-[19px] w-[19px]" />
                  </div>
                  <h3 className="mb-[9px] mt-[18px] break-words text-base font-bold">{skill.title}</h3>
                  <p className="m-0 text-[.79rem] leading-[1.7] text-muted">{skill.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="work" className="relative mx-auto w-[min(1160px,calc(100%-48px))] py-[116px] max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:py-[78px] max-[420px]:w-[calc(100%-24px)] max-[420px]:py-16">
          <motion.div {...reveal} className="mb-[52px] max-w-[670px]">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mb-4 mt-3.5 break-words text-[clamp(2rem,4.2vw,3.45rem)] font-extrabold leading-[1.08] tracking-[-.065em] max-[420px]:text-[2rem]">
              Solving real problems with <span className="gradient-text">good code.</span>
            </h2>
            <p className="m-0 max-w-[580px] text-muted">Projects that pair technical depth with practical, human-centered outcomes.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.07 }}
                whileHover={{ y: -7 }}
                className="min-w-0 overflow-hidden rounded-xl border border-line bg-[rgba(15,23,55,.55)] transition-colors hover:border-violet/70"
              >
                <div className={`project-visual relative h-[200px] overflow-hidden bg-gradient-to-br ${project.visual} p-[22px] max-[760px]:h-[180px] max-[420px]:h-[158px] max-[420px]:p-4`}>
                  <MiniWindow />
                </div>
                <div className="p-[25px] max-[420px]:p-5">
                  <div className="flex items-start justify-between gap-[15px]">
                    <h3 className="m-0 min-w-0 break-words text-xl font-bold tracking-[-.04em] max-[420px]:text-[1.08rem]">{project.title}</h3>
                    <button
                      className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-md border-0 bg-transparent p-1 text-cyan hover:text-white"
                      onClick={() => setSelectedProject(index)}
                      aria-label={`View ${project.title} details`}
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  <p className="mb-[17px] mt-[11px] break-words text-[.82rem] leading-[1.7] text-muted max-[420px]:text-[.78rem]">{project.description}</p>
                  <Tags tags={project.tags} />
                  <div className="mt-5 flex flex-wrap gap-2 max-[420px]:grid max-[420px]:grid-cols-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-[7px] border border-line bg-white/[.025] px-3 py-2 text-[.74rem] font-extrabold text-white transition-colors hover:border-cyan/60 hover:bg-cyan/10"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-[7px] border border-cyan/40 bg-cyan/10 px-3 py-2 text-[.74rem] font-extrabold text-cyan transition-colors hover:bg-cyan hover:text-[#061021]"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="relative mx-auto w-[min(1160px,calc(100%-48px))] py-[116px] max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:py-[78px] max-[420px]:w-[calc(100%-24px)] max-[420px]:py-16">
          <motion.div {...reveal} className="mb-[52px] max-w-[670px]">
            <Eyebrow>Journey so far</Eyebrow>
            <h2 className="mb-4 mt-3.5 break-words text-[clamp(2rem,4.2vw,3.45rem)] font-extrabold leading-[1.08] tracking-[-.065em] max-[420px]:text-[2rem]">
              Built through ownership & <span className="gradient-text">curiosity.</span>
            </h2>
          </motion.div>
          <motion.div {...reveal} className="ml-2.5 border-l border-cyan/40 max-[420px]:ml-1.5">
            {[
              [
                "MAY 2025 - JUN 2025",
                "Backend Developer Intern",
                "Skystar Software, Remote",
                "Developed and maintained RESTful APIs in Node.js and Express.js, implemented validated MongoDB CRUD workflows, and collaborated closely with frontend engineers on consistent API contracts."
              ],
              [
                "2025 - PRESENT",
                "Minor Project Lead",
                "Jabalpur Engineering College",
                "Leading a 4-member cross-functional team through planning, sprint coordination and delivery. Presented major project work to an audience of 100+ students and professors."
              ],
              [
                "EXPECTED JULY 2026",
                "B.Tech, Information Technology",
                "Jabalpur Engineering College",
                "Relevant focus: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks and Object-Oriented Programming."
              ]
            ].map(([date, title, place, text], index) => (
              <article key={title} className={`relative pl-9 max-[420px]:pl-6 ${index === 2 ? "pb-0" : "pb-12 max-[420px]:pb-10"}`}>
                <span className="absolute left-[-6px] top-[5px] h-[11px] w-[11px] rounded-full border-2 border-cyan bg-bg" />
                <div className="font-mono text-[.68rem] tracking-[.04em] text-cyan">{date}</div>
                <h3 className="mb-0.5 mt-2 break-words text-[1.2rem] font-bold max-[420px]:text-[1.05rem]">
                  {title} <span className="text-[.9rem] font-medium text-[#8390bb]">· {place}</span>
                </h3>
                <p className="mb-0 mt-[11px] max-w-[720px] break-words text-[.86rem] text-muted max-[420px]:text-[.8rem]">{text}</p>
              </article>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="relative mx-auto w-[min(1160px,calc(100%-48px))] py-[116px] max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:py-[78px] max-[420px]:w-[calc(100%-24px)] max-[420px]:py-16">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[15px] border border-[rgba(132,160,255,.24)] bg-[linear-gradient(110deg,rgba(40,55,129,.55),rgba(52,25,112,.47))] p-[clamp(34px,6vw,72px)] text-center before:absolute before:left-1/2 before:top-[-380px] before:h-[450px] before:w-[450px] before:-translate-x-1/2 before:rounded-full before:bg-cyan/20 before:blur-[70px] max-[760px]:p-[42px_20px] max-[420px]:p-[34px_16px]"
          >
            <div className="relative">
              <Eyebrow centered lime>
                Have a great idea?
              </Eyebrow>
              <h2 className="mx-auto my-3.5 max-w-[700px] break-words text-[clamp(2.1rem,5vw,4rem)] font-extrabold leading-none tracking-[-.07em] max-[420px]:text-[2rem]">
                Let's create something <span className="gradient-text">remarkable.</span>
              </h2>
              <p className="mx-auto mb-[27px] max-w-[540px] text-[#b7c2eb]">
                I'm actively looking for opportunities to learn, contribute, and build meaningful products with ambitious teams.
              </p>
              <div className="flex flex-wrap justify-center gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
                <motion.a
                  href="mailto:vivekdehariya298@gmail.com"
                  whileHover={{ y: -3 }}
                  className="inline-flex min-w-0 cursor-pointer items-center justify-center gap-[9px] overflow-hidden rounded-[7px] border border-transparent bg-cyan px-[19px] py-[13px] text-[.84rem] font-extrabold text-[#061021] shadow-[0_8px_28px_rgba(66,221,255,.2)] transition-shadow hover:shadow-[0_12px_35px_rgba(66,221,255,.35)] max-[420px]:px-3 max-[420px]:text-[.76rem]"
                >
                  <Send className="shrink-0" size={16} /> <span className="min-w-0 break-all">vivekdehariya298@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+917489549709"
                  whileHover={{ y: -3 }}
                  className="inline-flex cursor-pointer items-center justify-center gap-[9px] rounded-[7px] border border-line bg-white/[.025] px-[19px] py-[13px] text-[.84rem] font-extrabold text-white transition-colors hover:border-cyan/60 hover:bg-cyan/10 max-[420px]:px-3 max-[420px]:text-[.76rem]"
                >
                  <Phone size={16} /> +91 74895 49709
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-line py-[27px] font-mono text-[.69rem] text-[#8290b9]">
        <div className="mx-auto flex w-[min(1160px,calc(100%-48px))] justify-between gap-[15px] max-[760px]:w-[min(100%-34px,1160px)] max-[760px]:flex-col max-[420px]:w-[calc(100%-24px)]">
          <span className="break-words">© {new Date().getFullYear()} VIVEK DEHARIYA · DESIGNED & BUILT WITH CARE</span>
          <div className="flex flex-wrap gap-[15px] max-[420px]:gap-x-4 max-[420px]:gap-y-2">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
              GitHub ↗
            </a>
            <a href="mailto:vivekdehariya298@gmail.com" className="hover:text-cyan">
              Email ↗
            </a>
            <a href="#home" className="hover:text-cyan">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[rgba(2,5,16,.78)] p-5 backdrop-blur-lg max-[420px]:p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-h-[calc(100vh-40px)] w-[min(540px,100%)] overflow-y-auto rounded-xl border border-line bg-surfaceSolid p-[30px] max-[420px]:max-h-[calc(100vh-24px)] max-[420px]:p-5"
              initial={{ y: 15 }}
              animate={{ y: 0 }}
              exit={{ y: 15 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modalTitle"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-[15px] top-[15px] cursor-pointer border-0 bg-transparent text-[#b7c2e7]"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X />
              </button>
              <Eyebrow>Project spotlight</Eyebrow>
              <h2 id="modalTitle" className="mb-[9px] mt-0 break-words pt-3 text-2xl font-bold max-[420px]:pr-8 max-[420px]:text-xl">
                {modalProject.title}
              </h2>
              <p className="break-words text-[.9rem] text-muted max-[420px]:text-[.82rem]">{modalProject.description}</p>
              <ul className="list-disc pl-[19px] text-[.84rem] leading-[1.8] text-[#c7d0ec] max-[420px]:text-[.78rem]">
                {modalProject.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="my-[19px]">
                <Tags tags={modalProject.tags} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2 max-[420px]:grid max-[420px]:grid-cols-2">
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[7px] border border-line bg-white/[.025] px-3 py-2 text-[.74rem] font-extrabold text-white transition-colors hover:border-cyan/60 hover:bg-cyan/10"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={modalProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[7px] border border-cyan/40 bg-cyan/10 px-3 py-2 text-[.74rem] font-extrabold text-cyan transition-colors hover:bg-cyan hover:text-[#061021]"
                >
                  <ExternalLink size={15} /> Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
