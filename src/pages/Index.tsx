import Logo from "@/components/Logo";
import ProductTags from "@/components/ProductTags";
import StatsTable from "@/components/StatsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        {/* Logo Section */}
        <Logo />

        {/* Content Section */}
        <div className="mt-10 space-y-6">
        {/* Mission Statement */}
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">Oleve</span> is building a family of iconic consumer software products that enable everyone to live a better, more fulfilling, and more productive life.
          </p>

          {/* Description */}
          <p className="text-xs leading-relaxed text-foreground/90">
            We're a small, focused team in NYC who've cracked the code on building and scaling products people actually want. With two products already serving millions of users, we're gearing up to launch several more across different categories in 2025.
          </p>

          {/* Links */}
          <div className="flex items-center gap-2 text-xs">
            <a 
              href="#" 
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Experience
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#" 
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Blogs
            </a>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-12">
          <ProductTags />
        </div>

        {/* Stats Section */}
        <div className="mt-10">
          <StatsTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
