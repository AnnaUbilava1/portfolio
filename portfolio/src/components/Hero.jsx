import { profile } from '../data/profile'
import './Hero.css'

export default function Hero() {
  const { name, title, tagline, links } = profile

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner section-inner">
        <p className="hero-eyebrow">{title}</p>
        <h1 className="hero-title">
          Hi, I&apos;m <em>{name}</em>
        </h1>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            See projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-links">
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {links.cv && (
            <a href={links.cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
          )}
        </div>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
