import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductTags from "@/components/ProductTags";
import StatsTable from "@/components/StatsTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`https://fritzd.substack.com/subscribe?email=${encodeURIComponent(email)}`, "_blank");
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

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
            I also send out weekly newsletters with deals & reads I come across. If that interests you, subscribe{" "}
            <button
              onClick={() => setOpen(true)}
              className="font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              here
            </button>
            .
          </p>

          {/* Links */}
          <div className="flex items-center gap-2 text-xs">
            <Link 
              to="/experience"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Experience
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/blogs"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Writing
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/consumption"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Consuming
            </Link>
            <span className="text-muted-foreground">•</span>
            <a 
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

      {/* Subscribe Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-sm font-semibold">Subscribe</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Get weekly deals & reads straight to your inbox.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <p className="text-xs text-center py-4">Redirecting to Substack — thanks! ✌️</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-xs h-8"
              />
              <Button type="submit" size="sm" className="text-xs h-8 px-4">
                Go
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
