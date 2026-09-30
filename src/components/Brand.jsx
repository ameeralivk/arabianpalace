import { Logo } from './Icons.jsx';

export default function Brand() {
  return (
    <header className="brand">
      <div className="brand__row">
        <span>ARABIAN</span>
        <Logo />
        <span>PALACE</span>
      </div>
      <p className="brand__tag">Authentic Arabian flavours, made with love</p>
      <div className="brand__divider"><i /><b>✦</b><i /></div>
    </header>
  );
}
