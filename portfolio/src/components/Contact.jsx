import { profile } from '../data/profile'
import './Contact.css'

export default function Contact() {
  const { email, links } = profile

  return (
    <section className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <span className="section-label">Contact</span>
        <h2>Let&apos;s connect</h2>
        <p className="contact-text">
          Open to opportunities, collaborations, or questions. The fastest way to
          reach me is email — or find me on the links below.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${email}`} className="btn btn-primary">
            {email}
          </a>
          <div className="contact-social">
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
          </div>
        </div>
      </div>
    </section>
  )
}
