import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductTags from "@/components/ProductTags";
import StatsTable from "@/components/StatsTable";
import { ArrowRight, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Index = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [deals, setDeals] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [done, setDone] = useState(false);

  // Swipe state
  const [swipeX, setSwipeX] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const TRACK_WIDTH = 220;
  const THUMB_SIZE = 24;
  const THRESHOLD = TRACK_WIDTH - THUMB_SIZE - 8;

  const canSubmit = email.trim() && (deals || blogs);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!canSubmit) return;
    setSwiping(true);
    startXRef.current = e.clientX - swipeX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!swiping) return;
    const x = Math.max(0, Math.min(e.clientX - startXRef.current, THRESHOLD));
    setSwipeX(x);
  };

  const handlePointerUp = () => {
    if (!swiping) return;
    setSwiping(false);
    if (swipeX >= THRESHOLD * 0.9) {
      setSwipeX(THRESHOLD);
      const existing = JSON.parse(localStorage.getItem("newsletter_subs") || "[]");
      const types: string[] = [];
      if (deals) types.push("deals");
      if (blogs) types.push("blogs");
      existing.push({ email, types, date: new Date().toISOString() });
      localStorage.setItem("newsletter_subs", JSON.stringify(existing));
      setDone(true);
      setTimeout(() => {
        setOpen(false);
        setTimeout(() => {
          setDone(false);
          setEmail("");
          setDeals(false);
          setBlogs(false);
          setSwipeX(0);
        }, 300);
      }, 1800);
    } else {
      setSwipeX(0);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setDone(false);
        setEmail("");
        setDeals(false);
        setBlogs(false);
        setSwipeX(0);
      }, 300);
    }
  };

  const swipeProgress = swipeX / THRESHOLD;

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
                sideOffset={8}
                className="w-[260px] p-0 border-none shadow-[0_4px_24px_rgba(0,0,0,0.08)] bg-background rounded-lg overflow-hidden"
              >
                {done ? (
                  <div className="flex items-center justify-center py-6 animate-fade-in">
                    <p className="text-xs tracking-wide">You're in ✌️</p>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    {/* Content selection */}
                    <div className="px-5 pt-5 pb-3">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-3">Content</p>
                      <label className="flex items-center gap-3 cursor-pointer group mb-2.5">
                        <div
                          className={`w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-all duration-150 ${
                            deals
                              ? "bg-foreground border-foreground"
                              : "border-foreground/20 group-hover:border-foreground/40"
                          }`}
                          onClick={() => setDeals(!deals)}
                        >
                          {deals && <Check className="h-2.5 w-2.5 text-background" strokeWidth={3} />}
                        </div>
                        <span className="text-xs" onClick={() => setDeals(!deals)}>Weekly deals & reads</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-all duration-150 ${
                            blogs
                              ? "bg-foreground border-foreground"
                              : "border-foreground/20 group-hover:border-foreground/40"
                          }`}
                          onClick={() => setBlogs(!blogs)}
                        >
                          {blogs && <Check className="h-2.5 w-2.5 text-background" strokeWidth={3} />}
                        </div>
                        <span className="text-xs" onClick={() => setBlogs(!blogs)}>Occasional written blog</span>
                      </label>
                    </div>

                    <div className="mx-5 h-px bg-foreground/[0.06]" />

                    {/* Email */}
                    <div className="px-5 pt-3 pb-4">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-2.5">Email</p>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs bg-transparent outline-none placeholder:text-muted-foreground/40 pb-3"
                      />

                      {/* Swipe to confirm */}
                      <div
                        ref={trackRef}
                        className="relative h-8 rounded-full overflow-hidden select-none touch-none"
                        style={{
                          background: canSubmit
                            ? `linear-gradient(90deg, hsl(var(--foreground) / ${0.06 + swipeProgress * 0.06}) 0%, hsl(var(--foreground) / ${0.02 + swipeProgress * 0.04}) 100%)`
                            : "hsl(var(--foreground) / 0.03)",
                        }}
                      >
                        <div
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                          style={{ opacity: canSubmit ? 1 - swipeProgress * 1.5 : 0.3 }}
                        >
                          <span className="text-[10px] tracking-wide text-foreground/30">
                            {canSubmit ? "slide to confirm →" : "select content & email"}
                          </span>
                        </div>

                        <div
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                          style={{ opacity: Math.max(0, (swipeProgress - 0.6) * 2.5) }}
                        >
                          <span className="text-[10px] tracking-wide text-foreground/50">confirmed</span>
                        </div>

                        {canSubmit && (
                          <div
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            className="absolute top-1 left-1 h-6 w-6 rounded-full bg-foreground flex items-center justify-center cursor-grab active:cursor-grabbing"
                            style={{
                              transform: `translateX(${swipeX}px)`,
                              transition: swiping ? "none" : "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                              boxShadow: swiping
                                ? "0 2px 8px rgba(0,0,0,0.15)"
                                : "0 1px 4px rgba(0,0,0,0.1)",
                            }}
                          >
                            <ArrowRight className="h-3 w-3 text-background" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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