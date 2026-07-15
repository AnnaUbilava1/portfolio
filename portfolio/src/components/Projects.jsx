import { projects } from '../data/projects'
import './Projects.css'

function ProjectCard({ project }) {
  const { title, bullets, image, tags, links, team } = project
  const hasLive = Boolean(links.live)

  const openLive = () => {
    window.open(links.live, '_blank', 'noopener,noreferrer')
  }

  const handleCardClick = () => {
    if (hasLive) openLive()
  }

  const handleCardKeyDown = (e) => {
    if (!hasLive) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openLive()
    }
  }

  const stopCardNavigation = (e) => e.stopPropagation()

  return (
    <article
      className={`project-card ${project.featured ? 'project-card--featured' : ''} ${hasLive ? 'project-card--clickable' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role={hasLive ? 'link' : undefined}
      tabIndex={hasLive ? 0 : undefined}
      aria-label={hasLive ? `Open live demo: ${title}` : undefined}
    >
      <div className="project-card-accent" aria-hidden="true" />
      <div className="project-card-header">
        <h3>{title}</h3>
        {team && <span className="project-team">{team}</span>}
      </div>
      <ul className="project-bullets">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {image && (
        <div className="project-image">
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        </div>
      )}
      <ul className="project-tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer"
            onClick={stopCardNavigation}
          >
            Live demo →
          </a>
        )}
        {links.repo && (
          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer"
            onClick={stopCardNavigation}
          >
            Source code
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section className="section projects" id="projects">
      <div className="section-inner">
        <span className="section-label">Projects</span>
        <h2>Selected work</h2>
        <p className="section-intro">
          Full-stack and web applications from coursework and team projects.
        </p>

        <div className="projects-grid projects-grid--featured">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="projects-more-title">More projects</h3>
            <div className="projects-grid">
              {other.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
