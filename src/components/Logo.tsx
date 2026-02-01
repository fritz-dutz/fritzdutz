import heroImage from "@/assets/hero-image.png";

const Logo = () => {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      {/* Video/Image background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
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
