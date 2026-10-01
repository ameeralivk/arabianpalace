import { Link } from 'react-router-dom';
import Brand from '../components/Brand.jsx';
import { ArrowRight, External, Utensils, Star, Headset, Clock, Instagram } from '../components/Icons.jsx';
import { RESTAURANT, whatsappFeedbackUrl } from '../config.js';

function ActionCard({ to, href, icon, tone, title, subtitle, trailing }) {
  const content = (
    <>
      <span className={`card__icon card__icon--${tone}`}>{icon}</span>
      <span className="card__text">
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <span className={`card__arrow card__arrow--${tone}`}>{trailing}</span>
    </>
  );
  return href ? (
    <a className="card" href={href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <Link className="card" to={to}>{content}</Link>
  );
}

export default function Landing() {
  return (
    <main className="page page--landing">
      <Brand />

      <section className="welcome">
        <h1>Welcome to {RESTAURANT.name}</h1>
        <p>Experience royal Middle Eastern hospitality &amp; exquisite authentic flavors</p>
      </section>

      <nav className="cards">
        <ActionCard to="/menu" icon={<Utensils />} tone="green" title="View Full Menu" subtitle="Explore all dishes, grills & desserts" trailing={<ArrowRight />} />
        <ActionCard to="/rate" icon={<Star />} tone="gold" title="Rate Your Experience" subtitle="How was your royal feast today?" trailing={<ArrowRight />} />
        <ActionCard href={whatsappFeedbackUrl({ message: 'Hello, I have a concern.' })} icon={<Headset />} tone="green" title="Share a Concern" subtitle="Tell us how we can make your visit perfect" trailing={<External />} />
        <ActionCard href={RESTAURANT.instagramUrl} icon={<Instagram />} tone="insta" title="Follow on Instagram" subtitle="Daily culinary stories & royal recipes" trailing={<External />} />
      </nav>

      <footer className="hours">
        <p><Clock width={20} height={20} /> {RESTAURANT.hours}</p>
        <small>© {RESTAURANT.name}. All rights reserved.</small>
      </footer>
    </main>
  );
}
