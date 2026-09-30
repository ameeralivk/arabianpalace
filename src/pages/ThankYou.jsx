import { Link, useLocation } from 'react-router-dom';
import Brand from '../components/Brand.jsx';
import { Check, Star, Instagram } from '../components/Icons.jsx';
import { RESTAURANT } from '../config.js';

export default function ThankYou() {
  const { state } = useLocation();
  const name = state?.name;
  const rating = state?.rating ?? 5;

  return (
    <main className="page page--thanks">
      <Brand />
      <div className="thanks__badge"><Check width={44} height={44} /></div>
      <h1>Thank you{name ? `, ${name}` : ''}!</h1>
      <p className="thanks__msg">Your feedback has been received. We're grateful you chose to dine with us at {RESTAURANT.name}.</p>
      <div className="thanks__stars">
        {[1, 2, 3, 4, 5].map((n) => <Star key={n} width={26} height={26} filled={n <= rating} />)}
      </div>
      <div className="thanks__actions">
        <Link className="submit" to="/">Back to Home</Link>
        <a className="ghost" href={RESTAURANT.instagramUrl} target="_blank" rel="noreferrer"><Instagram width={20} height={20} /> Follow on Instagram</a>
      </div>
    </main>
  );
}
