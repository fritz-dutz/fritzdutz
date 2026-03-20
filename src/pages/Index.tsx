import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductTags from "@/components/ProductTags";
import StatsTable from "@/components/StatsTable";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(
        `https://fritzd.substack.com/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setTimeout(() => {
          setSubmitted(false);
          setEmail("");
        }, 300);
      }, 1800);
    }
  };

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
            I also send out weekly newsletters with deals & reads I come across. If that interests you, subscribe{" "}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button className="font-semibold hover:opacity-70 transition-opacity">
                  here
                </button>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                align="start"
                sideOffset={6}
                className="w-56 p-2 border border-border shadow-md"
              >
                {submitted ? (
                  <p className="text-xs text-center py-1 animate-fade-in">
                    You're in ✌️
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-1.5 animate-fade-in">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-xs h-7 border-border/60 focus-visible:ring-1 focus-visible:ring-ring/40"
                    />
                    <button
                      type="submit"
                      className="shrink-0 h-7 w-7 flex items-center justify-center rounded-md bg-foreground text-background hover:opacity-80 active:scale-95 transition-all"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </form>
                )}
              </PopoverContent>
            </Popover>
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
