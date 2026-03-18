import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Graduated youngest in my class & this is what I took away",
    emoji: "🎓",
    internalUrl: "/blogs/graduated-youngest",
  },
  {
    title: "What it's like being raised by ms.karen",
    emoji: "🫂",
    internalUrl: "/blogs/ms-karen",
  },
  {
    title: "What i learned during my semester abroad at tsinghua",
    emoji: "🇨🇳",
    externalUrl: "https://open.substack.com/pub/fritzd/p/what-i-learned-during-my-semester?",
  },
  {
    title: "10 lessons from 3 months at an early-stage start up",
    emoji: "🚀",
    internalUrl: "/blogs/startup-lessons",
  },
  {
    title: "Five life lessons from my first half-marathon",
    emoji: "🏃🏽‍♂️",
    internalUrl: "/blogs/half-marathon",
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
          <a href="https://fritzd.substack.com/subscribe" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground mb-4 block hover:opacity-70 transition-opacity">Subscribe</a>
          
          <div className="border-t border-border">
            {blogs.map((blog, index) => {
              const content = (
                <div className="flex-1 py-4">
                  <h3 className="text-xs font-medium leading-snug">{blog.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{blog.emoji}</p>
                </div>
              );

              if (blog.internalUrl) {
                return (
                  <Link
                    key={index}
                    to={blog.internalUrl}
                    className="block border-b border-border hover:opacity-70 transition-opacity"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={index}
                  href={blog.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 border-b border-border hover:opacity-70 transition-opacity group"
                >
                  {content}
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors py-4">↗</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
