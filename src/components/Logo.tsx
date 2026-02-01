import heroImage from "@/assets/hero-image.png";

const Logo = () => {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <img
        src={heroImage}
        alt="Fritz Dutz"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Logo;
