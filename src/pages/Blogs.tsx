import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Graduated youngest in my class & this is what I took away",
    emoji: "🎓",
    url: "https://open.substack.com/pub/fritzd/p/graduated-youngest-in-my-class-and?",
  },
  {
    title: "What it's like being raised by ms.karen",
    emoji: "🫂",
    url: "https://open.substack.com/pub/fritzd/p/a-message-to-mskaren?",
  },
  {
    title: "What i learned during my semester abroad at tsinghua",
    emoji: "🇨🇳",
    url: "https://open.substack.com/pub/fritzd/p/what-i-learned-during-my-semester?",
  },
  {
    title: "10 lessons from 3 months at an early-stage start up",
    emoji: "🚀",
    url: "https://open.substack.com/pub/fritzd/p/10-lessons-from-3-months-at-an-early?",
  },
  {
    title: "Five life lessons from my first half-marathon",
    emoji: "🏃🏽‍♂️",
    url: "https://open.substack.com/pub/fritzd/p/five-life-lessons-from-my-first-half?",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-6 py-12 md:py-20">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          ← Back
        </Link>

        {/* Blog List */}
        <div className="mt-10">
          <p className="text-xs text-muted-foreground mb-4">My pieces :)</p>
          
          <div className="border-t border-border">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 py-4 border-b border-border hover:opacity-70 transition-opacity group"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium leading-snug">{blog.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{blog.emoji}</p>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
