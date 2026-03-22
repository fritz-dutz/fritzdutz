import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductTags from "@/components/ProductTags";
import StatsTable from "@/components/StatsTable";

const Index = () => {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        <Logo />

        <div className="mt-10 space-y-6">
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
            I also send out a bi-weekly email with curated deals & reads and occasionally write a longer blog. If that interests you, subscribe{" "}
            <a
              href="https://fritzd.notion.site/32aed47507e18010b2b5f19774b713c2?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:opacity-70 transition-opacity"
            >
              here
            </a>
            .
          </p>

          <div className="flex items-center gap-2 text-xs">
            <Link to="/experience" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Experience
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/blogs" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Writing
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/consumption" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Consuming
            </Link>
            <span className="text-muted-foreground">•</span>
            <a href="https://x.com/fritz_dutz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              X
            </a>
          </div>
        </div>

        <div className="mt-12">
          <ProductTags />
        </div>

        <div className="mt-10">
          <StatsTable />
        </div>
      </div>
    </div>
  );
};

export default Index;