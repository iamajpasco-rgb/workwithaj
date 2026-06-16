import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/aj-portrait.jpg.asset.json";
import servicesAsset from "@/assets/aj-services.png.asset.json";
import workSmmAsset from "@/assets/work-smm.png.asset.json";
import workChatAsset from "@/assets/work-chat.png.asset.json";
import workDesignAsset from "@/assets/work-design.jpg.asset.json";
import workSchedulingAsset from "@/assets/work-scheduling.png.asset.json";
import workVaAsset from "@/assets/work-va.jpg.asset.json";
import logoCapcut from "@/assets/logo-capcut-new.png.asset.json";
import logoCanva from "@/assets/logo-canva-new.png.asset.json";
import logoMsOffice from "@/assets/logo-msoffice-new.png.asset.json";
import logoChatgpt from "@/assets/logo-chatgpt-new.png.asset.json";
import logoGoLogin from "@/assets/logo-gologin-new.png.asset.json";
import logoGoogleWs from "@/assets/logo-google-workspace.png.asset.json";
import logoLovable from "@/assets/logo-lovable-new.png.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import {
  Mail, Phone, MapPin, ArrowRight, MessageCircle, Share2,
  Briefcase, Inbox, Quote, Linkedin, Send, ChevronDown,
  Headphones, FolderOpen, ClipboardList, Bot,
  Search, Lightbulb, Rocket, BarChart3, TrendingUp,
} from "lucide-react";

const BrandIcon = ({ slug, alt }: { slug: string; alt: string }) => (
  <img src={`https://cdn.simpleicons.org/${slug}`} alt={alt} className="h-7 w-7" loading="lazy" />
);

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
  { tag: "Social Media", title: "Social Media Campaign — Doventra", desc: "End-to-end campaign management including content calendar, Canva graphics, and engagement tracking." },
  { tag: "Chat Support", title: "Multilingual Customer Support", desc: "Handled high-volume support queues for an ecommerce brand with measurable CSAT improvements." },
  { tag: "Design", title: "Promotional Marketing Assets", desc: "Created promotional banners, posters, and social tiles aligned with brand voice and visual identity." },
  { tag: "Operations", title: "Content Scheduling Workflow", desc: "Built a streamlined content scheduling workflow using Meta Business Suite and Buffer." },
  { tag: "Virtual Assistance", title: "Administrative Workflow Setup", desc: "Organized digital records and built repeatable admin workflows that improved operational efficiency." },
];

const testimonials = [
  {
    quote: "Aian has been an absolute game-changer for our social channels. He brought structure to our calendar, kept content consistent for months, and engaged with our community in a voice that felt authentically ours. Our reach and saves grew steadily under his care.",
    name: "Maria L.", role: "Doventra Productions",
  },
  {
    quote: "Reliable, fast, and incredibly detail-oriented. Aian handled multilingual chat under high volume without losing his warmth — customers consistently mentioned how helpful he was. He also flagged recurring issues that helped us fix product friction.",
    name: "Ken T.", role: "Nick Ecommerce",
  },
  {
    quote: "His Canva work is consistently on-brand, clean, and quick to turn around. Aian asks the right questions upfront and rarely needs more than one round of revisions. He has become our go-to for promotional graphics and campaign assets.",
    name: "Jamie R.", role: "ITalk Philippines",
  },
  {
    quote: "What I appreciate most about Aian is his ownership. He doesn't wait to be told — he organizes, follows up, and brings small improvements to every workflow he touches. Working with him feels like having a real teammate, not just a contractor.",
    name: "Patricia M.", role: "Independent Client",
  },
  {
    quote: "Aian supported our launch week and kept everything from inbox triage to social replies running smoothly. He's calm under pressure, communicates clearly, and genuinely cares about doing great work. I'd hire him again in a heartbeat.",
    name: "Daniel C.", role: "E-commerce Founder",
  },
];

const workImages = [workSmmAsset.url, workChatAsset.url, workDesignAsset.url, workSchedulingAsset.url, workVaAsset.url];

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
      <header className="sticky top-0 z-50 bg-background border-b border-border/60">
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
      <section className="relative bg-background border-b border-border overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 md:grid-cols-2">
          <div>
            <div className="h-px w-12 bg-primary" />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Chat Support Operations & Social Media Management Operations
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
              Aian Joi <span className="text-gradient">Pasco</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed">
              Helping businesses save time, stay organized, and grow through virtual assistance, social media management, and customer support.
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
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Book a Discovery Call
              </a>
              <a href="#experience" className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95">
                View My Experience
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative aspect-square w-72 sm:w-80 md:w-[420px] overflow-hidden rounded-full border-4 border-primary ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-soft">
              <img
                src={heroAsset.url}
                alt="AJ Pasco portrait"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <a
          href="#services"
          className="flex flex-col items-center gap-2 pb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-primary"
        >
          <span>Scroll and get to know me</span>
          <ChevronDown className="h-4 w-4" />
        </a>
      </section>



      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Services</p>
          <h2 className="mt-3 text-4xl md:text-5xl">What I can do for you</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-primary/60 rounded-full" />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border-4 border-primary/60 shadow-soft">
                <img
                  src={servicesAsset.url}
                  alt="AJ Pasco"
                  className="h-full w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
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

      {/* Tools & Tech Stack */}
      <section id="tools" className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Tool Stack</p>
            </div>
            <div className="mt-3 h-px w-12 bg-primary" />
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Tools &amp; <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The platforms and tools I use daily to deliver reliable virtual assistance, social media management, and chat support.
            </p>
          </div>

          {[
            {
              category: "Design & Content Creation",
              items: [
                { name: "Canva", logo: logoCanva.url },
                { name: "CapCut", logo: logoCapcut.url },
              ],
            },
            {
              category: "Social Media Management",
              items: [
                { name: "Meta Business Suite", brand: "meta" },
                { name: "Buffer", brand: "buffer" },
                { name: "Facebook Pages", brand: "facebook" },
                { name: "Pinterest", brand: "pinterest" },
              ],
            },
            {
              category: "Communication & Chat Support",
              items: [
                { name: "WhatsApp", brand: "whatsapp" },
                { name: "Gmail", brand: "gmail" },
                { name: "Chat Support Platforms", icon: Headphones },
              ],
            },
            {
              category: "Productivity & Office",
              items: [
                { name: "Google Workspace", logo: logoGoogleWs.url },
                { name: "Microsoft Office", logo: logoMsOffice.url },
                { name: "Notion", brand: "notion" },
              ],
            },
            {
              category: "AI Tools",
              items: [
                { name: "ChatGPT", logo: logoChatgpt.url },
                { name: "Claude", brand: "claude" },
                { name: "Gemini", brand: "googlegemini" },
                { name: "Lovable", logo: logoLovable.url },
              ],
            },
            {
              category: "Utilities & Operations",
              items: [
                { name: "Go Login", logo: logoGoLogin.url },
                { name: "File Management", icon: FolderOpen },
                { name: "Administrative Support", icon: ClipboardList },
              ],
            },
          ].map((group, gi) => (
            <Reveal key={group.category} delay={gi * 80} className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{group.category}</p>
              <div className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                      {"logo" in item && item.logo ? (
                        <img src={item.logo} alt={item.name} className="h-10 w-10 object-contain" loading="lazy" />
                      ) : "brand" in item && item.brand ? (
                        <BrandIcon slug={item.brand} alt={item.name} />
                      ) : "icon" in item && item.icon ? (
                        <item.icon className="h-6 w-6" />
                      ) : null}
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Previous Works</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Selected projects &amp; highlights</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-primary/60 rounded-full" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {works.map((w, i) => {
            const start = i === 3 ? "lg:col-start-2" : i === 4 ? "lg:col-start-4" : "";
            return (
            <Reveal key={w.title} delay={i * 100} className={`lg:col-span-2 ${start}`}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft cursor-pointer active:scale-[0.98]">
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary border-4 border-primary/60">
                  <img
                    src={workImages[i]}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">{w.tag}</span>
                  <h3 className="mt-3 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </section>


      {/* My Process */}
      <section id="process" className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">My Process</p>
          <div className="mt-3 h-px w-12 bg-primary" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">How I Deliver</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Search, num: "01", title: "Analyze & Research", desc: "Conduct market research, competitor analysis, and operational audits to identify opportunities for improvement." },
              { icon: Lightbulb, num: "02", title: "Plan & Prioritize", desc: "Develop structured workflows, content strategies, and administrative systems aligned with business objectives." },
              { icon: Rocket, num: "03", title: "Execute & Deliver", desc: "Manage content creation, customer support, website updates, and day to day operational tasks efficiently." },
              { icon: BarChart3, num: "04", title: "Monitor & Improve", desc: "Track performance, organize information, and optimize processes to maintain quality and consistency." },
              { icon: TrendingUp, num: "05", title: "Automate & Scale", desc: "Utilize ChatGPT, Claude, Gemini, Canva, and digital tools to streamline operations and support sustainable growth." },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-sm font-semibold text-primary">{step.num}</div>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section id="track-record" className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Track Record</p>
          <div className="mt-3 h-px w-12 bg-primary" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">Performance Highlights</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bot, stat: "500+", label: "AI assisted tasks completed" },
              { icon: Share2, stat: "100+", label: "Content pieces created" },
              { icon: Briefcase, stat: "50+", label: "Website and digital projects supported" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display text-3xl text-foreground">{s.stat}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Rocket, title: "Optimized", desc: "Business workflows through AI and digital tools" },
              { icon: Headphones, title: "Delivered", desc: "Reliable virtual assistance and customer support" },
              { icon: TrendingUp, title: "Enhanced", desc: "Productivity through research, organization, and automation" },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display text-2xl text-foreground">{s.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-warm border-y border-border">


        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Kind words from clients</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {testimonials.map((t, i) => {
              const start = i === 3 ? "lg:col-start-2" : i === 4 ? "lg:col-start-4" : "";
              return (
              <Reveal key={t.name} delay={i * 90} className={`lg:col-span-2 ${start}`}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft hover:border-primary/30">
                  <Quote className="h-7 w-7 text-primary" />
                  <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
              );
            })}
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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
              const status = form.querySelector<HTMLParagraphElement>('[data-form-status]');
              const fd = new FormData(form);
              if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }
              try {
                const res = await fetch("https://formsubmit.co/ajax/pascoaianjoi@gmail.com", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({
                    name: fd.get("name"),
                    email: fd.get("email"),
                    message: fd.get("message"),
                    _subject: `New message from ${fd.get("name")} — Portfolio contact`,
                    _template: "table",
                    _captcha: "false",
                  }),
                });
                if (!res.ok) throw new Error("send failed");
                if (status) { status.textContent = "Thanks! Your message was sent."; status.className = "text-sm text-primary"; }
                form.reset();
              } catch {
                if (status) { status.textContent = "Could not send. Please email pascoaianjoi@gmail.com directly."; status.className = "text-sm text-destructive"; }
              } finally {
                if (btn) { btn.disabled = false; btn.innerHTML = ""; btn.append("Send message"); }
              }
            }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-4"
          >
            <div>
              <label className="text-sm font-medium">Your name</label>
              <input name="name" required className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input name="email" required type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium">How can I help?</label>
              <textarea name="message" required rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Tell me a bit about your project..." />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition">
              Send message <Send className="h-4 w-4" />
            </button>
            <p data-form-status className="text-sm text-muted-foreground" />
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
