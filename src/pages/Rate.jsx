import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Brand from '../components/Brand.jsx';
import { ArrowLeft, ArrowRight, Star, User, Pin } from '../components/Icons.jsx';
import { RESTAURANT, whatsappFeedbackUrl } from '../config.js';

const LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
const FACES = ['', '😞', '😕', '🙂', '😊', '🤩'];
const MAX = 500;

export default function Rate() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const shown = hover || rating;
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [pending, setPending] = useState(null); // { url, kind, state } while the customer is on Google / WhatsApp

  // Show the thank-you page only once the customer has left to Google/WhatsApp and come back.
  useEffect(() => {
    if (!pending) return undefined;
    let left = false;
    const leave = () => { left = true; };
    const back = () => { if (left) navigate('/thank-you', { state: pending.state }); };
    const onVisibility = () => (document.hidden ? leave() : back());
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('blur', leave);
    window.addEventListener('focus', back);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('blur', leave);
      window.removeEventListener('focus', back);
    };
  }, [pending, navigate]);

  const openExternal = (url, kind, state) => {
    setSubmitting(true);
    setPending({ url, kind, state });
    const w = window.open(url, '_blank');
    if (w) w.opener = null;
  };

  // 3-5 stars: go straight to Google. 1-2 stars: reveal the private feedback form.
  const selectRating = (n) => {
    if (submitting) return;
    setRating(n);
    if (n >= 3) {
      openExternal(RESTAURANT.googleReviewUrl, 'google', { rating: n });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!rating || rating > 2 || submitting) return;
    const feedback = { rating, name: name.trim(), review: review.trim(), createdAt: new Date().toISOString() };
    // TODO: send `feedback` to your backend API here.
    console.log('feedback', feedback);
    openExternal(whatsappFeedbackUrl(feedback), 'whatsapp', { name: feedback.name, rating, review: feedback.review });
  };

  return (
    <main className="page page--rate">
      <div className="topbar">
        <button className="iconbtn" onClick={() => navigate(-1)} aria-label="Back"><ArrowLeft /></button>
      </div>

      <Brand />

      {pending ? (
        <section className="rate__wait" role="status">
          <div className="rate__spinner" aria-hidden="true" />
          <h1 className="rate__title">{pending.kind === 'google' ? 'Finish your review on Google' : 'Send your message on WhatsApp'}</h1>
          <p className="rate__sub">Once you're done, come back to this page and we'll show your confirmation.</p>
          <a className="submit" href={pending.url} target="_blank" rel="noopener noreferrer">
            {pending.kind === 'google' ? 'Open Google again' : 'Open WhatsApp again'}
          </a>
        </section>
      ) : (
      <form onSubmit={submit}>
        <h1 className="rate__title">How was your meal?</h1>
        <p className="rate__sub">We'd love to know what you enjoyed most about dining with us at {RESTAURANT.name} today.</p>

        <div className="rate__face" aria-hidden="true">{shown > 0 && <span key={shown}>{FACES[shown]}</span>}</div>
        <div className="stars" role="radiogroup" aria-label="Rating" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              className={n <= shown ? 'star on' : 'star'}
              onClick={() => selectRating(n)}
              onMouseEnter={() => setHover(n)}
              onFocus={() => setHover(n)}
              onBlur={() => setHover(0)}
              aria-label={`${n} star`}
            >
              <Star filled={n <= shown} width={40} height={40} />
            </button>
          ))}
        </div>
        <p className="rate__label" key={`l${shown}`}>{shown > 0 ? <><span className="dot" /> {LABELS[shown]}</> : <span className="rate__hint">Tap a star to rate</span>}</p>

        {rating > 0 && rating <= 2 && (
          <>
        <div className="field__head"><label htmlFor="name">Your name</label><span>Optional</span></div>
        <div className="input">
          <User />
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Tariq Al-Mansoor" />
        </div>

        <div className="field__head"><label htmlFor="review">What went wrong?</label><span>Optional</span></div>
        <div className="textarea">
          <textarea id="review" maxLength={MAX} value={review} onChange={(e) => setReview(e.target.value)} placeholder="Tell us what went wrong so we can improve..." />
          <em>{review.length} / {MAX}</em>
        </div>

        <div className="ornament"><i /><span><Star width={16} height={16} /></span><i /></div>

        <button className="submit" type="submit" disabled={!rating || submitting}>Submit <ArrowRight width={20} height={20} /></button>
          </>
        )}
        <p className="rate__note">Your review helps us share authentic Arabian hospitality</p>
        <p className="rate__addr"><Pin width={18} height={18} /> {RESTAURANT.address}</p>
      </form>
      )}
    </main>
  );
}
