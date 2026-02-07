import { Link } from "react-router-dom";
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
          {/* Bio */}
          <p className="text-xs leading-relaxed">
            <span className="font-semibold">Fritz Dutz.</span> 21 years old. Currently Visiting Investor @ NAP.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            NAP is a Berlin-based pre-seed & seed VC investing €1–4m in enterprise tech across Europe - often pre-product, pre-revenue.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            Previously worked heavily on the Operator side, with stints at Enpal, Colonia & Investa and studied at both the EBS Universität für Wirtschaft & Recht, as well as Tsinghua University in Beijing.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            Roots in Germany & Thailand, but raised in Ho Chi Minh City. Born a total foodie, I document what I eat @pantrybyfritz on Instagram.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            Best place to reach me is under my email fritz@nap.vc. Open to collaboration of any sort.
          </p>

          {/* Links */}
          <div className="flex items-center gap-2 text-xs">
            <a 
              href="https://www.linkedin.com/in/frederick-dutz/" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Experience
            </a>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/blogs"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Blogs
               </Link>
    href="https://x.com/fritz_dutz"
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-4 hover:opacity-70 transition-opacity"
  >
    X
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
