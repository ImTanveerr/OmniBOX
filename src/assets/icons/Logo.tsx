export default function Logo({ className = "w-8 h-8 text-primary" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
    >
      {/* Basket */}
      <rect x="8" y="24" width="48" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 24 L24 12 L40 12 L48 24" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Apple */}
      <circle cx="24" cy="34" r="4" fill="red"/>
      <path d="M24 30 L24 32" stroke="green" strokeWidth="1.5"/>
      
      {/* Carrot */}
      <polygon points="40,38 44,30 48,38" fill="orange"/>
      <path d="M44 30 L44 28" stroke="green" strokeWidth="1.5"/>
    </svg>
  );
}
