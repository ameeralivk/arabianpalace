const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const ArrowRight = (p) => <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ArrowLeft = (p) => <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
export const External = (p) => <svg {...base} {...p}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>;
export const Utensils = (p) => <svg {...base} {...p}><path d="M4 3l16 16M20 3L4 19M8 3c-2 2-2 5 0 7l2-2" /></svg>;
export const Star = ({ filled = true, ...p }) => (
  <svg {...base} {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
);
export const Headset = (p) => <svg {...base} {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3zM17 19c0 1.5-2 2-5 2" /></svg>;
export const Clock = (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
export const User = (p) => <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6z" /></svg>;
export const Pin = (p) => <svg {...base} {...p}><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>;
export const Check = (p) => <svg {...base} {...p}><path d="M5 12.5l4.5 4.5L19 7" /></svg>;
export const Instagram = (p) => <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>;
export const Logo = (p) => <svg viewBox="0 0 64 64" width="60" height="44" {...p}><path d="M32 2c3 12 8 17 20 20-12 3-17 8-20 20-3-12-8-17-20-20 12-3 17-8 20-20z" fill="currentColor" /><path d="M32 40v22" stroke="currentColor" strokeWidth="4" /></svg>;
