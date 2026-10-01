import { Link, useLocation } from 'react-router-dom';
import Brand from '../components/Brand.jsx';
import { Check, Star, Instagram } from '../components/Icons.jsx';
import { RESTAURANT } from '../config.js';

export default function ThankYou() {
  const { state } = useLocation();
  const name = state?.name;
  const rating = state?.rating ?? 5;
  const hasRating = typeof state?.rating === 'number';

  return (
    <main className="page page--thanks">
      <Brand />
      <div className="thanks__badge"><Check width={44} height={44} /></div>
      <h1>Thank you{name ? `, ${name}` : ''}!</h1>
      <p className="thanks__msg">Your feedback has been received. We're grateful you chose to dine with us at {RESTAURANT.name}.</p>
      <div className="thanks__stars">
        {[1, 2, 3, 4, 5].map((n) => <Star key={n} width={26} height={26} filled={n <= rating} />)}
      </div>
      {hasRating && (
        <div className="thanks__cta">
          {rating >= 3 ? (
            <>
              <p>Thank you for your feedback! ❤️<br />Would you mind sharing your experience with us on Google?</p>
            </>
          ) : (
            <>
              <p>We're sorry your experience wasn't perfect. Please tell us what went wrong so we can improve.</p>
            </>
          )}
          <Link className="thanks__change" to="/rate">Change rating</Link>
        </div>
      )}
      <div className="thanks__actions">
        <Link className="submit" to="/">Back to Home</Link>
        <a className="ghost" href={RESTAURANT.instagramUrl} target="_blank" rel="noreferrer"><Instagram width={20} height={20} /> Follow on Instagram</a>
      </div>
    </main>
  );
}
