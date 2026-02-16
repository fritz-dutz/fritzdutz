import { Link } from "react-router-dom";

const experience = [
  {
    company: "NAP",
    url: "https://www.nap.vc/",
    role: "Visiting Analyst",
    description: "Worked hard towards this position",
  },
  {
    company: "Investa Real Estate",
    url: "https://investa.de/",
    role: "Strategy & Ops",
    description: "Worked under Dr. Christian Meine (Balances IQ & EQ like no one else)",
  },
  {
    company: "Enpal",
    url: "https://www.enpal.de/",
    role: "Operations (CGO Office)",
    description: "Worked under Julius (YC F25 Founder) & Dr. Constantin Steigmiller (Director Delivery Hero)",
  },
  {
    company: "Colonia",
    url: "https://checkandrent.com/",
    role: "RevOps & Product",
    description: "Worked directly with both Jakob Sadoun & Kaspar Filipp",
  },
];

const projects = [
  {
    name: "Wiggle",
    url: "https://github.com/Konsequanzheng/wiggle",
    description: "AI-Powered 3D Interactive Animation Design Platform",
  },
];

const Experience = () => {
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

        {/* Experience Section */}
        <div className="mt-10">
          <p className="text-xs text-muted-foreground mb-4">Experience</p>

          <div className="border-t border-border">
            {experience.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 py-4 border-b border-border hover:opacity-70 transition-opacity group"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium leading-snug">
                    {item.company} <span className="text-muted-foreground font-normal">— {item.role}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10">
          <p className="text-xs text-muted-foreground mb-4">Projects</p>

          <div className="border-t border-border">
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 py-4 border-b border-border hover:opacity-70 transition-opacity group"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium leading-snug">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
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

export default Experience;
