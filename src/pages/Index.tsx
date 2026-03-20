import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductTags from "@/components/ProductTags";
import StatsTable from "@/components/StatsTable";
import { ArrowRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type NewsletterStep = "choose" | "email" | "done";
type NewsletterType = "deals" | "blogs";

const Index = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<NewsletterStep>("choose");
  const [selectedType, setSelectedType] = useState<NewsletterType | null>(null);

  const handleChoose = (type: NewsletterType) => {
    setSelectedType(type);
    setStep("email");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedType) {
      const existing = JSON.parse(localStorage.getItem("newsletter_subs") || "[]");
      existing.push({ email, type: selectedType, date: new Date().toISOString() });
      localStorage.setItem("newsletter_subs", JSON.stringify(existing));
      setStep("done");
      setTimeout(() => {
        setOpen(false);
        setTimeout(() => {
          setStep("choose");
          setSelectedType(null);
          setEmail("");
        }, 300);
      }, 1800);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setStep("choose");
        setSelectedType(null);
        setEmail("");
      }, 300);
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
            <Popover open={open} onOpenChange={handleOpenChange}>
              <PopoverTrigger asChild>
                <button className="font-semibold hover:opacity-70 transition-opacity">
                  here
                </button>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                align="start"
                sideOffset={6}
                className="w-auto p-0 border-none shadow-lg bg-background"
              >
                {step === "choose" && (
                  <div className="flex flex-col animate-fade-in">
                    <button
                      onClick={() => handleChoose("deals")}
                      className="text-xs px-4 py-2 text-left hover:bg-foreground/[0.03] transition-colors"
                    >
                      Weekly deals & reads
                    </button>
                    <div className="h-px bg-border/40" />
                    <button
                      onClick={() => handleChoose("blogs")}
                      className="text-xs px-4 py-2 text-left hover:bg-foreground/[0.03] transition-colors"
                    >
                      Written blogs
                    </button>
                  </div>
                )}
                {step === "email" && (
                  <form onSubmit={handleSubscribe} className="flex items-center animate-fade-in">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                      className="text-xs bg-transparent px-4 py-2 outline-none placeholder:text-muted-foreground/50 w-44"
                    />
                    <button
                      type="submit"
                      className="shrink-0 h-7 w-7 mr-1 flex items-center justify-center rounded-sm bg-foreground text-background hover:opacity-80 active:scale-95 transition-all"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </form>
                )}
                {step === "done" && (
                  <p className="text-xs text-center px-4 py-2 animate-fade-in">
                    You're in ✌️
                  </p>
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
