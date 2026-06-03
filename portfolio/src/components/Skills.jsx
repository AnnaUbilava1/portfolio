import { skillGroups } from '../data/skills'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <span className="section-label">Skills</span>
        <h2>What I work with</h2>
        <p className="section-intro">
          Technologies and tools I am familiar with
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.category} className="skills-card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>
                    <span className="skills-pill">{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
