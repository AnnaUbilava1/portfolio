import { profile } from '../data/profile'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <span className="section-label">About</span>
        <h2>Who I am</h2>
        <p className="section-intro">
          {/* maybe add something here  */}
        </p>
        <div className="about-grid">
          <div className="about-card">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <aside className="about-meta">
            <div className="about-meta-item">
              <span className="about-meta-label">Location</span>
              <span>{profile.location}</span>
            </div>
            <div className="about-meta-item">
              <span className="about-meta-label">Focus</span>
              <span>{profile.title}</span>
            </div>
            <div className="about-meta-item">
              <span className="about-meta-label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
