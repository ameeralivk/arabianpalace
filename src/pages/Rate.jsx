import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star, User, Pin } from '../components/Icons.jsx';
import { RESTAURANT } from '../config.js';

const LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
const TAGS = ['Delicious Food', 'Great Hospitality', 'Authentic Flavors', 'Cozy Ambiance'];
const MAX = 500;

export default function Rate() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [tags, setTags] = useState(['Delicious Food', 'Authentic Flavors']);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const toggleTag = (t) => setTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const feedback = { rating, tags, name: name.trim(), review: review.trim(), createdAt: new Date().toISOString() };
    // TODO: send `feedback` to your backend API here.
    console.log('feedback', feedback);
    navigate('/thank-you', { state: { name: feedback.name, rating } });
  };

  return (
    <main className="page page--rate">
      <div className="topbar">
        <button className="iconbtn" onClick={() => navigate(-1)} aria-label="Back"><ArrowLeft /></button>
      </div>

      <form onSubmit={submit}>
        <h1 className="rate__title">How was your meal?</h1>
        <p className="rate__sub">We'd love to know what you enjoyed most about dining with us at {RESTAURANT.name} today.</p>

        <div className="stars" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button type="button" key={n} className={n <= rating ? 'star on' : 'star'} onClick={() => setRating(n)} aria-label={`${n} star`}>
              <Star filled={n <= rating} width={40} height={40} />
            </button>
          ))}
        </div>
        <p className="rate__label"><span className="dot" /> {LABELS[rating]}</p>

        <h3 className="field__title">What stood out?</h3>
        <div className="chips">
          {TAGS.map((t) => (
            <button type="button" key={t} className={tags.includes(t) ? 'chip on' : 'chip'} onClick={() => toggleTag(t)}>{t}</button>
          ))}
        </div>

        <div className="field__head"><label htmlFor="name">Your name</label><span>Optional</span></div>
        <div className="input">
          <User />
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Tariq Al-Mansoor" />
        </div>

        <div className="field__head"><label htmlFor="review">Share your review</label><span>Optional</span></div>
        <div className="textarea">
          <textarea id="review" maxLength={MAX} value={review} onChange={(e) => setReview(e.target.value)} placeholder="What did you enjoy most? Tell us about the food, flavors, or ambiance..." />
          <em>{review.length} / {MAX}</em>
        </div>

        <div className="ornament"><i /><span><Star width={16} height={16} /></span><i /></div>

        <button className="submit" type="submit" disabled={submitting}>Submit Review <ArrowRight width={20} height={20} /></button>
        <p className="rate__note">Your review helps us share authentic Arabian hospitality</p>
        <p className="rate__addr"><Pin width={18} height={18} /> {RESTAURANT.address}</p>
      </form>
    </main>
  );
}
