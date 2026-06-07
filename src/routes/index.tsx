import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/aj-portrait.jpg.asset.json";
import work1Asset from "@/assets/work-spreadsheet.jpg.asset.json";
import work2Asset from "@/assets/work-social.png.asset.json";
import work3Asset from "@/assets/work-canva.png.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import {
  Mail, Phone, MapPin, ArrowRight, MessageCircle, Share2,
  Briefcase, Inbox, Quote, Linkedin, Send, ChevronDown,
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
  { icon: Briefcase, title: "General Virtual Assistance", desc: "Administrative support, file organization, data entry, scheduling, and day-to-day task management to keep your business running smoothly." },
  { icon: Share2, title: "Social Media Management", desc: "Content creation, scheduling, audience engagement, and performance monitoring across Facebook, Instagram, and more." },
  { icon: MessageCircle, title: "Chat Support", desc: "Multilingual customer chat support — order tracking, product inquiries, payment concerns, and account assistance." },
  { icon: Inbox, title: "Email & Inbox Management", desc: "Manage emails, organize inboxes, respond to customer inquiries, schedule follow ups, and maintain clear communication to keep daily operations running efficiently." },
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
  { img: work3Asset.url, title: "Brand Visual System", tag: "Canva Design" },
  { img: work2Asset.url, title: "Detailed Management Operations", tag: "Social Media" },
  { img: work1Asset.url, title: "Workflow Optimization", tag: "Admin Support" },
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
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#experience" className="hover:text-foreground transition">Experience</a></li>
            <li><a href="#work" className="hover:text-foreground transition">Work</a></li>
            <li><a href="#testimonials" className="hover:text-foreground transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Hire me <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-warm border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-0 px-0 md:grid-cols-5">
          <div className="md:col-span-3 bg-card px-8 py-16 md:px-14 md:py-24 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Hi there!
            </p>
            <h1 className="mt-3 text-5xl leading-[1.05] md:text-7xl">
              I'm <span className="text-gradient">AJ Pasco</span>
            </h1>
            <div className="mt-5 inline-block self-start rounded-sm bg-primary px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                Chat Support Operations & Social Media Management Operations
              </span>
            </div>
            <p className="mt-7 max-w-lg text-base text-muted-foreground leading-relaxed">
              Detail-oriented general VA, social media manager, and multilingual chat support helping small businesses stay organized and grow online.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["General VA", "Social Media", "Canva Design", "Chat Support"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/40 bg-background px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                More about me <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#experience" className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95">
                View my experience
              </a>
            </div>
          </div>
          <div className="md:col-span-2 relative min-h-[360px] md:min-h-[560px]">
            <img
              src={heroAsset.url}
              alt="AJ Pasco portrait"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <a
          href="#services"
          className="flex flex-col items-center gap-2 py-8 text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-primary"
        >
          <span>Scroll and get to know me</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
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
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft hover:border-primary/30 cursor-pointer active:scale-95">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
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
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-soft hover:border-primary/30 hover:-translate-y-1">
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
              </Reveal>
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
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft cursor-pointer active:scale-[0.98]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={w.img} alt={w.title} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-primary">{w.tag}</p>
                  <h3 className="mt-2 text-xl">{w.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-warm border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Kind words from clients</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft hover:border-primary/30">
                  <Quote className="h-7 w-7 text-primary" />
                  <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
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
