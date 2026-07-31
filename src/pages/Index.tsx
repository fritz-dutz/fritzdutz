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
            <span className="font-semibold">Fritz Dutz.</span> 21 years old. Investor @{" "}
            <a
              href="https://targetglobal.vc"
              target="_blank"
              rel="noopener noreferrer"
              className="tg-link"
            >
              Target Global
            </a>
            .
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            Target Global is a global seed & series A VC investing into category defining tech companies.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            Before starting my career in Venture with NAP, I spent time on the operator side at Enpal, Colonia & Investa. Studied at both the EBS Universität für Wirtschaft & Recht and Tsinghua in Beijing.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            Roots in Germany & Thailand, but raised in Ho Chi Minh City. Born a total foodie, I document what I eat <a href="https://www.instagram.com/pantrybyfritz/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">@pantrybyfritz</a> on Instagram.
          </p>

          <p className="text-xs leading-relaxed text-foreground/90">
            I occasionally write longer{" "}
            <a href="https://fritzd.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              blogs
            </a>
            {" "}about all sorts myself. I also host regular events at{" "}
            <a href="https://venture-house.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              home
            </a>
            {" "}with sam & elian.
          </p>

          <div className="flex items-center gap-2 text-xs">
            <Link to="/experience" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Experience
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/writing" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Writing
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/consuming" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Consuming
            </Link>
            <span className="text-muted-foreground">•</span>
            <a href="https://x.com/fritz_dutz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              X
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://github.com/fritz-dutz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
              Git
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
