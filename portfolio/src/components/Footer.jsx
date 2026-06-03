import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {year} {profile.name}. Built with React.
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
