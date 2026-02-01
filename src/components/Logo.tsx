const Logo = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/3] overflow-hidden">
      {/* Video/Image background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/80 via-yellow-500/60 to-amber-700/70">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop"
          alt="Sports crowd"
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
      </div>
      
      {/* Black diagonal lines forming abstract logo */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Thick black diagonal lines */}
        <line x1="120" y1="-20" x2="200" y2="320" stroke="black" strokeWidth="28" />
        <line x1="200" y1="-20" x2="280" y2="320" stroke="black" strokeWidth="28" />
        <line x1="280" y1="-20" x2="360" y2="320" stroke="black" strokeWidth="28" />
        <line x1="40" y1="-20" x2="120" y2="320" stroke="black" strokeWidth="28" />
      </svg>
    </div>
  );
};

export default Logo;
