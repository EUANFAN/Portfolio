import { useState, useEffect } from 'react'
import profileData from './data/profile.json'
import {
  Code, Brain, Building2, Github, Linkedin, Mail,
  Sun, Moon, ExternalLink, Check, ChevronLeft, ChevronRight,
  MapPin, Phone, Wechat
} from 'lucide-react'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] theme-transition">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full glass hover:scale-110 transition-transform"
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Hero Section */}
      <Hero data={profileData} />

      {/* About Section */}
      <About data={profileData} />

      {/* Experience Section */}
      <Experience data={profileData} />

      {/* Projects Section */}
      <Projects data={profileData} />

      {/* Skills Section */}
      <Skills data={profileData} />

      {/* Contact Section */}
      <Contact data={profileData} />
    </div>
  )
}

function Hero({ data }) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Photo */}
        <div className="mb-8">
          <img
            src={data.heroImage}
            alt={data.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[var(--accent)] shadow-lg"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.name}</h1>
        <p className="text-xl text-[var(--text-muted)] mb-2">{data.nameChinese}</p>
        <p className="text-2xl font-semibold text-[var(--accent)] mb-4">{data.title}</p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] mb-6">
          <MapPin size={16} />
          <span>{data.location}</span>
        </div>

        {/* Visa */}
        <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-medium mb-6">
          {data.heroVisa}
        </div>

        {/* Subline */}
        <p className="text-lg text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
          {data.heroSubline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {data.heroTechStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#experience" className="block text-current animate-bounce" aria-label="Scroll to Experience">
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}

function About({ data }) {
  return (
    <section id="experience" className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        {/* Intro */}
        <p className="text-lg text-[var(--text-muted)] mb-8 text-center max-w-2xl mx-auto">
          {data.aboutIntro}
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {data.aboutHighlights.map((item, i) => (
            <div key={i} className="p-6 rounded-xl glass">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-soft)] flex items-center justify-center mb-4">
                {item.icon === 'code' && <Code className="text-[var(--accent)]" />}
                {item.icon === 'brain' && <Brain className="text-[var(--accent)]" />}
                {item.icon === 'building-2' && <Building2 className="text-[var(--accent)]" />}
              </div>
              <p className="text-[var(--text-muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
          <ul className="space-y-2">
            {data.keyStrengths.map((strength, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check size={16} className="text-[var(--accent)]" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Highlights */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Impact Highlights</h3>
          <ul className="space-y-2">
            {data.impactHighlights.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check size={16} className="text-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a href="#projects" className="block text-current animate-bounce mt-12 text-center" aria-label="Scroll to Projects">
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}

function Experience({ data }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-8">
          {data.experienceList.map((exp, i) => (
            <div key={i} className="p-6 rounded-xl glass">
              <div className="flex items-start gap-4 mb-4">
                {exp.companyLogo && (
                  <img src={exp.companyLogo} alt={exp.company} className="w-12 h-12 rounded-lg object-contain bg-white" />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline flex items-center gap-1">
                    {exp.company} <ExternalLink size={14} />
                  </a>
                  <p className="text-sm text-[var(--text-muted)]">{exp.period}</p>
                </div>
              </div>

              {exp.companyBrief && (
                <p className="text-[var(--text-muted)] mb-4">{exp.companyBrief}</p>
              )}

              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, j) => (
                  <li key={j} className="text-[var(--text-muted)] pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[var(--accent)]"></span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, k) => (
                  <span key={k} className="px-2 py-1 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a href="#projects" className="block text-current animate-bounce mt-12 text-center" aria-label="Scroll to Projects">
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}

function Projects({ data }) {
  return (
    <section id="projects" className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="space-y-16">
          {data.projectList.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <a href="#skills" className="block text-current animate-bounce mt-12 text-center" aria-label="Scroll to Skills">
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const screenshots = project.screenshots || []
  const hasMultipleSlides = screenshots.length > 1

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="p-6 rounded-xl glass">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="px-2 py-1 text-xs rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
          {project.type}
        </span>
      </div>

      {/* Screenshot Carousel */}
      {screenshots.length > 0 && (
        <div className="relative mb-6">
          <div className={`relative ${project.type === 'mobile' ? 'max-w-xs mx-auto' : ''}`}>
            <img
              src={screenshots[currentSlide]}
              alt={`${project.title} screenshot ${currentSlide + 1}`}
              className="w-full rounded-lg"
            />

            {hasMultipleSlides && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--accent-soft)]"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-[var(--accent-soft)]"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {hasMultipleSlides && (
            <div className="flex justify-center gap-2 mt-4">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentSlide ? 'bg-[var(--accent)]' : 'bg-[var(--text-muted)] opacity-40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Project Details */}
      {project.background && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Background</h4>
          <p className="text-[var(--text-muted)]">{project.background}</p>
        </div>
      )}

      {project.role && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Role</h4>
          <p className="text-[var(--text-muted)]">{project.role}</p>
        </div>
      )}

      {project.outcomes && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Outcomes</h4>
          <ul className="space-y-1">
            {project.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-center gap-2 text-[var(--text-muted)]">
                <Check size={14} className="text-[var(--accent)]" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.results && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Results</h4>
          <ul className="space-y-1">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-center gap-2 text-[var(--text-muted)]">
                <Check size={14} className="text-[var(--accent)]" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.techStack && (
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)]">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function Skills({ data }) {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="space-y-8">
          {data.skillsGroups.map((group, i) => (
            <div key={i} className="p-6 rounded-xl glass">
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => {
                  const color = data.skillColors[skill]
                  return (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-full text-sm font-medium transition-transform hover:scale-105"
                      style={{
                        backgroundColor: color ? `${color}20` : 'var(--bg-secondary)',
                        color: color || 'var(--text-muted)',
                        border: color ? `1px solid ${color}40` : 'none'
                      }}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="block text-current animate-bounce mt-12 text-center" aria-label="Scroll to Contact">
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}

function Contact({ data }) {
  return (
    <section id="contact" className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:scale-105 transition-transform"
            aria-label="GitHub"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:scale-105 transition-transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:scale-105 transition-transform"
            aria-label="Email"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wechat size={16} />
            <span>{data.wechat}</span>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-muted)] text-sm">
            {data.experienceYears} of Experience | {data.location}
          </p>
        </footer>
      </div>
    </section>
  )
}

// Chevron down icon component
function ChevronDown() {
  return (
    <svg className="w-6 h-6 mx-auto text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  )
}

export default App
