import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-portrait.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import {
  Mail, Phone, MapPin, ArrowRight, MessageCircle, Megaphone,
  Palette, ClipboardList, Quote, Linkedin, Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AJ Pasco — Virtual Assistant & Social Media Manager" },
      { name: "description", content: "AJ Pasco is a reliable virtual assistant, social media manager, and chat support specialist based in the Philippines." },
      { property: "og:title", content: "AJ Pasco — Virtual Assistant Portfolio" },
      { property: "og:description", content: "Virtual assistance, social media management, content design, and multilingual chat support." },
    ],
  }),
  component: Portfolio,
});

const services = [
  { icon: ClipboardList, title: "General Virtual Assistance", desc: "Administrative support, calendar and inbox management, data entry, and day-to-day operational help." },
  { icon: Megaphone, title: "Social Media Management", desc: "Content planning, scheduling, community engagement across Meta, Instagram, and TikTok." },
  { icon: Palette, title: "Canva Content Design", desc: "On-brand graphics for social posts, promos, and digital marketing campaigns." },
  { icon: MessageCircle, title: "Multilingual Chat Support", desc: "Timely, professional customer responses in English and Filipino across chat platforms." },
];

const experience = [
  {
    role: "Chat Support Specialist",
    company: "Nick Ecommerce",
    period: "Jan 2026 – Jun 2026",
    bullets: [
      "Provided multilingual chat support to customers, resolving inquiries efficiently and maintaining high customer satisfaction.",
      "Assisted with order tracking, product information, payment concerns, and account-related issues.",
      "Managed multiple conversations simultaneously while maintaining accuracy and professionalism.",
      "Escalated complex concerns to the appropriate departments to ensure timely resolution.",
      "Maintained detailed records of customer interactions and support activities.",
      "Contributed to improving customer experience through prompt and effective communication.",
    ],
  },
  {
    role: "Social Media Manager",
    company: "Doventra Productions",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Managed and maintained social media accounts across multiple platforms to increase brand visibility and engagement.",
      "Created and scheduled content using social media management tools to ensure consistent posting.",
      "Designed promotional graphics and marketing materials using Canva.",
      "Responded to messages, comments, and community inquiries to strengthen audience engagement.",
      "Monitored content performance and engagement metrics to support content strategy decisions.",
      "Assisted in developing campaigns that enhanced online presence and audience reach.",
    ],
  },
  {
    role: "Canva Editor Intern",
    company: "ITalk Philippines",
    period: "Jan 2025 – Aug 2025",
    bullets: [
      "Designed educational and promotional graphics using Canva for digital marketing initiatives.",
      "Produced visual content aligned with brand guidelines and campaign objectives.",
      "Collaborated with team members to develop engaging social media materials and presentations.",
      "Edited and enhanced graphic assets to improve visual consistency and quality.",
      "Assisted in organizing design resources and maintaining content libraries.",
      "Supported marketing activities through the creation of creative and audience-focused visual content.",
    ],
  },
];

const works = [
  { img: work1, title: "Brand Visual System", tag: "Canva Design" },
  { img: work2, title: "Instagram Content Calendar", tag: "Social Media" },
  { img: work3, title: "Workflow Optimization", tag: "Admin Support" },
];

const testimonials = [
  {
    quote: "AJ has been an absolute game-changer for our social channels. She brought structure to our calendar, kept content consistent for months, and engaged with our community in a voice that felt authentically ours. Our reach and saves grew steadily under her care.",
    name: "Maria L.", role: "Doventra Productions",
  },
  {
    quote: "Reliable, fast, and incredibly detail-oriented. AJ handled multilingual chat under high volume without losing her warmth — customers consistently mentioned how helpful she was. She also flagged recurring issues that helped us fix product friction.",
    name: "Ken T.", role: "Nick Ecommerce",
  },
  {
    quote: "Her Canva work is consistently on-brand, clean, and quick to turn around. AJ asks the right questions upfront and rarely needs more than one round of revisions. She has become our go-to for promotional graphics and campaign assets.",
    name: "Jamie R.", role: "ITalk Philippines",
  },
  {
    quote: "What I appreciate most about AJ is her ownership. She doesn't wait to be told — she organizes, follows up, and brings small improvements to every workflow she touches. Working with her feels like having a real teammate, not just a contractor.",
    name: "Patricia M.", role: "Independent Client",
  },
  {
    quote: "AJ supported our launch week and kept everything from inbox triage to social replies running smoothly. She's calm under pressure, communicates clearly, and genuinely cares about doing great work. I'd hire her again in a heartbeat.",
    name: "Daniel C.", role: "E-commerce Founder",
  },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-base">aj</span>
      <span className="font-semibold">Pasco<span className="text-primary">.</span></span>
    </a>
  );
}

function Portfolio() {
  return (
    <div id="top" className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#experience" className="hover:text-foreground transition">Experience</a></li>
            <li><a href="#work" className="hover:text-foreground transition">Work</a></li>
            <li><a href="#testimonials" className="hover:text-foreground transition">Testimonials</a></li>
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition">
            Hire me <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> Available for new clients
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              Hi, I'm <span className="text-gradient">AJ Pasco</span> — your next virtual assistant.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Detail-oriented general VA, social media manager, and multilingual chat support helping small businesses stay organized and grow online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition">
                Let's work together <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-accent transition">
                View my work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><div className="font-display text-2xl text-foreground">3+</div>roles delivered</div>
              <div className="h-8 w-px bg-border" />
              <div><div className="font-display text-2xl text-foreground">Cum Laude</div>BSEd graduate</div>
              <div className="h-8 w-px bg-border" />
              <div><div className="font-display text-2xl text-foreground">2</div>languages</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <img src={heroImg} alt="AJ Pasco at work" width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Services</p>
            <h2 className="mt-3 text-4xl md:text-5xl">What I help with</h2>
          </div>
          <p className="max-w-md text-muted-foreground">From inbox zero to social calendars — I handle the work so you can focus on growth.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Experience</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Where I've worked</h2>
          <div className="mt-12 space-y-5">
            {experience.map((e, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 md:p-8 transition hover:shadow-card">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="font-display text-2xl text-primary">0{i + 1}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl">{e.role}</h3>
                      <p className="mt-1 text-muted-foreground">{e.company}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{e.period}</span>
                </div>
                <ul className="mt-5 grid gap-2.5 md:pl-10">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl">Education</h3>
            <p className="mt-2 text-muted-foreground">
              Bachelor of Secondary Education, Major in Social Studies — <span className="text-foreground">Bago City College</span> · Graduated <span className="text-primary font-medium">Cum Laude</span>, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Selected Work</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Recent projects</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {works.map((w) => (
            <article key={w.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={w.img} alt={w.title} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">{w.tag}</p>
                <h3 className="mt-2 text-xl">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-warm border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Kind words from clients</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Let's build something organized together.</h2>
            <p className="mt-4 text-muted-foreground">Have a project, an inbox to tame, or content to plan? Send a note — I usually reply within a day.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><a href="mailto:pascoaianjoi@gmail.com" className="hover:text-primary">pascoaianjoi@gmail.com</a></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" />+63 956 401 7594</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />Negros Occidental, Philippines</li>
              <li className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-primary" /><a href="https://www.onlinejobs.ph/jobseekers/info/3298570" target="_blank" rel="noreferrer" className="hover:text-primary">OnlineJobs.ph profile</a></li>
            </ul>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:pascoaianjoi@gmail.com"; }} className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-4">
            <div>
              <label className="text-sm font-medium">Your name</label>
              <input required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input required type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium">How can I help?</label>
              <textarea required rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Tell me a bit about your project..." />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AJ Pasco. Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}
