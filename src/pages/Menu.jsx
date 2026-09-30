import { Link } from 'react-router-dom';
import Brand from '../components/Brand.jsx';
import { Utensils } from '../components/Icons.jsx';

// Add menu items here later, e.g. { id: 1, name: 'Chicken Mandi', price: 250, category: 'Mandi' }
const ITEMS = [];

export default function Menu() {
  return (
    <main className="page page--menu">
      <Brand />

      <section className="welcome">
        <h1>Our Menu</h1>
        <p>Explore all dishes, grills &amp; desserts</p>
      </section>

      {ITEMS.length === 0 ? (
        <section className="empty">
          <div className="empty__icon"><Utensils width={40} height={40} /></div>
          <h2>No items added</h2>
          <p>Our menu is being prepared. Please check back soon.</p>
          <Link className="submit" to="/">Back to Home</Link>
        </section>
      ) : (
        <ul className="menu__list">
          {ITEMS.map((i) => (
            <li key={i.id}><span>{i.name}</span><b>₹{i.price}</b></li>
          ))}
        </ul>
      )}
    </main>
  );
}
